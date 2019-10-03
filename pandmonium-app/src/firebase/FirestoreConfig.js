import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';


// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjKebyqD3OWdU35HqBdFByrV7icBcsWCY",
    authDomain: "pan-d-monium-app.firebaseapp.com",
    // databaseURL: "https://pan-d-monium-app.firebaseio.com",
    projectId: "pan-d-monium-app",
    // storageBucket: "",
    // messagingSenderId: "888100298652",
    // appId: "1:888100298652:web:c51990f0e859f374327259"
  };

let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default db;