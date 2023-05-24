// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjJr5coH0wIoAyOsD6597EbOfrP8L5wCY",
  authDomain: "companyproject-1af93.firebaseapp.com",
  projectId: "companyproject-1af93",
  storageBucket: "companyproject-1af93.appspot.com",
  messagingSenderId: "248164307920",
  appId: "1:248164307920:web:2969c3beede2f327305fd5",
  measurementId: "G-38C9JCDNJE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export { app, fireDb };
