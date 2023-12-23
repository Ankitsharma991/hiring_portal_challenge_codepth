import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.FIREBASE_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PUBLIC_PROJECT_ID,
  storageBucket: process.env.FIREBASE_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_PUBLIC_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD-_iMsbgisl-8Zvuwe1VPGi7T0_4bEvYQ",
//   authDomain: "code-path-f9f85.firebaseapp.com",
//   projectId: "code-path-f9f85",
//   storageBucket: "code-path-f9f85.appspot.com",
//   messagingSenderId: "361480925110",
//   appId: "1:361480925110:web:a4e2f81ed72d64371b1b17"
// };

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
