import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { useState, useEffect } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyAGHiwRSZLfw2d3deAEKLXMb7_5Te22iUU",
    authDomain: "habeeb-store-e1903.firebaseapp.com",
    databaseURL: "http://habeeb-store-e1903.firebaseio.com",
    projectId: "habeeb-store-e1903",
    storageBucket: "habeeb-store-e1903.appspot.com",
    messagingSenderId: "179494111700",
    appId: "1:179494111700:web:6d6942d24240744e6bee41",
    measurementId: "G-E1JPMYLZ19"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    
export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    
export const logOut = () => signOut(auth);


export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {

        const unSubcribe = onAuthStateChanged(auth, user => setCurrentUser(user));
            
        return unSubcribe;
        
       
    }, [])

    return currentUser;
};
