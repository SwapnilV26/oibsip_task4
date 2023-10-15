import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDrxKrYHengOV8dlX519uVO-8vINz9CXE8",
      authDomain: "authentication-26001.firebaseapp.com",
      projectId: "authentication-26001",
      storageBucket: "authentication-26001.appspot.com",
      messagingSenderId: "478964576855",
      appId: "1:478964576855:web:f56b1cd443a1d712db2912"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);