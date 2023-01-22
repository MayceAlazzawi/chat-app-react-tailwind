// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMI4OLbe3AIIvDFQsyaEyl7yjdt69X0Pk",
  authDomain: "chat-80dd7.firebaseapp.com",
  projectId: "chat-80dd7",
  storageBucket: "chat-80dd7.appspot.com",
  messagingSenderId: "413882561997",
  appId: "1:413882561997:web:366fe7b67b9610c8a14084",
  measurementId: "G-EDLH682GE0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
// Create a root reference
export const storage = getStorage(app);
export const db = getFirestore(app);
