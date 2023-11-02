import React, {useState} from "react";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

import {SignUpContainer} from "./sign-up-form.styles";

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUpFormComponent = () => {
	const [formFields, setFormFields]  = useState(defaultFormFields)
	const {displayName,email, password,confirmPassword} = formFields;
	
	
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}
	
	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	}
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		
		if (password !== confirmPassword) {
			alert('Password dont match');
			return;
		}
		
		try {
			const {user} = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, {displayName});
			resetFormFields();
		} catch (error){
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', error);
			}
		}
	}
	
	
	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInputComponent
					label='Full Name'
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>
				
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
				
				<FormInputComponent
					label='Confirm Password'
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				
				<ButtonComponent type='submit'>Sign Up</ButtonComponent>
			</form>
		</SignUpContainer>
	);
};

export default SignUpFormComponent;