// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbCqbDDD5XrElLOKr4c0Tvb0Uzh6VDqd8",
  authDomain: "simple-login-auth-45d82.firebaseapp.com",
  projectId: "simple-login-auth-45d82",
  storageBucket: "simple-login-auth-45d82.firebasestorage.app",
  messagingSenderId: "839876724030",
  appId: "1:839876724030:web:1aac487a1ec4d3670a986f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);