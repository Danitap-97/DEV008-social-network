export const Login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  loginDiv.textContent = 'Bienvenido a la página de inicio de sesión';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Correo electrónico';
  loginDiv.appendChild(emailInput);

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Contraseña';
  loginDiv.appendChild(passwordInput);

  const loginButton = document.createElement('button');
  loginButton.textContent = 'Iniciar sesión';
  loginButton.addEventListener('click', () => {
    // Aquí puedes realizar la lógica de autenticación y redireccionamiento
    // a la página correspondiente después de iniciar sesión

  });
  loginDiv.appendChild(loginButton);

  const backHomeButton = document.createElement('button');
  backHomeButton.textContent = 'Regresar al Home';
  backHomeButton.addEventListener('click', () => onNavigate('/'));
  loginDiv.appendChild(backHomeButton);

  return loginDiv;
};
