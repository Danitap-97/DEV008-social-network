import { registrarUsuario } from '../lib/firebase';
import { loginGoogle } from '../lib/auth';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const section = document.createElement('section');
  section.classList.add('form-register');
  const titulo = document.createElement('h4');
  titulo.textContent = 'Bienvenid@ al Registro';
  const nombres = document.createElement('input');
  nombres.classList.add('controls');
  nombres.placeholder = 'Ingresa su Nombre';
  section.appendChild(titulo);
  section.appendChild(nombres);
  nombres.addEventListener('input', () => {
    nombres.value = nombres.value.replace(/[0-9]/g, '');
  });

  const correo = document.createElement('input');
  correo.classList.add('controls');
  correo.placeholder = 'Ingresa correo';
  correo.addEventListener('input', () => {
    correo.value = correo.value.replace(/[A-Z]/g, '');
  });
  section.appendChild(correo);
  const password = document.createElement('input');
  password.classList.add('controls');
  password.type = 'password';
  password.placeholder = 'Ingresa Contraseña';
  password.setAttribute('maxlength', '16');
  section.appendChild(password);

  const terminos = document.createElement('p');
  terminos.textContent = 'Acepto términos y condiciones';
  section.appendChild(terminos);

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('controls');
  buttonRegister.textContent = 'Registrarse';
  buttonRegister.addEventListener('click', () => {
    const nombreValue = nombres.value;
    const correoValue = correo.value;
    const passwordValue = password.value;
    if (nombreValue && correoValue && passwordValue) {
      registrarUsuario(correoValue, passwordValue)
        .then((value) => {
          console.log(value);
          const registroExitoso = document.createElement('p');
          registroExitoso.textContent = 'Registro Exitoso';
          registroExitoso.style.color = 'black';
          onNavigate('/login');
        })
        .catch(() => {
          const errorRegistro = document.createElement('p');
          errorRegistro.textContent = 'Oh Error, correo ya registrado';
          errorRegistro.style.color = 'white';
          section.appendChild(errorRegistro);
        });
    } else {
      const errorElement = document.createElement('p');
      errorElement.textContent = 'Por favor, complete todos los campos';
      errorElement.style.color = 'white';
      section.appendChild(errorElement);
    }
  });
  section.appendChild(buttonRegister);

  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('id', 'google-signin-button');
  buttonGoogle.addEventListener('click', () => {
    loginGoogle().then(() => {
      onNavigate('/landing');
    });
  });
  buttonGoogle.innerHTML = '<img src=\'https://cdn-icons-png.flaticon.com/512/2702/2702602.png\' class="icono-google"> iniciar sesión con Google';
  section.appendChild(buttonGoogle);

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('controls');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  section.appendChild(buttonHome);
  HomeDiv.appendChild(section);
  return HomeDiv;
};
