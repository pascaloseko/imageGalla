import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "pasco-1345.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: "pasco-1345",
  storageBucket: "pasco-1345.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
export default app