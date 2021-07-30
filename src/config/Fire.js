// import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyBI0Lyu6aybQuPgc-crxLeqqayOdPSGj9w",
    authDomain: "form-verifiy.firebaseapp.com",
    projectId: "form-verifiy",
    storageBucket: "form-verifiy.appspot.com",
    messagingSenderId: "1696303105",
    appId: "1:1696303105:web:b9735bd023c21f8c9f5800",
    measurementId: "G-GK63FMZ6R5"
  };
  // Initialize Firebase
 
 const fire =  firebase.initializeApp(firebaseConfig);
 const facebookProvider = new firebase.auth.FacebookAuthProvider();
 const googleProvider = new firebase.auth.GoogleAuthProvider();

 

 export {
     fire,
     facebookProvider,
     googleProvider
    };
