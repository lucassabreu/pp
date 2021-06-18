import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyD5QB7hjfZngTG4WPQbugij-Kbg2Law8e8",
  authDomain: "podcast-player-pwa.firebaseapp.com",
  databaseURL: "https://podcast-player-pwa.firebaseio.com",
  projectId: "podcast-player-pwa",
  storageBucket: "podcast-player-pwa.appspot.com",
  messagingSenderId: "881516125539",
  appId: "1:881516125539:web:02603d81698d4cd12f8756",
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.functions();

// eslint-disable-next-line
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
  functions.useEmulator("localhost", 5001);
}
