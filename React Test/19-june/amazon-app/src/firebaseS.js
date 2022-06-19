import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA8tsn6ovt4yy4ThIWLdcudMqJV5YZ1XQU",
  authDomain: "fir-30e16.firebaseapp.com",
  databaseURL: "https://fir-30e16.firebaseio.com",
  projectId: "fir-30e16",
  storageBucket: "fir-30e16.appspot.com",
  messagingSenderId: "943459562468",
  appId: "1:943459562468:web:ab00c15d6cab718c1f4df1",
  measurementId: "G-W0NK8VZ2GP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
