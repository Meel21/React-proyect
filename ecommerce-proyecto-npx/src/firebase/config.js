
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDlegg4T-2g-66MM8npqA588AEofgscWtk",
  authDomain: "react-ecommerce-2022.firebaseapp.com",
  projectId: "react-ecommerce-2022",
  storageBucket: "react-ecommerce-2022.appspot.com",
  messagingSenderId: "871680934352",
  appId: "1:871680934352:web:c53d42ea6be00a2958b9d5",
  measurementId: "G-VS6B0PVK6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {

    return app
}