// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	EmailAuthProvider,
} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBx3Rpt_hiLQLnTTHhMpPg1UEdodVfSurw",
	authDomain: "crwn-clothing-custom.firebaseapp.com",
	projectId: "crwn-clothing-custom",
	storageBucket: "crwn-clothing-custom.appspot.com",
	messagingSenderId: "314690855979",
	appId: "1:314690855979:web:72533917107ab84d6cf66e",
	measurementId: "G-QSRC477BML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	
	const userSnapshot = await getDoc(userDocRef);
	
	if (!userSnapshot.exists()) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			})
		}catch (e) {
			console.log('Error creataing the user', e.message);
		}
	}
	
	return userDocRef;
}


const analytics = getAnalytics(app);