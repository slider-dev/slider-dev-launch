import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-id0oBuxq3TTm0PE8BZu8Nx8JjvllpPg",
  authDomain: "slider-c2254.firebaseapp.com",
  projectId: "slider-c2254",
  storageBucket: "slider-c2254.firebasestorage.app",
  messagingSenderId: "485772435185",
  appId: "1:485772435185:web:7e1a67ff9d7a1e755ad350",
  measurementId: "G-Y521NQ6YTS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
