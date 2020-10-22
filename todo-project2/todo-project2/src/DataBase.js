import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3DN-9-ukhiMKSIWVEX0dU7fC6nsr8f94",
    authDomain: "todo-project-7ac88.firebaseapp.com",
    databaseURL: "https://todo-project-7ac88.firebaseio.com",
    projectId: "todo-project-7ac88",
    storageBucket: "todo-project-7ac88.appspot.com",
    messagingSenderId: "387759886293",
    appId: "1:387759886293:web:5032170735b12b6919b75c",
    measurementId: "G-LNZ77LMZX6"
  });

  const dataBase = firebaseApp.firestore();

  export default dataBase;