import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8gaIhB9Y5obncymjPf2SpqzKa-NwGRCo",
  authDomain: "skillshare-12cf9.firebaseapp.com",
  projectId: "skillshare-12cf9",
  storageBucket: "skillshare-12cf9.firebasestorage.app",
  messagingSenderId: "146519274747",
  appId: "1:146519274747:web:6206458119e61817182c5e",
  measurementId: "G-310CYTWCSN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);