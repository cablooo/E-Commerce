// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'; // Add Firestore import

const firebaseConfig = {
  apiKey: "AIzaSyBOQJHL8DTKouy7KYf1Pmb5b5AV_JcMRxc",
  authDomain: "shopper-4b9b0.firebaseapp.com",
  projectId: "shopper-4b9b0",
  storageBucket: "shopper-4b9b0.appspot.com",
  messagingSenderId: "251509673775",
  appId: "1:251509673775:web:be2558b2f540f110579bda",
  measurementId: "G-HMSYGLEJ1L"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export const auth = app.auth();
export default app;