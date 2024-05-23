// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ4c4mCbjGrdDj7o_hfquCGytQGx8oBkA",
  authDomain: "quiz-8eafc.firebaseapp.com",
  projectId: "quiz-8eafc",
  storageBucket: "quiz-8eafc.appspot.com",
  messagingSenderId: "381573002490",
  appId: "1:381573002490:web:b9a2448ad90e025ceb4543",
  measurementId: "G-F2R12S2RTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db} ; 