// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN3D3nonrhPxOC2v4902AsrVsabjCiv7s",
  authDomain: "blog-by-react-vite.firebaseapp.com",
  projectId: "blog-by-react-vite",
  storageBucket: "blog-by-react-vite.appspot.com",
  messagingSenderId: "28492658831",
  appId: "1:28492658831:web:65a5b88c796536faa258fa",
  measurementId: "G-SKWDRTKLBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export  { auth, provider, db};
