export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const section = document.createElement('section');
  section.classList.add('section-home');
  const navHome = document.createElement('navHome');
  navHome.classList.add('nav-home');
  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('button-register');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('button-login');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesion';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(section);
  section.appendChild(navHome);
  navHome.appendChild(buttonRegister);
  navHome.appendChild(buttonLogin);
  return homeDiv;
};
