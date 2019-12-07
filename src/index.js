import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyC6Hrbr8VfTwrn4vQeMwigPfhovN71TIPc",
//   authDomain: "road-trax.firebaseapp.com",
//   databaseURL: "https://road-trax.firebaseio.com",
//   projectId: "road-trax",
//   storageBucket: "road-trax.appspot.com",
//   messagingSenderId: "136018285803",
//   appId: "1:136018285803:web:aa91cc1b793444c0"
// };
// firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
