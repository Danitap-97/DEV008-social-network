/* eslint-disable no-shadow */
import {
  docRef, deletePost, onGetPosts, upDateDoc, updateLike,
} from '../lib/firestore.js';

import { auth } from '../lib/firebase.js';

export const Landing = () => {
  const landingDiv = document.createElement('div');
  landingDiv.classList.add('landing-class');
  const header = document.createElement('header');
  const navRight = document.createElement('div');
  navRight.classList.add('nav-right');
  const navLeft = document.createElement('div');
  navLeft.classList.add('nav-left');
  if (landingDiv) {
    landingDiv.appendChild(header);
    header.appendChild(navLeft);
    header.appendChild(navRight);
  }
  // Agregar la marca de la página web (imagen)
  const logoContainer = ` 
  <div class="logo-container">
    <img src="https://firebasestorage.googleapis.com/v0/b/social-network-2-293be.appspot.com/o/Blue%20%26%20Yellow%20Minimal%20Travel%20Agency%20Free%20Logo.png?alt=media&token=cd186baa-c430-4feb-a010-e5cfa600dfdd" alt="Logo de la página web" />
  </div>
  `;
  navLeft.insertAdjacentHTML('beforeend', logoContainer);

  const usuarioIcono = document.createElement('img');
  usuarioIcono.classList.add('user-icon');
  usuarioIcono.src = 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_1280.png';
  navLeft.appendChild(usuarioIcono);

  const buscarEnWeb = document.createElement('input');
  buscarEnWeb.classList.add('search-box');
  buscarEnWeb.type = 'text';
  buscarEnWeb.id = 'search-input';
  buscarEnWeb.placeholder = 'Buscar...';
  navRight.appendChild(buscarEnWeb);

  const botonBuscarUsuario = document.createElement('button');
  botonBuscarUsuario.classList.add('botonBuscarUsuario');
  botonBuscarUsuario.textContent = 'Buscar';
  navRight.appendChild(botonBuscarUsuario);

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
  const modal = document.createElement('div');
  modal.id = 'editModal';
  modal.classList.add('modal');
  modal.innerHTML = `<!-- Agrega este modal al final de tu documento HTML, justo antes de </body> -->
      <div class="modal-content">
          <span class="close">&times;</span>
          <textarea id="editContent"></textarea>
          <button data-id="" id="saveEditButton">Guardar cambios</button>
  </div>`;
  modal.querySelector('.close').addEventListener('click', () => {
    //  función para cerrar el modal
    modal.style.display = 'none';
  });
  landingDiv.appendChild(modal);

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
      // creamos variables para almacenar todas las propiedades del documento
      const postProperties = docu.data();
      // obtenemos el correo electronico del usuario
      const email = auth.currentUser.email;
      // almacenamos los like de los post
      // y usamos filter para filtrar los que coincidan con el correo del usuario
      const miLike = postProperties.likes.filter((item) => item === email);
      // creamos una comparacion para verificar si el post pertenece al usuario
      const esMiPost = email === postProperties.nombre;
      // agregamos nuevos objetos a postlist
      postsList.push({
        id: docu.id, ...postProperties, miLike, esMiPost,
      });
    });
    /* Se crea variable para crear contenedor posts */
    let contendorPosts = '';
    /* Se recorre el listado de posts y se crean todos los posts sin un contenedor */
    let posts = '';
    postsList.forEach((post) => {
      /* Se crea la estructura de cada post y se van agregando uno a uno al posts-container */
      const postHtml = ` 
      <div class="post">
        <div class="post-left">
        <div class="post-header">
          <div class="post-info">
            <div class="post-user">
              <div class="post-user">
                ${post.nombre}
              </div>
             
            </div>
            <div class="post-date">
              ${post.fecha}
            </div>
          </div>
          </div>
          <div class="post-content">
            ${post.contenido}
          </div>
          <div class="post-like">
<<<<<<< HEAD
          <i data-idpost="${post.id}" class="fa fa-thumbs-up post-like-button" aria-hidden="true" style="color: ${post.miLike.length > 0 ? 'black' : 'gray'}"></i>
          </div>
        </div>
        <div class="post-right">
        <div class="post-edition ${post.esMiPost ? '' : 'ocultar'}">
        <i data-idpost="${post.id}" class="fa fa-pencil post-edition-button" click="guardarCambios('${post.contenido}')" aria-hidden="true"></i>
          </div>
          <div class="post-delete ${post.esMiPost ? '' : 'ocultar'}">
            <i data-idpost="${post.id}" class="fa fa-trash post-delete-button" aria-hidden="true"></i>
          </div>
=======
            <i data-idpost="${post.id}" class="fa fa-thumbs-up post-like-button" aria-hidden="true" style="color: ${post.miLike.length > 0 ? 'black' : 'gray'}"></i>
            ${post.likes.length}
          </div>
        </div>
        <div class="post-right">
            <div class="post-delete ${post.esMiPost ? '' : 'ocultar'}">
                <i data-idpost="${post.id}" class="fa fa-trash post-delete-button" aria-hidden="true"></i>
            </div>
>>>>>>> 8e40a9f0614325591172dfa45615d7564e477e4f
        </div>
        <div class="post-edition ${post.esMiPost ? '' : 'ocultar'}">
            <i data-idpost="${post.id}" class="fa fa-pencil post-edition-button" click="guardarCambios('${post.contenido}')" aria-hidden="true"></i>
        </div>
    </div>
    
      `;
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

    const buttonLikeList = landingDiv.querySelectorAll('.post-like-button');
    buttonLikeList.forEach((buttonLike) => {
      buttonLike.addEventListener('click', (event) => {
        const idPost = event.target.dataset.idpost;
        // en el objeto postsList se busca el objeto que sea igual a la variable idPost
        const postSelected = postsList.find((post) => post.id === idPost);
        if (postSelected) {
          const email = auth.currentUser.email;
          if (postSelected.miLike.length > 0) {
            // si le di like anteriormente
            const newLikes = postSelected.likes.filter((like) => like !== email);
            updateLike(idPost, newLikes);
          } else {
            // si no le he dado like
            const newLikes = postSelected.likes;
            newLikes.push(email);
            updateLike(idPost, newLikes);
          }
        }
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
        // Actualiza la función para editar el post y mostrar el modal con el contenido actual
        function editarPost(contenido) {
          const editModal = document.getElementById('editModal');
          const editContent = document.getElementById('editContent');

          // Colocamos el contenido actual del post en el textarea del modal
          editContent.value = contenido;

          // Mostramos el modal
          editModal.style.display = 'block';
          // Agregar un listener de click al botón de guardar cambios en el modal
          const saveEditButton = document.getElementById('saveEditButton');
          saveEditButton.addEventListener('click', () => {
          // Obtener el nuevo contenido del post del textarea del modal
            const nuevoContenido = document.getElementById('editContent').value;
            console.log(nuevoContenido);
            // Llamar a la función para actualizar el documento con el nuevo contenido
            upDateDoc(idPost, nuevoContenido)
              .then(() => {
                // forzara a que se cierre el modal
                alert(`Cambios guardados para el post con ID ${idPost}`);
              })
              .catch(() => {
                alert(` Error Cambios guardados para el post con ID ${idPost}`);
              });
          });
        }
        /* Verificamos si el usuario acepto el mensaje y si lo acepto, eliminas el post por id */
        if (confMessage) {
          console.log(event.target);
          editarPost('');
          // upDateDoc(idPost, 'post actualizado');
        }
      });
    });
  });
  return landingDiv;
};
