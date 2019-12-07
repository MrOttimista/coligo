import firebase from "firebase";
const config = {
  apiKey: "AIzaSyC6Hrbr8VfTwrn4vQeMwigPfhovN71TIPc",
  authDomain: "road-trax.firebaseapp.com",
  databaseURL: "https://road-trax.firebaseio.com",
  projectId: "road-trax",
  storageBucket: "road-trax.appspot.com",
  messagingSenderId: "136018285803",
  appId: "1:136018285803:web:aa91cc1b793444c0"
};

var firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
