// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuCHDfoTyHEy7EuTyqmfUTcL1dSeXkM3Y",
  authDomain: "cartoons-aacbb.firebaseapp.com",
  projectId: "cartoons-aacbb",
  storageBucket: "cartoons-aacbb.appspot.com",
  messagingSenderId: "945143437678",
  appId: "1:945143437678:web:3016df4659b4d8df5b897f",
  measurementId: "G-5SMWF7LS12"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
  storage, firestore as default
}