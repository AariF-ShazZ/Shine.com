// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQaLbd9jbtK4P5gQL8AalSFeLBJKMfw6M",
  authDomain: "shine-c5a2a.firebaseapp.com",
  projectId: "shine-c5a2a",
  storageBucket: "shine-c5a2a.appspot.com",
  messagingSenderId: "173689786153",
  appId: "1:173689786153:web:4e4d30e068c82f1865f138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const providersecond = new FacebookAuthProvider();
providersecond.setCustomParameters({
    prompt: "select_account",
  });
provider.setCustomParameters({
    prompt: "select_account",
  });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const siginwithFcebook = () => signInWithPopup(auth, providersecond);