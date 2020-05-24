import firebase from "firebase/app";
import "firebase/analytics";

export const firebaseConfig = {
  apiKey: "TODO",
  authDomain: "TODO",
  databaseURL: "TODO",
  projectId: "TODO",
  storageBucket: "TODO",
  messagingSenderId: "TODO",
  appId: "TODO",
  measurementId: "TODO",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAnalytics = firebase.analytics();
