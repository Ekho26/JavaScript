import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDu7xR9MRt9nmR9YxiPDe40Bz60ojf9U7A",
    authDomain: "todo-project-7fdf6.firebaseapp.com",
    databaseURL: "https://todo-project-7fdf6.firebaseio.com",
    projectId: "todo-project-7fdf6",
    storageBucket: "todo-project-7fdf6.appspot.com",
    messagingSenderId: "263673182145",
    appId: "1:263673182145:web:4a6bfda396f8dddd11e140",
    measurementId: "G-02V00GCH0E"
});

const db = firebaseApp.firestore();

export default db;