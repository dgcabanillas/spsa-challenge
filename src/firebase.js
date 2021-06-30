import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBbm5fRs85I8V8MMglPkjej6kZa1yaI_7M",
    authDomain: "spsa-challenge.firebaseapp.com",
    projectId: "spsa-challenge",
    storageBucket: "spsa-challenge.appspot.com",
    messagingSenderId: "860780162403",
    appId: "1:860780162403:web:60602a4fb7b6df5875f756"
};
 
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();