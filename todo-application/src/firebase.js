import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZDcba7KaMwcTRKPcEdUmC6HlSojT12Js",
    authDomain: "todo-application-c55a8.firebaseapp.com",
    databaseURL: "https://todo-application-c55a8.firebaseio.com",
    projectId: "todo-application-c55a8",
    storageBucket: "todo-application-c55a8.appspot.com",
    messagingSenderId: "1057196200868",
    appId: "1:1057196200868:web:9761c0d3b9b0d7f8d8a731",
    measurementId: "G-MRBJQFWRSQ"
  });

  const db = firebaseApp.firestore();

  export default db;