export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida a Login';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  HomeDiv.appendChild(buttonHome);
  return HomeDiv;
};
