// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPiCRg_Z5hSImxii9ie3U3DGd0wVeZn0k",
  authDomain: "note-app-1987f.firebaseapp.com",
  projectId: "note-app-1987f",
  storageBucket: "note-app-1987f.appspot.com",
  messagingSenderId: "540898427895",
  appId: "1:540898427895:web:ede10d08a90ab3d092e4f2",
  measurementId: "G-1FHLB8WSK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
