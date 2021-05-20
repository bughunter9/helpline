import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxIPa5BxT_9-ZcIA3KwlHezQgJ9p1v0sI",
    authDomain: "covid-helpline-ba5e0.firebaseapp.com",
    projectId: "covid-helpline-ba5e0",
    storageBucket: "covid-helpline-ba5e0.appspot.com",
    messagingSenderId: "231079880330",
    appId: "1:231079880330:web:f93eb9b24fdd9c7b186f73",
    measurementId: "G-LMEBLZJ54X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth , provider };
