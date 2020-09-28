import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3uO4YwIFJ9Ok1H5JcLwenNBT4cWoic78",
    authDomain: "to-do-app-338f5.firebaseapp.com",
    databaseURL: "https://to-do-app-338f5.firebaseio.com",
    projectId: "to-do-app-338f5",
    storageBucket: "to-do-app-338f5.appspot.com",
    messagingSenderId: "1049372335352",
    appId: "1:1049372335352:web:6152440b18f98c05392f0d",
    measurementId: "G-S7JXNS93DZ"
});

const db = firebaseApp.firestore();

export default db;