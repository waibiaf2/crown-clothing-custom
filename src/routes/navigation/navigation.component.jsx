import React, {Fragment} from 'react';
import {Outlet, Link} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import './navigation.styles.scss';

const NavigationComponent = () => {
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
					<Link to='/auth' className="nav-link">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet/>
		</Fragment>
	);
};

export default NavigationComponent;