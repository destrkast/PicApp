import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';  //Seeding of data from seed.js to Firebase

const config = {
  apiKey: 'AIzaSyDW3KmAxjzafqiFSAwwD0guCzroZZpXwTI',
  authDomain: 'picapp-71e6e.firebaseapp.com',
  projectId: 'picapp-71e6e',
  storageBucket: 'picapp-71e6e.appspot.com',
  messagingSenderId: '228336292091',
  appId: '1:228336292091:web:aefac594b898ce9690a05e',
  measurementId: 'G-B165HKJDMW', // that might be redundant
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase); //Seeding of data from seed.js to Firebase

// console.log('firebase ', firebase);

export { firebase, FieldValue };
