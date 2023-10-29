import React from 'react';

import {FcGoogle} from "react-icons/fc";



import './button.styles.scss';

const BUTTON_TYPES_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted'
}

const ButtonComponent = ({children, buttonType, ...otherProps}) => {
	const isGoogleButton = BUTTON_TYPES_CLASSES[buttonType] === 'google-sign-in'
	
	return (
		<button
			className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{ isGoogleButton ? <FcGoogle className="icon"/>: '' }
			{children}
		</button>
	);
};

export default ButtonComponent;