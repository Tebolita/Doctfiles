//Configuracion de permisos firebase
// Import the functions you need from the SDKs you need
const initializeApp = require("firebase/app")
//import { initializeApp } from "firebase/app";
const getAnalytics = require("firebase/analytics")
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgAmYlbdK24h88gZelP55r0jwPuE5-YxM",
  authDomain: "animeproyect-7e129.firebaseapp.com",
  projectId: "animeproyect-7e129",
  storageBucket: "animeproyect-7e129.appspot.com",
  messagingSenderId: "744753439348",
  appId: "1:744753439348:web:1a50661efb089f306f2721",
  measurementId: "G-74F9W6S53D"
};


module.exports = initializeApp