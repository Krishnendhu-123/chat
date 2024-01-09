// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeVfz3yhCFdavwWmGq6w1PznLZ9CP3J4A",
  authDomain: "fir-64659.firebaseapp.com",
  projectId: "fir-64659",
  storageBucket: "fir-64659.appspot.com",
  messagingSenderId: "969569510730",
  appId: "1:969569510730:web:18a1f1bbdda167c0680db3",
  measurementId: "G-P8543ZYGRL"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage =getStorage();
export const db=getFirestore(app);