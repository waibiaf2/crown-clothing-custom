import React from "react";

import "./authentication.styles";

import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";
import SignInFormComponent from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from "./authentication.styles";

const AuthenticationComponent = () => {
	return (
		<AuthenticationContainer>
			<SignInFormComponent/>
			<SignUpFormComponent/>
		</AuthenticationContainer>
	);
};

export default AuthenticationComponent;