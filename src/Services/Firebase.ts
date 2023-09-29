// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwMs_Y1a5WR7AuLOnTsqpHo4meQWBgw50",
  authDomain: "cleanstead-fe22f.firebaseapp.com",
  projectId: "cleanstead-fe22f",
  storageBucket: "cleanstead-fe22f.appspot.com",
  messagingSenderId: "213286760597",
  appId: "1:213286760597:web:2dc128ec46bd10d3ae2b9c",
  measurementId: "G-J76KJX973S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log(db.app.name);
