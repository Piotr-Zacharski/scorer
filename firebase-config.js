import { initializeApp } from "firebase/app";
import {
    getAuth,
} from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDHOhpCfTPuihc8Rj7vh9jHQdhs8t-WR3w",
    authDomain: "scorer-f54fb.firebaseapp.com",
    projectId: "scorer-f54fb",
    storageBucket: "scorer-f54fb.appspot.com",
    messagingSenderId: "635290193732",
    appId: "1:635290193732:web:6586bd0f1d943469af5111"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth();
