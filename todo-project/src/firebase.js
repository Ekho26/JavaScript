import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdP6WhibJaA0MeGBkWxz2JWUMuQRMZtJA",
    authDomain: "todo-project-d0092.firebaseapp.com",
    databaseURL: "https://todo-project-d0092.firebaseio.com",
    projectId: "todo-project-d0092",
    storageBucket: "todo-project-d0092.appspot.com",
    messagingSenderId: "183327159438",
    appId: "1:183327159438:web:d237a98aef104133c245df",
    measurementId: "G-KZBFKF939W"
});

const dataBase = firebaseApp.firestore();

export default dataBase ;