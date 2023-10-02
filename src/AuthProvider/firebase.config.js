// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdORap_LazvuaJB3ljN6jjEgNT7pDVtyk",
  authDomain: "react-dragon.firebaseapp.com",
  projectId: "react-dragon",
  storageBucket: "react-dragon.appspot.com",
  messagingSenderId: "836112616105",
  appId: "1:836112616105:web:6d64b2c88b7fa3e59ab7b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth