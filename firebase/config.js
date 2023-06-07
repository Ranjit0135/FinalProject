// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import{ getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCzw7UD71V8mB2qllDyz408JIu8pUOUWjo",
  authDomain: "reactproject-4d55d.firebaseapp.com",
  databaseURL: "https://reactproject-4d55d-default-rtdb.firebaseio.com",
  projectId: "reactproject-4d55d",
  storageBucket: "reactproject-4d55d.appspot.com",
  messagingSenderId: "950870231431",
  appId: "1:950870231431:web:d904f14d84b4cee4be2b22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
 export const db =getFirestore(app);
 export const storage =getStorage(app);
 export default app;