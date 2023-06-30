export const Home = () => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = Document.createElement('button');
  const buttonLogin = Document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesion';

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);
  return HomeDiv;
};
