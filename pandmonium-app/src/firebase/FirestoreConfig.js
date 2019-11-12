import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCjKebyqD3OWdU35HqBdFByrV7icBcsWCY",
    authDomain: "pan-d-monium-app.firebaseapp.com",
   // databaseURL: "https://pan-d-monium-app.firebaseio.com",
    projectId: "pan-d-monium-app", 
});
let db=firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default db;