import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6akYgm1GkvmM3kXNj8mkVGIZjzIwUQuU",
    authDomain: "qs-apparel.firebaseapp.com",
    databaseURL: "https://qs-apparel.firebaseio.com",
    projectId: "qs-apparel",
    storageBucket: "qs-apparel.appspot.com",
    messagingSenderId: "729724366418",
    appId: "1:729724366418:web:f4ee9714fed58e0bc9b98b",
    measurementId: "G-CJ2ZBHJW92"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
