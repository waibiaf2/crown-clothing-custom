import React from 'react';

import {
	createUserDocumentFromAuth,
	signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";



const SingInComponent = () => {
	const logGoogleUer = async () => {
		const {user} = await signInWithGooglePopup();
		console.log(user)
		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(userDocRef);
	}
	return (
		<div>
			<h1>Sing In Page</h1>
			<button onClick={logGoogleUer}>Sing in With Google Popup</button>
			
			<SignUpFormComponent/>
		</div>
	);
};

export default SingInComponent;