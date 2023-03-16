// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6eMRitzOTpc0wRetOPvUkSPm2NvP1cAU",
  authDomain: "dailify-6329a.firebaseapp.com",
  projectId: "dailify-6329a",
  storageBucket: "dailify-6329a.appspot.com",
  messagingSenderId: "883084684780",
  appId: "1:883084684780:web:53809be732669e87c764c9",
  measurementId: "G-ZT38YN9D32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const dataBase = getFirestore(app);
export const provider = new FacebookAuthProvider();
export const auth = getAuth(app);