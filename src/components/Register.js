export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al registro';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  const section = document.createElement('section');
  section.classList.add('form-registers');
  const titulo = document.createElement('h4');
  titulo.textContent = 'Formulario Registro';
  const nombres = document.createElement('input');
  nombres.classList.add('controls');
  nombres.placeholder = 'Ingresar su Nombre';
  section.appendChild(titulo);
  section.appendChild(nombres);

  const correo = document.createElement('input');
  correo.classList.add('controls');
  correo.placeholder = 'Ingresar correo';
  section.appendChild(correo);

  const password = document.createElement('input');
  password.classList.add('controls');
  password.type = 'password';
  password.placeholder = 'Ingresa Contraseña';
  section.appendChild(password);

  const terminos = document.createElement('p');
  terminos.textContent = 'Acepto los términos y condiciones';
  section.appendChild(terminos);

  const registrado = document.createElement('p');
  registrado.textContent = '¿Ya estás registrado?';
  section.appendChild(registrado);

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrarse';
  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const nombreValue = nombres.value;
    const correoValue = correo.value;
    const passwordValue = password.value;
    if (nombreValue && correoValue && passwordValue) {
      onNavigate('/login');
    } else {
      const errorElement = document.createElement('p');
      errorElement.textContent = 'Por favor, complete todos los campos';
      errorElement.style.color = 'red';
      section.appendChild(errorElement);
    }
  });
  section.appendChild(buttonRegister);

  HomeDiv.appendChild(section);

  return HomeDiv;
};
