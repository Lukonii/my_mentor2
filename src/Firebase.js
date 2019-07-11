import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBr-F8UvdhfpM8ptRGoMZeSoYRjI2YlyCw",
  authDomain: "mentor-1-649a9.firebaseapp.com",
  databaseURL: "https://mentor-1-649a9.firebaseio.com",
  projectId: "mentor-1-649a9",
  storageBucket: "gs://mentor-1-649a9.appspot.com/",
  messagingSenderId: "29724302430",
  appId: "1:29724302430:web:d8ca93347dc43787"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
