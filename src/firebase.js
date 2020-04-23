import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXWHd0hH3MdYw-oelQCl2trhXkJnnpOZw",
    authDomain: "bristol-bears-d79ff.firebaseapp.com",
    databaseURL: "https://bristol-bears-d79ff.firebaseio.com",
    projectId: "bristol-bears-d79ff",
    storageBucket: "bristol-bears-d79ff.appspot.com",
    messagingSenderId: "1004525939899",
    appId: "1:1004525939899:web:b0a4e8f63dda2c87e3cd9e",
    measurementId: "G-KW507DXRF6"
  };
  

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
