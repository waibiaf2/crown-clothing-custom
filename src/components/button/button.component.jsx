import React from 'react';
import {FcGoogle} from "react-icons/fc";

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: 'google-sign-in',
	inverted: 'inverted',
}

const getButton = (buttonType= BUTTON_TYPE_CLASSES.base) => ({
	[BUTTON_TYPE_CLASSES.base]: BaseButton,
	[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
	[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

const ButtonComponent = ({children, buttonType, ...otherProps}) => {
	const CustomButton = getButton(buttonType);
	
	return <CustomButton {...otherProps}>
		{ buttonType === BUTTON_TYPE_CLASSES.google ? <FcGoogle className="icon"/>: '' }
		{children}
	</CustomButton>
}

export default ButtonComponent;