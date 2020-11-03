import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxLmC3fQFyPdNGZ-k0vKEbkanrQaq17zw",
  authDomain: "clone-fdbc0.firebaseapp.com",
  databaseURL: "https://clone-fdbc0.firebaseio.com",
  projectId: "clone-fdbc0",
  storageBucket: "clone-fdbc0.appspot.com",
  messagingSenderId: "241895932223",
  appId: "1:241895932223:web:59d669daf1cb02c95c938a",
  measurementId: "G-GMVTRF3X4B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
