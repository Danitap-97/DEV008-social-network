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
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  const registrado = document.createElement('p');
  registrado.textContent = '¿Ya estás registrado?';
  HomeDiv.appendChild(registrado);
  buttonLogin.textContent = 'Inicia sesion';
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(section);
  section.appendChild(navHome);
  navHome.appendChild(buttonRegister);
  navHome.appendChild(buttonLogin);
  return homeDiv;
};
