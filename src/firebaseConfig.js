// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmx-mpJCFkWEeG1yElhGNFhuq7fFzcvsw",
  authDomain: "codepath-db6e9.firebaseapp.com",
  projectId: "codepath-db6e9",
  storageBucket: "codepath-db6e9.appspot.com",
  messagingSenderId: "706165583231",
  appId: "1:706165583231:web:022ab8ff1ad184bc2c7e4a",
  measurementId: "G-J84E8GRXYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
