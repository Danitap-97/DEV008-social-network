import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteField,
} from 'firebase/firestore';
import { db } from './firebase';

export const docRef = (contenido, fecha, nombre) => addDoc(collection(db, 'post'), {
  contenido,
  fecha,
  nombre,
});
export const eliminarContenido = doc(db, 'post', 'story');
updateDoc(eliminarContenido, {
  contenido: deleteField(),
})
  .then(() => {
    console.log('posts eliminado con éxito!');
  })
  .catch((error) => {
    console.error('Error al eliminar el posts', error);
  });
