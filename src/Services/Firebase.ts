import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDwMs_Y1a5WR7AuLOnTsqpHo4meQWBgw50",
  authDomain: "cleanstead-fe22f.firebaseapp.com",
  projectId: "cleanstead-fe22f",
  storageBucket: "cleanstead-fe22f.appspot.com",
  messagingSenderId: "213286760597",
  appId: "1:213286760597:web:2dc128ec46bd10d3ae2b9c",
  measurementId: "G-J76KJX973S",
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log(db.app.name);
