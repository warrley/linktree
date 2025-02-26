import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlZdZqLjRuR3t1LEYvuCdPeIkDqziQmpg",
  authDomain: "reactlinks-412f5.firebaseapp.com",
  projectId: "reactlinks-412f5",
  storageBucket: "reactlinks-412f5.firebasestorage.app",
  messagingSenderId: "193813398690",
  appId: "1:193813398690:web:1bd642080745f380f4c3fb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };