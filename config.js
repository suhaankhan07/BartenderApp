import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAdX20rCbdgogCr-yyV_v6r3xD2RtpbfC0",
    authDomain: "barterapp-46619.firebaseapp.com",
    projectId: "barterapp-46619",
    storageBucket: "barterapp-46619.appspot.com",
    messagingSenderId: "537393040314",
    appId: "1:537393040314:web:18839fa43c476f9267eb83"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore();