import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatme-19579.firebaseapp.com",
  projectId: "chatme-19579",
  storageBucket: "chatme-19579.appspot.com",
  messagingSenderId: "101416595803",
  appId: "1:101416595803:web:b66542a5dd7c45c717aa7e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()