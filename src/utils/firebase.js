// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwTf7Y5b96E81TMA5akMsDDhx3hEChSBk",
  authDomain: "netflixgpt-890f6.firebaseapp.com",
  projectId: "netflixgpt-890f6",
  storageBucket: "netflixgpt-890f6.appspot.com",
  messagingSenderId: "550277237351",
  appId: "1:550277237351:web:f4973221a3aeb3c55462c2",
  measurementId: "G-74XJQ3CKE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
