import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import {  getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCxNob5wENaSv9kFRJUF_D1iQGWNlivT0E",
  authDomain: "fb-clone-f1c6d.firebaseapp.com",
  projectId: "fb-clone-f1c6d",
  storageBucket: "fb-clone-f1c6d.firebasestorage.app",
  messagingSenderId: "649725272095",
  appId: "1:649725272095:web:587118b516806e33df352a",
  measurementId: "G-MJ26KS2K13"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, collection, onSnapshot, GoogleAuthProvider };
export default db;
