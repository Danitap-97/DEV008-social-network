import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// import { collection, addDoc } from "firebase/store";

import { auth } from './firebase';

// const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();
export function loginGoogle() {
  return signInWithPopup(auth, provider).then((userCredential) => {
    console.log(userCredential);
    // Obtencion de la informacion del usuario que inicio sesion
    const user = userCredential.user;
    localStorage.setItem('email', userCredential.user.email);
    console.log(user);
    return userCredential;
  };
  );
  
}

export function registrarUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
