import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUSZ6qp7rNVgaKgMKXTtKzG1mrPIWyaTg",
  authDomain: "whatsapp-clone-35f2d.firebaseapp.com",
  projectId: "whatsapp-clone-35f2d",
  storageBucket: "whatsapp-clone-35f2d.appspot.com",
  messagingSenderId: "114535616495",
  appId: "1:114535616495:web:07473668f9dd7f71c0301a",
  measurementId: "G-2LQ61SYFW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);