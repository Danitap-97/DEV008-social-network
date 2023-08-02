import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  setDoc,
  limit,
} from 'firebase/firestore';
import { db } from './firebase';

export const docRef = (contenido, fecha, nombre) => addDoc(collection(db, 'post'), {
  contenido,
  fecha,
  nombre,
  likes: [],
});

/* Función que lista los posts y cuando se agrega un nuevo post se vuela a ejecutar */
export const onGetPosts = (callback) => onSnapshot(query(collection(db, 'post'), orderBy('fecha', 'desc'), limit(1000)), callback);

export const deletePost = (idPost) => deleteDoc(doc(db, 'post', idPost));

export const updateLike = (idPost, likes) => {
  const postSelected = doc(db, 'post', idPost);
  // eslint-disable-next-line no-use-before-define
  return upDateDoc(postSelected, { likes });
};

export const upDateDoc = (idPost, nuevoContenido) => setDoc(doc(db, 'post', idPost), { contenido: nuevoContenido }, { merge: true });
