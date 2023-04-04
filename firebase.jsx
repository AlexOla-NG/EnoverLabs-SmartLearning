// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl0pZUl2KeKfRijHRJ7GjPU62w2gmWRco",
  authDomain: "smart-learning-app-41fdb.firebaseapp.com",
  projectId: "smart-learning-app-41fdb",
  storageBucket: "smart-learning-app-41fdb.appspot.com",
  messagingSenderId: "1085479250367",
  appId: "1:1085479250367:web:b4c0c36abedb460799990a",
  measurementId: "G-C76Q935PXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;