import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from './firebase';

// const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();
export function loginGoogle() {
  return signInWithPopup(auth, provider);
}
