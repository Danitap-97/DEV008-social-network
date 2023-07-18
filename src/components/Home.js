export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const section = document.createElement('section');
  section.classList.add('section-home');
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

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
  const footerHome = document.createElement('footer');
  footerHome.classList.add('footer-home');
  footerHome.textContent = 'Copyright © 2023 Traveling Friends, Inc. All rights reserved.';

  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  const registrado = document.createElement('p');
  registrado.textContent = '¿Ya estás registrado?';
  buttonLogin.textContent = 'Inicia sesion';
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
