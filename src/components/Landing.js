import { docRef, deletePost, onGetPosts } from '../lib/firestore.js';

export const Landing = () => {
  const landingDiv = document.createElement('div');
  landingDiv.classList.add('landing-class');
  // Agregar la marca de la página web (imagen)
  const logoContainer = ` 
  <div class="logo-container">
    <img src="https://firebasestorage.googleapis.com/v0/b/social-network-2-293be.appspot.com/o/Blue%20%26%20Yellow%20Minimal%20Travel%20Agency%20Free%20Logo.png?alt=media&token=cd186baa-c430-4feb-a010-e5cfa600dfdd" alt="Logo de la página web" />
  </div>
  `;
  landingDiv.insertAdjacentHTML('beforeend', logoContainer);

  const postDiv = document.createElement('div');
  postDiv.classList.add('post-class');
  const textarea = document.createElement('textarea');
  textarea.id = 'story';
  textarea.name = 'story';
  textarea.rows = '5';
  textarea.cols = '33';
  textarea.placeholder = 'Escribe tu publicación aquí';
  textarea.classList.add('textarea-style');
  postDiv.appendChild(textarea);

  const publishButton = document.createElement('button');
  publishButton.id = 'publishButton';
  publishButton.textContent = 'Publicar';
  publishButton.classList.add('button-style');

  function handlePublish() {
    const storyTextarea = postDiv.querySelector('#story');
    const comment = storyTextarea.value;

    // Obtener el nombre de usuario y la fecha actual
    const userName = '';
    const currentDate = new Date().toLocaleDateString();
    docRef(comment, currentDate, userName);
    //         .then((userCredential) => {
    //  Usuario registrado con éxito
    //       const user = userCredential.user.document.createElement('p');
    //       user.textContent = 'Registro Exitoso';
    //       user.style.color = 'black';
    //       console.log('Usuario registrado:', user);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.error('Error al registrar el usuario:', errorCode, errorMessage);
    //     });
    // }
    // Crear elementos para el nombre de usuario, la fecha y el comentario
    const userElement = document.createElement('span');
    userElement.textContent = `${userName}: `;

    const dateElement = document.createElement('span');
    dateElement.textContent = `${currentDate} - `;
    const commentElement = document.createElement('p');
    commentElement.textContent = comment;

    // Adjuntar los elementos al landingDiv
    landingDiv.appendChild(userElement);
    landingDiv.appendChild(dateElement);
    landingDiv.appendChild(commentElement);
  }
  publishButton.addEventListener('click', handlePublish);

  postDiv.appendChild(publishButton);
  landingDiv.appendChild(postDiv);

  /* Obtener y listar los posts */
  onGetPosts((postsSnapshot) => {
    /* Se obtiene los posts en tiempo real y se agregan a la lista postsLists */
    const postsList = [];
    postsSnapshot.forEach((docu) => {
      postsList.push({ id: docu.id, ...docu.data() });
    });
    console.log(postsList);
    /* Se verifica si ya hay un post-container, si lo hay, se limpia */
    const contenedor = document.getElementById('posts-container');
    if (contenedor) {
      contenedor.innerHTML = '';
    }

    /* Se crea el inicio del div posts-container en el que se agregaran todos los post */
    let contendorPosts = '<div id="posts-container" class="posts-container">';
    /* Se recorre el listado de posts */
    postsList.forEach((post) => {
      /* Se crea la estructura de cada post y se van agregando uno a uno al posts-container */
      const postHtml = ` 
      <div class="post">
        <div class="post-header">
          <div class="post-info">
            <div class="post-user">
              ${post.nombre}
            </div>
            <div class="post-date">
              ${post.fecha}
            </div>
          </div>
          <div class="post-delete">
            <i data-idpost="${post.id}" class="fa fa-trash post-delete-button" aria-hidden="true"></i>
          </div>
        </div>
        <div class="post-content">
          ${post.contenido}
        </div>
      </div>
      `;
      contendorPosts = `${contendorPosts}${postHtml}`;
    });
    /* Se cierra el div posts-container */
    contendorPosts = `${contendorPosts}</div>`;
    /* Se insertan todos los posts al landingDiv */
    landingDiv.insertAdjacentHTML('beforeend', contendorPosts);

    /* Se buscan todos los botones de eliminar y se le agrega la funcion de eliminar por su id */
    const buttonsDeleteList = landingDiv.querySelectorAll('.post-delete-button');
    buttonsDeleteList.forEach((button) => {
      button.addEventListener('click', (event) => {
        const idPost = event.target.dataset.idpost;
        /* Se muestra un confirm dialog para confirmar la eliminacón */
        // eslint-disable-next-line no-alert
        const confMessage = window.confirm('¿Estás seguro que quieres eliminar el post?');
        /* Verificamos si el usuario acepto el mensaje y si lo acepto, eliminas el post por id */
        if (confMessage) {
          deletePost(idPost);
        }
      });
    });
  });

  // const likeButton = document.createElement('button');
  // likeButton.textContent = 'Me gusta';
  // likeButton.addEventListener('click', () => {
  //   likesCount++;
  //   updateLikesDislikes();
  //   // Lógica para incrementar los "Me gusta"
  //   console.log('¡Me gusta!');
  //   console.log('likesCount++');
  // });

  // const dislikeButton = document.createElement('button');
  // dislikeButton.textContent = 'No me gusta';
  // dislikeButton.addEventListener('click', () => {
  //   dislikesCount++;
  //   updateLikesDislikes();
  //   // Lógica para incrementar los "No me gusta"
  //   console.log('¡No me gusta!');
  // });
  // postElement.addEventListener('click', () => {
  //   const userInput = prompt('Escribe tu comentario');
  //   if (userInput) {
  //     console.log('El usuario escribió:', userInput);
  //   } else {
  //     console.log('El usuario no escribió ningún comentario');
  //   }
  // });
  // function updateLikesDislikes() {
  //   const likesElement = document.getElementById('likes');
  //   const dislikesElement = document.getElementById('dislikes');

  //   likesElement.textContent = `Me gusta: ${likesCount}`;
  //   dislikesElement.textContent = `No me gusta: ${dislikesCount}`;

  //   console.log(`Me gusta: ${likesCount}`);
  //   console.log(`No me gusta: ${dislikesCount}`);
  // }
  // landingDiv.appendChild(likeButton);
  // landingDiv.appendChild(dislikeButton);

  return landingDiv;
};
