import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';

export const docRef = (contenido, fecha, nombre) => addDoc(collection(db, 'post'), {
  contenido,
  fecha,
  nombre,
  likes: [],
});

/* Función que lista los posts y cuando se agrega un nuevo post se vuela a ejecutar */
export const onGetPosts = (callback) => onSnapshot(query(collection(db, 'post'), orderBy('fecha', 'desc')), callback);

/* Función que elimina el post por id */
export const deletePost = (idPost) => deleteDoc(doc(db, 'post', idPost));

export const updateLike = (idPost, likes) => {
  const postSelected = doc(db, 'post', idPost);
  return updateDoc(postSelected, { likes });
};

export const upDateDoc = (id) => upDateDoc(doc(db, 'post', id));
