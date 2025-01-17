import { loginGoogle } from '../lib/auth';

export const Login = (onNavigate) => {
  const loginDivR = document.createElement('main');
  loginDivR.classList.add('login-main');
  const loginDiv = document.createElement('div');
  loginDiv.classList.add('login-div');
  const section = document.createElement('section');
  section.classList.add('form-register');
  const titulo = document.createElement('h4');
  titulo.textContent = 'Bienvenid@ a la página de inicio sesión';
  section.appendChild(titulo);
  const emailInput = document.createElement('input');
  emailInput.classList.add('controls');
  emailInput.classList.add('inputs');
  emailInput.type = 'email';
  emailInput.placeholder = 'Correo electrónico';
  emailInput.addEventListener('input', () => {
    emailInput.value = emailInput.value.replace(/[A-Z]/g, '');
  });
  section.appendChild(emailInput);

  const passwordInput = document.createElement('input');
  passwordInput.classList.add('controls');
  passwordInput.classList.add('inputs');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Contraseña';
  passwordInput.setAttribute('maxlength', '16');
  section.appendChild(passwordInput);
  section.appendChild(passwordInput);

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
      loginDivR.appendChild(errorInicio);
    }
  });
  section.appendChild(loginButton);

  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('id', 'google-signin-button');
  buttonGoogle.addEventListener('click', () => {
    loginGoogle().then(() => {
      onNavigate('/landing');
    });
  });
  buttonGoogle.innerHTML = '<img src=\'https://cdn-icons-png.flaticon.com/512/2702/2702602.png\' class="icono-google"> iniciar sesión con Google';
  section.appendChild(buttonGoogle);

  const backHomeButton = document.createElement('button');
  backHomeButton.classList.add('controls');
  backHomeButton.textContent = 'Regresar al Home';
  backHomeButton.addEventListener('click', () => onNavigate('/'));
  section.appendChild(backHomeButton);
  loginDivR.appendChild(loginDiv);
  loginDiv.appendChild(section);
  return loginDivR;
};
