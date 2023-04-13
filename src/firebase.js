// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJVTPVQc-T0CfmvfTmkO1RbEG5WhE-3fY",
  authDomain: "react-authentication-5a102.firebaseapp.com",
  projectId: "react-authentication-5a102",
  storageBucket: "react-authentication-5a102.appspot.com",
  messagingSenderId: "952229366254",
  appId: "1:952229366254:web:d86ed2cfb7417e1b8fa6ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
