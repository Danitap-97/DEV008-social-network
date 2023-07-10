import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration

export const firebaseConfig = {
  apiKey: 'AIzaSyATBUTgJTxigajaUl_JKQI5OUkFigfNOpM',
  authDomain: 'social-network-e2319.firebaseapp.com',
  projectId: 'social-network-e2319',
  storageBucket: 'social-network-e2319.appspot.com',
  messagingSenderId: '338428955083',
  appId: '1:338428955083:web:676d5a2fa2484096cbce4e',
  measurementId: 'G-77JZQN59HW',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function registrarUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
