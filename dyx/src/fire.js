// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBJGZSodcO58B5lG51pKyjym5iWDrWYmE",
  authDomain: "cryptobyte-338.firebaseapp.com",
  projectId: "cryptobyte-338",
  storageBucket: "cryptobyte-338.appspot.com",
  messagingSenderId: "432579210531",
  appId: "1:432579210531:web:d93fdaa87a43021a203096",
  measurementId: "G-KVJ3DCJRNH"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);
export default fire
