import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export { db };
