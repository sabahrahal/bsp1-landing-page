import { initializeApp } from "firebase/app";
import { browserLocalPersistence, indexedDBLocalPersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAfSuT188cyR1s72QgqfP8CCRstmLdhscQ",
    authDomain: "blessed-solutions-plumbing.firebaseapp.com",
    projectId: "blessed-solutions-plumbing",
    storageBucket: "blessed-solutions-plumbing.appspot.com",
    messagingSenderId: "770654940481",
    appId: "1:770654940481:web:157ca00acf1cbfa39885c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
    persistence: [indexedDBLocalPersistence, browserLocalPersistence],
  });

