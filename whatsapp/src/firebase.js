import firebase from  'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAt6PZtCtOpnN32M71mLgODB6wQRHjywZo",
    authDomain: "whatsapp-clone-28b04.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-28b04.firebaseio.com",
    projectId: "whatsapp-clone-28b04",
    storageBucket: "whatsapp-clone-28b04.appspot.com",
    messagingSenderId: "240803748300",
    appId: "1:240803748300:web:4ab89df71bb2f22bdea569",
    measurementId: "G-K25E4HFP1M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;

