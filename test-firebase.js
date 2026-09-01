import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBi4-NTgjAtulELhDIT8UzinwPk2YUeAqI",
  authDomain: "paradox-f9a05.firebaseapp.com",
  projectId: "paradox-f9a05",
  storageBucket: "paradox-f9a05.firebasestorage.app",
  messagingSenderId: "187195598077",
  appId: "1:187195598077:web:5d0da778e26a779ad24a94",
  measurementId: "G-8PR6X3341S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testFirebase() {
  console.log("Attempting to connect to Firebase...");
  try {
    const docRef = await addDoc(collection(db, "customEvents"), {
      title: "Test Event Backend",
      type: "Test",
      status: "Register Now"
    });
    console.log("SUCCESS! Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("ERROR writing document: ", e.message);
  }
}

testFirebase();
