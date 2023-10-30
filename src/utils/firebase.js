// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABFtCPs66PbxI4gHizj4jI8Z-A5C2a6Es",
  authDomain: "netflix-5625f.firebaseapp.com",
  projectId: "netflix-5625f",
  storageBucket: "netflix-5625f.appspot.com",
  messagingSenderId: "1009261711087",
  appId: "1:1009261711087:web:194fe5b50ee5bea5c9551a",
  measurementId: "G-SNBF4E0FL3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
