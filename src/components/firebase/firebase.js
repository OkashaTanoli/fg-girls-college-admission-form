// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDmvUcjTNMA9a_2oM00j8SuSg7tTNw_arY",
  authDomain: "fg-girls-college-form.firebaseapp.com",
  projectId: "fg-girls-college-form",
  storageBucket: "fg-girls-college-form.appspot.com",
  messagingSenderId: "582622836503",
  appId: "1:582622836503:web:f11cfe86419a80fed36952",
  measurementId: "G-1BBLW7E44S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
