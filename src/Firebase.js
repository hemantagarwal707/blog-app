// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADAdMazBxt_r6WCIStqS47OXwLDx165ps",
  authDomain: "blog-app-fd9fa.firebaseapp.com",
  projectId: "blog-app-fd9fa",
  storageBucket: "blog-app-fd9fa.appspot.com",
  messagingSenderId: "1007599430922",
  appId: "1:1007599430922:web:c27d121fb6da612c7a9ef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)