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

  export const createUserProfileDocument = async (userAuth, addiitionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addiitionalData
        })
      } catch (err) {
        console.log('Error creating user', err.message)
      }
    }

    return userRef;
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
