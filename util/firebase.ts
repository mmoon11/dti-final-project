import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import withFirebaseAuth from "react-with-firebase-auth";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE0lkeKybpOqoPk7fevm5-UZV0o1UAsR8",
  authDomain: "dti-final-project-6b85b.firebaseapp.com",
  projectId: "dti-final-project-6b85b",
  storageBucket: "dti-final-project-6b85b.appspot.com",
  messagingSenderId: "454438659458",
  appId: "1:454438659458:web:33ad46473e61f52d819b9b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const providers = {
  googleProvider: new GoogleAuthProvider(),
};

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
});

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider);
};

const signOutFirebase = () => {
  signOut(auth);
};

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
};
