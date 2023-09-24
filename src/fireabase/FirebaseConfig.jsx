// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc8nopcZgklNlpHqSGC7jSAIBdDja4kyo",
  authDomain: "myfirstapp-4ec28.firebaseapp.com",
  projectId: "myfirstapp-4ec28",
  storageBucket: "myfirstapp-4ec28.appspot.com",
  messagingSenderId: "205511052290",
  appId: "1:205511052290:web:ef3b2e94f7e21424992b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}