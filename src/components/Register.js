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

  const email = document.createElement('input');
  email.classList.add('controls');
  email.placeholder = 'Ingresar correo';
  section.appendChild(email);

  const password = document.createElement('input');
  email.classList.add('controls');
  email.placeholder = 'Ingresa Contraseña';
  section.appendChild(password);

  const terminosYcondiciones = document.createElement('p');
  terminosYcondiciones.textContent = 'Estoy de acuerdo con';
  terminosYcondiciones.textContent = 'Terminos y condiciones';

  const enviarFormulario = document.createElement('input');
  email.classList.add('botons');
  email.value = 'Registrar';
  section.appendChild(enviarFormulario);
  HomeDiv.appendChild(section);

  const cuenta = document.createElement('p');
  cuenta.textContent = '¿ya tengo cuenta?';
  return HomeDiv;
};
   /* <div>
   {HomeDiv}
   <section className="form-registers">
     <h4>Formulario Registro</h4>
     <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingresar su Nombre" />
     <input className="controls" type="email" name="nombres" id="nombres" placeholder="Ingresar Correo" />
     <input className="controls" type="password" name="nombres" id="nombres" placeholder="Ingresar Contraseña" />
     <p>Estoy de acuerdo con<a href="#">Terminos y Condiciones</a></p>
     <input className="botons" type="submit" value="registrar" />
     <p><a href="#">¿Ya Tengo Cuenta?</a></p>
   </section>
 </div>
);*/
