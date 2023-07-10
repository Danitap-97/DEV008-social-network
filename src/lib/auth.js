import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from './firebase';

// const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();
export function loginGoogle (){
 return signInWithPopup(auth, provider)

}

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
