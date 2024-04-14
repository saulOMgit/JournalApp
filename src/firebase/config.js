// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTp80HzvHzlUsGErg1TgWDaAcBptpLvVg",
  authDomain: "react-cursos-ab309.firebaseapp.com",
  projectId: "react-cursos-ab309",
  storageBucket: "react-cursos-ab309.appspot.com",
  messagingSenderId: "954867938045",
  appId: "1:954867938045:web:5bf1ac8ac0343fb64e8494"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
