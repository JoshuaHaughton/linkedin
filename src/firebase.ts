import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjI_V6U4clQVxdUqq9TbZO7djV1tGlBms",
  authDomain: "linkedin-clone-5a61e.firebaseapp.com",
  projectId: "linkedin-clone-5a61e",
  storageBucket: "linkedin-clone-5a61e.appspot.com",
  messagingSenderId: "1066547932582",
  appId: "1:1066547932582:web:ad5ad02eaf990f7602b367",
  measurementId: "G-NPX25Q7Y88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }