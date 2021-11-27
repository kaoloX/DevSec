import firebase from "firebase"
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBh1ZFKuqcYP86dGDy1UTmDtCLdzbl1NE8",
    authDomain: "devsec-54927.firebaseapp.com",
    projectId: "devsec-54927",
    storageBucket: "devsec-54927.appspot.com",
    messagingSenderId: "800080953602",
    appId: "1:800080953602:web:61db9fc6b3bd68d69f421b"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase