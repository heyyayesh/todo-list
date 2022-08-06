// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBoy_C648nCGY-UYt9lckearVM0jdyUESk',
  authDomain: 'todo-list-c4af0.firebaseapp.com',
  projectId: 'todo-list-c4af0',
  storageBucket: 'todo-list-c4af0.appspot.com',
  messagingSenderId: '953952273186',
  appId: '1:953952273186:web:6e53dfdc13b14033885b7b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestoe and get a reference to the service.
export const db = getFirestore(app);
