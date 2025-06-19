// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDEasi9asalYkz2ghwxLcYfPAQfYsKQys",
  authDomain: "whatsapp-clone-2b375.firebaseapp.com",
  projectId: "whatsapp-clone-2b375",
  storageBucket: "whatsapp-clone-2b375.firebasestorage.app",
  messagingSenderId: "638680655374",
  appId: "1:638680655374:web:682f5b6f7e7b73a3403e5f",
  measurementId: "G-83BSKW5406"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 


export const auth  =initializeAuth(app)