import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyR46XSFctnpHA42JgqB1TL8fZ3zdSvNs",
  authDomain: "chat-ci-d12-bfd10.firebaseapp.com",
  projectId: "chat-ci-d12-bfd10",
  storageBucket: "chat-ci-d12-bfd10.appspot.com",
  messagingSenderId: "850033713438",
  appId: "1:850033713438:web:0dfb87b7b33b0a1260690f",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
