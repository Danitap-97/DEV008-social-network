import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// import { collection, addDoc } from "firebase/store";

import { auth } from './firebase';

// const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();
export function loginGoogle() {
  return signInWithPopup(auth, provider);
}
export function registrarUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
