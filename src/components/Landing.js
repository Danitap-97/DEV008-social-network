import { docRef } from '../lib/firestore.js';

export const Landing = () => {
  const landingDiv = document.createElement('div');
  // const logoImageFondo = document.createElement('img');
  // logoImageFondo.src = 'https://firebasestorage.googleapis.com/v0/b/social-network-2-293be.appspot.com/o/fondo_blanco_png_by_valuueditions_d4ahzc3-fullview.png?alt=media&token=435402cb-43e5-454f-84ce-42a50c00f1da';
  // logoImageFondo.alt = 'Logo de la página web';
  // landingDiv.appendChild(logoImageFondo);

  landingDiv.classList.add('landing-class');
  // Agregar la marca de la página web (imagen)
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const logoImage = document.createElement('img');
  logoImage.src = 'https://firebasestorage.googleapis.com/v0/b/social-network-2-293be.appspot.com/o/Blue%20%26%20Yellow%20Minimal%20Travel%20Agency%20Free%20Logo.png?alt=media&token=cd186baa-c430-4feb-a010-e5cfa600dfdd'; // Reemplaza 'ruta-de-la-imagen/logo.png' con la ruta correcta de tu imagen
  logoImage.alt = 'Logo de la página web';
  logoContainer.appendChild(logoImage);

  landingDiv.appendChild(logoContainer);

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
    const userName = 'Nombre de usuario';
    const currentDate = new Date().toLocaleDateString();

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
    // agregar la eliminacion
    docRef();
  }

  publishButton.addEventListener('click', handlePublish);

  postDiv.appendChild(publishButton);

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

  landingDiv.appendChild(postDiv);
  // landingDiv.appendChild(likeButton);
  // landingDiv.appendChild(dislikeButton);

  return landingDiv;
};
