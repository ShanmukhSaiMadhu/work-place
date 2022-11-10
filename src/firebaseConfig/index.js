// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK4a2CNcZQfy5EjKxYtUkPDKOYkbBYahQ",
  authDomain: "shannu-work-place.firebaseapp.com",
  projectId: "shannu-work-place",
  storageBucket: "shannu-work-place.appspot.com",
  messagingSenderId: "68415387838",
  appId: "1:68415387838:web:ae1ff10f3e22ed304e86ef",
  measurementId: "G-R6BDYJ7NSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);