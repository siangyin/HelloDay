import { useState, useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAgGfQw3H-CFKrCHi57pDTsAaR5HhpG-Hk",
	authDomain: "hello-day-2021.firebaseapp.com",
	projectId: "hello-day-2021",
	storageBucket: "hello-day-2021.appspot.com",
	messagingSenderId: "464183344271",
	appId: "1:464183344271:web:c4c8650722ed15321584fa",
	measurementId: "G-HW1DHCJLET",
};

// Initialize Firebase
// ====================== //
const app = initializeApp(firebaseConfig);

// database storage
// ====================== //
export const db = getFirestore(app);

// login functions
// ====================== //

export const auth = getAuth();

// login functions: signup
export function signUp(email, pw) {
	return createUserWithEmailAndPassword(auth, email, pw);
}

// login functions: login
export function logIn(email, pw) {
	return signInWithEmailAndPassword(auth, email, pw);
}

// login functions: logout
export function logOut() {
	return signOut(auth);
}

// login functions: custom hook to set current user
export function useAuth() {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);

	return currentUser;
}
