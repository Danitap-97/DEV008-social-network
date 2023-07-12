export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const section = document.createElement('section');
  section.classList.add('section-home');
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const logoImage = document.createElement('img');
  logoImage.src = 'https://firebasestorage.googleapis.com/v0/b/social-network-e2319.appspot.com/o/Blue___Yellow_Minimal_Travel_Agency_Free_Logo-removebg-preview.png?alt=media&token=777e5a3b-7cdc-4bec-980a-d160947cd0fb'; // Reemplaza 'ruta-de-la-imagen/logo.png' con la ruta correcta de tu imagen
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
  const footerHome = document.createElement('footer');
  footerHome.classList.add('footer-home');
  footerHome.textContent = 'Copyright © 2023 Traveling Friends, Inc. All rights reserved.';

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesion';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(section);
  section.appendChild(navHome);
  homeDiv.appendChild(footerHome);
  navHome.appendChild(logoContainer);
  navHome.appendChild(buttonContainer);
  buttonContainer.appendChild(buttonRegister);
  buttonContainer.appendChild(buttonLogin);
  return homeDiv;
};
