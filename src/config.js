import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuCHDfoTyHEy7EuTyqmfUTcL1dSeXkM3Y",
    authDomain: "cartoons-aacbb.firebaseapp.com",
    projectId: "cartoons-aacbb",
    storageBucket: "cartoons-aacbb.appspot.com",
    messagingSenderId: "945143437678",
    appId: "1:945143437678:web:3016df4659b4d8df5b897f",
    measurementId: "G-5SMWF7LS12"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};