import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore/lite";

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

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LcCQXIoAAAAAE0ZeL98QDWc4kWZr6pSxrCmOAbo"),

  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore(app);