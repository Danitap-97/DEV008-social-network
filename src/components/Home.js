export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  const registrado = document.createElement('p');
  registrado.textContent = '¿Ya estás registrado?';
  HomeDiv.appendChild(registrado);
  buttonLogin.textContent = 'Inicia sesion';
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);
  return HomeDiv;
};
