// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Cwh3AWeSsh3OfFjTZJXq9dfDFkQ5Ous",
  authDomain: "coupon-collection-auth.firebaseapp.com",
  projectId: "coupon-collection-auth",
  storageBucket: "coupon-collection-auth.firebasestorage.app",
  messagingSenderId: "123121682253",
  appId: "1:123121682253:web:472246ec94f09d87ac9904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;