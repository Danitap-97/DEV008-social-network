export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const section = document.createElement('section');
  section.classList.add('section-home');
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  const modalSomos = document.createElement('article');
  modalSomos.classList.add('modal-somos');
  modalSomos.textContent = 'Bienvenidos a nuestra emocionante red social de viajes! Somos un equipo apasionado de viajeros y entusiastas de la aventura, Nuestro objetivo es brindarte una comunidad dinámica donde puedas compartir tus propias experiencias de viaje, conectarte con otros viajeros, buscar recomendaciones y descubrir destinos fascinantes que quizás no hayas considerado antes. Queremos que te sientas inspirado y empoderado para explorar el mundo y crear tu propia historia de viaje, En nuestra red social de viajes, puedes crear un perfil personalizado para mostrar tus destinos favoritos, tus fotos más impactantes y tus consejos más valiosos. Puedes conectarte con otros viajeros, seguir sus perfiles y descubrir sus aventuras,';

  const logoImage = document.createElement('img');
  logoImage.src = 'https://firebasestorage.googleapis.com/v0/b/social-network-2-293be.appspot.com/o/Blue%20%26%20Yellow%20Minimal%20Travel%20Agency%20Free%20Logo.png?alt=media&token=cd186baa-c430-4feb-a010-e5cfa600dfdd'; // Reemplaza 'ruta-de-la-imagen/logo.png' con la ruta correcta de tu imagen
  logoImage.alt = 'Logo de la página web';
  logoContainer.appendChild(logoImage);

  const navHome = document.createElement('nav');
  navHome.classList.add('nav-home');
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('button-register');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('button-login');
  const buttonSomos = document.createElement('button');
  buttonSomos.classList.add('button-somos');
  const footerHome = document.createElement('footer');
  footerHome.classList.add('footer-home');
  footerHome.textContent = 'Copyright © 2023 Traveling Friends, Inc. All rights reserved.';
  function openModal() {
    const modalSomosFlex = modalSomos.style.display === 'flex';
    if (modalSomosFlex) {
      modalSomos.style.display = 'none';
    } else {
      modalSomos.style.display = 'flex';
    }
  }

  buttonSomos.textContent = 'Quienes Somos';
  buttonSomos.addEventListener('click', openModal);
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  const registrado = document.createElement('p');
  registrado.textContent = '¿Ya estás registrado?';
  buttonLogin.textContent = 'Inicia sesion';
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(section);
  section.appendChild(navHome);
  section.appendChild(modalSomos);
  homeDiv.appendChild(footerHome);
  navHome.appendChild(logoContainer);
  navHome.appendChild(buttonContainer);
  buttonContainer.appendChild(buttonSomos);
  buttonContainer.appendChild(buttonRegister);
  buttonContainer.appendChild(buttonLogin);
  return homeDiv;
};
