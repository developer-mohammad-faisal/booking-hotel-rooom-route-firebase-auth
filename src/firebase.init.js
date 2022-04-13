// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCDvF-NQgkOTSNNOC3DutgGoaIx1DwkyY",
  authDomain: "hotel-firebase-auth.firebaseapp.com",
  projectId: "hotel-firebase-auth",
  storageBucket: "hotel-firebase-auth.appspot.com",
  messagingSenderId: "1063919653631",
  appId: "1:1063919653631:web:48e7cae9eac22f4d9a32ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth