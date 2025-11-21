// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8hERpzM8gn_FFl93VptRygVwiqk_NFnM",
    authDomain: "boipoka-c51c0.firebaseapp.com",
    projectId: "boipoka-c51c0",
    storageBucket: "boipoka-c51c0.firebasestorage.app",
    messagingSenderId: "550710459241",
    appId: "1:550710459241:web:ce46db5b70b4bf12769bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)