import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAW8a5-yr8jd_lC_BOn-WLM93oNzQ7KXBM",
  authDomain: "clothing-db-6c5a0.firebaseapp.com",
  databaseURL: "https://clothing-db-6c5a0.firebaseio.com",
  projectId: "clothing-db-6c5a0",
  storageBucket: "",
  messagingSenderId: "508179198238",
  appId: "1:508179198238:web:6c55909c8f5e5dc9a8190f",
  measurementId: "G-C7Y2GGE4FX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;