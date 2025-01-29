// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-1a775.firebaseapp.com",
  projectId: "real-estate-1a775",
  storageBucket: "real-estate-1a775.firebasestorage.app",
  messagingSenderId: "796451064688",
  appId: "1:796451064688:web:89cc305be6bdb2ab88ddb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);