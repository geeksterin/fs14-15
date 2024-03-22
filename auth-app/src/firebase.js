// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg_meNzeu3038Qbs7fKlXIcAFhU-V71QM",
  authDomain: "geekster-58638.firebaseapp.com",
  projectId: "geekster-58638",
  storageBucket: "geekster-58638.appspot.com",
  messagingSenderId: "537103270758",
  appId: "1:537103270758:web:ccf7e10468fe8ba073bea7",
  measurementId: "G-TDMD1DJVY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(app);

const db = getFirestore(app);

export { app, provider, db };
