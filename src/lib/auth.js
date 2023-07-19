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
// export function guardarSpan(post) {
//   // Add a new document with a generated id.
//   const docRef = addDoc(collection(db, "cities"), {
//    nameUsuario:'sofia',
//    date:,
//    post: post
//   });
//   console.log("Document written with ID: ", docRef.id)
// }
// export const docRef = function(await){ addDoc(collection(db, "cities"), {
//   name: "",
//   country: ""
// });

// console.log("Document written with ID: ", docRef.id)
// }
function registrarUsuarioYVisualizar(email, password) {
  registrarUsuario(email, password)
    .then((userCredential) => {
      // Usuario registrado con éxito
      const user = userCredential.user.document.createElement('p');
      user.textContent = 'Registro Exitoso';
      user.style.color = 'black';
      console.log('Usuario registrado:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error al registrar el usuario:', errorCode, errorMessage);
    });
}

const email = 'ejemplo@correo.com';
const password = 'contraseña';

registrarUsuarioYVisualizar(email, password);
