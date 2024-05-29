import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// ... other necessary imports

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbs-qPn8d5sGdJZBaFU3DDXIxEP3z1vWc",
  authDomain: "fir-f5b69.firebaseapp.com",
  projectId: "fir-f5b69",
  storageBucket: "fir-f5b69.appspot.com",
  messagingSenderId: "962066700522",
  appId: "1:962066700522:web:45d46c90018c352e1edf93",
  measurementId: "G-QVEHXHLFRL"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {db, auth };

