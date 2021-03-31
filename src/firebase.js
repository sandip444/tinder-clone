import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC2O5iMbVWpObaK7PasQifTefjXgPBkcMQ",
  authDomain: "tinder-clone-d4b7a.firebaseapp.com",
  databaseURL: "https://tinder-clone-d4b7a.firebaseio.com",
  projectId: "tinder-clone-d4b7a",
  storageBucket: "tinder-clone-d4b7a.appspot.com",
  messagingSenderId: "497840694895",
  appId: "1:497840694895:web:ec1374126a598dd4c7cf9a",
  measurementId: "G-PQTQKGWN8K",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
