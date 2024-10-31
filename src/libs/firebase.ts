import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Initialize Firebase

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyACLSNjzr-1E1HoAL6H1b8KaXb2GkJHQZc",
  authDomain: "aidas-3a1b3.firebaseapp.com",
  projectId: "aidas-3a1b3",
  storageBucket: "aidas-3a1b3.appspot.com",
  messagingSenderId: "960328301247",
  appId: "1:960328301247:web:6e4736922d21e8d096640a",
  measurementId: "G-BLXR2DQ2DR"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  export const provider = new GoogleAuthProvider();
  export const auth = getAuth();


