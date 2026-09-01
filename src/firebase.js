// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBi4-NTgjAtulELhDIT8UzinwPk2YUeAqI",
  authDomain: "paradox-f9a05.firebaseapp.com",
  projectId: "paradox-f9a05",
  storageBucket: "paradox-f9a05.firebasestorage.app",
  messagingSenderId: "187195598077",
  appId: "1:187195598077:web:5d0da778e26a779ad24a94",
  measurementId: "G-8PR6X3341S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and Cloud Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
