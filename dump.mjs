import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs';

const firebaseConfig = {
  apiKey: 'AIzaSyBi4-NTgjAtulELhDIT8UzinwPk2YUeAqI',
  authDomain: 'paradox-f9a05.firebaseapp.com',
  projectId: 'paradox-f9a05',
  storageBucket: 'paradox-f9a05.firebasestorage.app',
  messagingSenderId: '187195598077',
  appId: '1:187195598077:web:5d0da778e26a779ad24a94'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function dump() {
  const snapshot = await getDocs(collection(db, 'customEvents'));
  const data = [];
  snapshot.forEach(doc => {
    data.push(doc.data());
  });
  fs.writeFileSync('c:/Users/acer/Desktop/Paradox/dump.json', JSON.stringify(data, null, 2));
  console.log('Dumped', data.length, 'events');
  process.exit(0);
}
dump().catch(console.error);
