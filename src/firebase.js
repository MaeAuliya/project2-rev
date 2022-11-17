// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEF9-IJA9vivVpdoqlJJqvJI_lTkrCX8A",
  authDomain: "pweb-latihan.firebaseapp.com",
  projectId: "pweb-latihan",
  storageBucket: "pweb-latihan.appspot.com",
  messagingSenderId: "684113455514",
  appId: "1:684113455514:web:cbdb2318526c6fe6897223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const taskColRef = collection(db, "task");
export default taskColRef;