export const Login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  loginDiv.classList.add('form-register');
  loginDiv.textContent = 'Bienvenido a la página de inicio de sesión';

  const emailInput = document.createElement('input');
  emailInput.classList.add('controls');
  emailInput.type = 'email';
  emailInput.placeholder = 'Correo electrónico';
  loginDiv.appendChild(emailInput);

  const passwordInput = document.createElement('input');
  passwordInput.classList.add('controls');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Contraseña';
  loginDiv.appendChild(passwordInput);

  const loginButton = document.createElement('button');
  loginButton.classList.add('controls');
  loginButton.textContent = 'Iniciar sesión';
  loginButton.addEventListener('click', () => {
    const correoUsuario = emailInput.value;
    const passworUsuario = passwordInput.value;
    if (correoUsuario && passworUsuario) {
      onNavigate('/landing');
    } else {
      const errorInicio = document.createElement('p');
      errorInicio.textContent = 'Por favor, complete todos los campos';
      errorInicio.style.color = 'red';
      loginDiv.appendChild(errorInicio);
    }
  });
  loginDiv.appendChild(loginButton);

  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('id', 'google-signin-button');
  buttonGoogle.addEventListener('click', () => {});
  buttonGoogle.innerHTML = '<img src=\'https://cdn-icons-png.flaticon.com/512/2702/2702602.png\' class="icono-google"> iniciar sesión con Google';
  loginDiv.appendChild(buttonGoogle);
  const backHomeButton = document.createElement('button');
  backHomeButton.classList.add('controls');
  backHomeButton.textContent = 'Regresar al Home';
  backHomeButton.addEventListener('click', () => onNavigate('/'));
  loginDiv.appendChild(backHomeButton);

  return loginDiv;
};
