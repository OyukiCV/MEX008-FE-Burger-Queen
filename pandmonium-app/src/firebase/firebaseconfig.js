import firebaseApp from 'firebase/app';
import 'firebase/auth';

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjKebyqD3OWdU35HqBdFByrV7icBcsWCY",
    authDomain: "pan-d-monium-app.firebaseapp.com",
    databaseURL: "https://pan-d-monium-app.firebaseio.com",
    projectId: "pan-d-monium-app",
    storageBucket: "",
    messagingSenderId: "888100298652",
    appId: "1:888100298652:web:c51990f0e859f374327259"
  };

  const createFirebaseApp = () => {
    firebaseApp.initializeApp(firebaseConfig)
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user){
        console.log('user connected');
      }else{
        console.log('No user connected');
      }
    })
    return firebaseApp
  }


  export default createFirebaseApp;

