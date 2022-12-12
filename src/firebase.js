import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCis9wXjmg0lRNNptEkkj6glI920XnYpSA",
  authDomain: "slack-clone-c6db2.firebaseapp.com",
  projectId: "slack-clone-c6db2",
  storageBucket: "slack-clone-c6db2.appspot.com",
  messagingSenderId: "287766835147",
  appId: "1:287766835147:web:dda6ecb1dcbbdd95ff904e"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();