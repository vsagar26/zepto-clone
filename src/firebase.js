// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDktJv51ItoZWR1p7BL7VQ_zUXYBxakv40",
  authDomain: "zeptoclone-f4534.firebaseapp.com",
  projectId: "zeptoclone-f4534",
  storageBucket: "zeptoclone-f4534.appspot.com",
  messagingSenderId: "472969868097",
  appId: "1:472969868097:web:d054b2b9524689389be7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


