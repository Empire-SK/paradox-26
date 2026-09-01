import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadString } from 'firebase/storage';

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
const storage = getStorage(app);

async function testStorage() {
  console.log("Attempting to upload to Firebase Storage...");
  try {
    const storageRef = ref(storage, 'test-upload.txt');
    await uploadString(storageRef, 'This is a test upload');
    console.log("SUCCESS! Storage upload worked.");
    process.exit(0);
  } catch (e) {
    console.error("ERROR uploading to storage: ", e.message);
    process.exit(1);
  }
}

testStorage();
