import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
const email = 'ejemplo@correo.com';
const password = 'contraseña';
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in

    const user = userCredential.user;

    console.log('Usuario registrado:', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error al registrar el usuario:', errorCode, errorMessage);
  });
