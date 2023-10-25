import React, {useState} from "react";

import "./sign-in-form.styles.scss";

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup
} from "../../utils/firebase.utils";

const defaultFormFields = {
	email: "",
	password: "",
}

const SignInFormComponent = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const {email, password} = formFields;
	
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}
	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormFields({...formFields, [name]: value});
	}
	
	const signInWithGoogle = async () => {
		const {user} = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			const response = await signInAuthUserWithEmailAndPassword(email, password);
			console.log(response);
			resetFormFields();
			
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	}
	
	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInputComponent
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				
				<FormInputComponent
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<div className='buttons-container'>
					<ButtonComponent type='submit'>Sign In</ButtonComponent>
					<ButtonComponent type='button' buttonType='google' onClick={signInWithGoogle}>
						Google sign in
					</ButtonComponent>
				</div>
			</form>
		
		</div>
	);
};

export default SignInFormComponent;