import {
  docRef, deletePost, onGetPosts, upDateDoc,
} from '../lib/firestore.js';

import { auth } from '../lib/firebase.js';

export const Landing = () => {
  const landingDiv = document.createElement('div');
  landingDiv.classList.add('landing-class');
  const header = document.createElement('header');
  if (landingDiv) {
    landingDiv.appendChild(header);
  }
  // Agregar la marca de la página web (imagen)
  const logoContainer = ` 
  <div class="logo-container">
    <img src="https://firebasestorage.googleapis.com/v0/b/social-network-2-293be.appspot.com/o/Blue%20%26%20Yellow%20Minimal%20Travel%20Agency%20Free%20Logo.png?alt=media&token=cd186baa-c430-4feb-a010-e5cfa600dfdd" alt="Logo de la página web" />
  </div>
  `;
  header.insertAdjacentHTML('beforeend', logoContainer);

  const usuarioIcono = document.createElement('img');
  usuarioIcono.classList.add('user-icon');
  usuarioIcono.src = 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_1280.png';
  header.appendChild(usuarioIcono);

  const buscarEnWeb = document.createElement('input');
  buscarEnWeb.classList.add('search-box');
  buscarEnWeb.type = 'text';
  buscarEnWeb.id = 'search-input';
  buscarEnWeb.placeholder = 'Buscar...';
  header.appendChild(buscarEnWeb);

  const botonBuscarUsuario = document.createElement('button');
  botonBuscarUsuario.classList.add('botonBuscarUsuario');
  botonBuscarUsuario.textContent = 'Buscar';
  header.appendChild(botonBuscarUsuario);

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
    const userName = auth.currentUser.email;
    const currentDate = new Date().toLocaleDateString();

    docRef(comment, currentDate, userName).then((resultado) => {
      console.log(resultado, 'al agregar');
    });

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
    /* Se crea variable para crear contenedor posts */
    let contendorPosts = '';
    /* Se recorre el listado de posts y se crean todos los posts sin un contenedor */
    let posts = '';
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
          </div>
          <div class="post-delete">
            <i data-idpost="${post.id}" class="fa fa-trash post-delete-button" aria-hidden="true"></i>
          </div>
        <div class="post-content">
          ${post.contenido}
        </div>
        <div class="post-like" id="likepost" value = "${posts}">
            <i id= "${post.contenido} "  class='fa fa-thumbs-o-up : fa fa-thumbs-up  post-like-button class = 'postlike' aria-hidden='true'></i>
            </div>
            <div class="post-edition">
            <i data-idpost="${post.buttonsEditionList} class="fa fa-pencil post-edition-button" aria-hidden="true"></i>
          </div>
      </div>
      `;
      console.log(post.isLike);
      // crear evento para el boton
      posts = `${posts}${postHtml}`;
    });

    /* Se verifica si ya hay un post-container */
    const contenedor = document.getElementById('posts-container');
    if (contenedor) {
      /* Si lo hay, se limpia y en ese mismo contenedor existente se agregan los posts */
      contenedor.innerHTML = '';
      contenedor.insertAdjacentHTML('beforeend', posts);
    } else {
      /* Si no hay un contenedor existe creamos uno nuevo */
      /* Se crea el inicio del div posts-container en el que se agregaran todos los post */
      contendorPosts = '<div id="posts-container" class="posts-container">';
      /* Se llena el contenedor con los posts */
      contendorPosts = `${contendorPosts}${posts}`;
      /* Se cierra el div posts-container */
      contendorPosts = `${contendorPosts}</div>`;
      /* Se insertan todos los posts al landingDiv */
      landingDiv.insertAdjacentHTML('beforeend', contendorPosts);
    }

    /* Se buscan todos los botones de eliminar y se le agrega la funcion de eliminar por su id */
    const buttonsDeleteList = landingDiv.querySelectorAll(
      '.post-delete-button',
    );
    buttonsDeleteList.forEach((button) => {
      button.addEventListener('click', (event) => {
        const idPost = event.target.dataset.idpost;
        /* Se muestra un confirm dialog para confirmar la eliminacón */
        // eslint-disable-next-line no-alert
        const confMessage = window.confirm(
          '¿Estás seguro que quieres eliminar el post?',
        );

        /* Verificamos si el usuario acepto el mensaje y si lo acepto, eliminas el post por id */
        if (confMessage) {
          deletePost(idPost);
        }
      });
    });
    const like = document.getElementsByClassName('postlike');
    like.value = posts;
    console.log(like, 'prueba');
    like.addEventListener('click', (btn) => {
      console.log(btn.target.value);
      //const likeActual = event.target.value.post.like;
      //console.log(likeActual);
      //const arrayEmail = localStorage.email;
      //const hasLike = likeActual.includes(arrayEmail);
      //Utilizamos métodos de remove y union en Firebase. Importamos updatePostLike.
      //if (hasLike) {
      //  updateLike(event.target.value.id, 'remove');
      //} else {
      //  updateLike(event.target.value.id, 'union');
      // }
    });
  });

  const buttonsEditionList = landingDiv.querySelectorAll(
    '.post-edition-button',
  );
  buttonsEditionList.forEach((button) => {
    button.addEventListener('click', (event) => {
      const idPost = event.target.dataset.idpost;
      /* Se muestra un confirm dialog para confirmar la eliminacón */
      // eslint-disable-next-line no-alert
      const confMessage = window.confirm(
        '¿Estás seguro que quieres editar el post?',
      );

      /* Verificamos si el usuario acepto el mensaje y si lo acepto, eliminas el post por id */
      if (confMessage) {
        upDateDoc(idPost);
      }
    });
  });

  return landingDiv;
};
