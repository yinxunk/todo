// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC72HvU9PlxbfOI6-JKZMxNODcA59U-kV0",
  authDomain: "dothings-e1b6b.firebaseapp.com",
  projectId: "dothings-e1b6b",
  storageBucket: "dothings-e1b6b.firebasestorage.app",
  messagingSenderId: "424766467320",
  appId: "1:424766467320:web:c264b57aea250800d11f0d",
  measurementId: "G-HV4WQF7TJZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

//intialize firebase services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
export default {firebaseApp, auth, db, analytics};