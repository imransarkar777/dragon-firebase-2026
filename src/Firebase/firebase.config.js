// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmutPPN1pvma-w6lV1WJnSQ1FpUm2Ac5o",
  authDomain: "dragon-news-26.firebaseapp.com",
  projectId: "dragon-news-26",
  storageBucket: "dragon-news-26.firebasestorage.app",
  messagingSenderId: "218797106995",
  appId: "1:218797106995:web:dfedf9d3c99bf493880046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

//npm install -g firebase-tools