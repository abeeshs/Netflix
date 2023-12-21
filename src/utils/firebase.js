// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAj4oRr9akfmvui5wOZCmkoE72syCe-8NQ",
   authDomain: "netflix-108a2.firebaseapp.com",
   projectId: "netflix-108a2",
   storageBucket: "netflix-108a2.appspot.com",
   messagingSenderId: "514238047955",
   appId: "1:514238047955:web:0d2f3ce938ed3fc2e65626",
   measurementId: "G-7RVEKSX5SR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
