import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD6II7TG2-Zhs1NP5bWK2F7rlfvkHDPP0U",
  authDomain: "covid-help-ff8f5.firebaseapp.com",
  projectId: "covid-help-ff8f5",
  storageBucket: "covid-help-ff8f5.appspot.com",
  messagingSenderId: "545569973087",
  appId: "1:545569973087:web:707ce72865dc404ef90cea",
  measurementId: "G-E7CVG76EPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth , provider };
