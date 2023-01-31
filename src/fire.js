import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNd1Gi2bQDkDLts6UXFbBY_oFsR2rrKXI",
  authDomain: "tulparhacathon.firebaseapp.com",
  projectId: "tulparhacathon",
  storageBucket: "tulparhacathon.appspot.com",
  messagingSenderId: "128054178768",
  appId: "1:128054178768:web:7073bfc0da841d5907ffd5",
  measurementId: "G-TLQDDCX62F",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
