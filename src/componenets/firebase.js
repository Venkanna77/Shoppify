import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9tWjyAZQMW9sM2BIlOrXRUSWze5tAfKM",
  authDomain: "shoppify-c421d.firebaseapp.com",
  projectId: "shoppify-c421d",
  storageBucket: "shoppify-c421d.appspot.com",
  messagingSenderId: "952384744771",
  appId: "1:952384744771:web:9c3613552bedc2f7f613f6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
