// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUaMWdpfKOUIq2JB0yxLy7BEC7DlI6I-4",
    authDomain: "zingmp3-9bae6.firebaseapp.com",
    projectId: "zingmp3-9bae6",
    storageBucket: "zingmp3-9bae6.appspot.com",
    messagingSenderId: "269716813518",
    appId: "1:269716813518:web:e7875fc8ad1ca2a3cac29f",
    measurementId: "G-603F5M49EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);