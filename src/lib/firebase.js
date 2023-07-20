import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Replace the following with your app's Firebase project configuration

export const firebaseConfig = {
  apiKey: 'AIzaSyBYKTgzTOfwLkqIwUgUYjaa01SenkYMW6k',
  authDomain: 'social-network-2-293be.firebaseapp.com',
  projectId: 'social-network-2-293be',
  storageBucket: 'social-network-2-293be.appspot.com',
  messagingSenderId: '742971928202',
  appId: '1:742971928202:web:d06cdcbd266de295f18773',
  measurementId: 'G-YMDMY4MJV8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const collectionData = doc(firebaseConfig);
// export const firestore = getAuth(collectionData);

// const collectionUsuario = getDoc(firebaseConfig);

// Add a new document with a generated id.
