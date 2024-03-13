import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu7mUq9L15LoRZRn9T-5Yyh6ENEcFaQlw",
  authDomain: "socialmedia-app-442f1.firebaseapp.com",
  databaseURL: "https://socialmedia-app-442f1-default-rtdb.firebaseio.com",
  projectId: "socialmedia-app-442f1",
  storageBucket: "socialmedia-app-442f1.appspot.com",
  messagingSenderId: "542203925246",
  appId: "1:542203925246:web:a0fb665833151b101ccbaf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
