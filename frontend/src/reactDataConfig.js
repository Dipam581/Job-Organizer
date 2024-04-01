// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQsS9hmi5-XrZjAuc6aziWQEnqdZQfujU",
    authDomain: "reactdata-aa3c1.firebaseapp.com",
    projectId: "reactdata-aa3c1",
    storageBucket: "reactdata-aa3c1.appspot.com",
    messagingSenderId: "717643043761",
    appId: "1:717643043761:web:9c9f23f95fe991f1072390",
    measurementId: "G-EH07QXPD63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const data = getStorage(app);
const db = getFirestore(app);


export{data, db}