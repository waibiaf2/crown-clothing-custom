import React, {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import './navigation.styles.scss';
import {UserContext} from "../../context/user.context";

import {signOutUser} from "../../utils/firebase/firebase.utils";

const NavigationComponent = () => {
	const {currentUser, setCurrentUser} = useContext(UserContext);
	
	const singOutCallback = async () => {
		await signOutUser();
		setCurrentUser(null);
	}
	
	return (
		<Fragment>
			<div className="navigation">
				<Link to='/' className="logo-container">
					<CrwnLogo className="logo"/>
				</Link>
				<div className="nav-links-container">
					<Link to='/shop' className="nav-link">
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={singOutCallback}>
							{" "}
							SIGN OUT{" "}
						</span>
						): (
							<Link to='/auth' className="nav-link">
								SIGN IN
							</Link>
						)
					}
				</div>
			</div>
			<Outlet/>
		</Fragment>
	);
};

export default NavigationComponent;