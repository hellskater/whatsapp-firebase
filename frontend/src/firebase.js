import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4l5TR4wCrBON0rZqVzKwxFvD5C6JmYWE",
  authDomain: "whatsapp-firebase-47b21.firebaseapp.com",
  projectId: "whatsapp-firebase-47b21",
  storageBucket: "whatsapp-firebase-47b21.appspot.com",
  messagingSenderId: "197789734170",
  appId: "1:197789734170:web:530ba9fd0f9397270ac8a3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
