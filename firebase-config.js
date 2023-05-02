import { initializeApp } from 'firebase/app';
import {
    addDoc,
    collection,
    getFirestore,
    orderBy,
    query,
    serverTimestamp,
    where,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDHOhpCfTPuihc8Rj7vh9jHQdhs8t-WR3w',
    authDomain: 'scorer-f54fb.firebaseapp.com',
    projectId: 'scorer-f54fb',
    storageBucket: 'scorer-f54fb.appspot.com',
    messagingSenderId: '635290193732',
    appId: '1:635290193732:web:6586bd0f1d943469af5111',
};

// Init Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

export const gamesColRef = collection(db, 'newGames');

const q = query(
    gamesColRef,
    where('name', '==', 'Talizman'),
    orderBy('createdAt')
);

// Init Auth
export const auth = getAuth();

export const addGame = async (gameName) => {
    try {
        const docRef = await addDoc(gamesColRef, {
            name: gameName,
            createdAt: serverTimestamp(),
        });
        console.log('Game added with ID: ', docRef.id);
        return true;
    } catch (e) {
        console.error('Error adding game: ', e);
        return false;
    }
};
