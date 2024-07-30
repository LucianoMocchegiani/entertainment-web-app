// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_yGzs9dANP4WM2ZnnKLyB3mqJzxeUOc",
  authDomain: "entertainment-app-87f62.firebaseapp.com",
  projectId: "entertainment-app-87f62",
  storageBucket: "entertainment-app-87f62.appspot.com",
  messagingSenderId: "56743764636",
  appId: "1:56743764636:web:ddb739791609563775c359",
  measurementId: "G-3Q98TS2448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Initialize Firestore with cache settings
const firestoreSettings = {
  cache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
};

export const db = initializeFirestore(app, firestoreSettings);
