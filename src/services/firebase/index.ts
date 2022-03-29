import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA8GALwENb6o4THLmeDhKBIZHsAKMPH9r0",

  authDomain: "carpark-63baa.firebaseapp.com",

  projectId: "carpark-63baa",

  storageBucket: "carpark-63baa.appspot.com",

  messagingSenderId: "322510019818",

  appId: "1:322510019818:web:d8e5ec5ca3de2af4e9cb93",
};

export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
