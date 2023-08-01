import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import { db } from './firebase';

export const docRef = (contenido, fecha, nombre) => addDoc(collection(db, 'post'), {
  contenido,
  fecha,
  nombre,
  like: [],
});

/* Función que lista los posts y cuando se agrega un nuevo post se vuela a ejecutar */
export const onGetPosts = (callback) => onSnapshot(query(collection(db, 'post'), orderBy('fecha', 'asc')), callback);

/* Función que elimina el post por id */
export const deletePost = (id) => deleteDoc(doc(db, 'post', id));
// export const updateLike = (id, tipo ) => {
//   const email = localStorage.getItem(email);
// };

export const upDateDoc = (id, nuevoContenido) => setDoc(doc(db, 'post', id), { contenido: nuevoContenido }, { merge: true });
