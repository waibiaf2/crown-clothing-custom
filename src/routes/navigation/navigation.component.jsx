import React, {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import './navigation.styles.scss';
import {UserContext} from "../../contexts/user.context";

import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import {CartContext} from "../../contexts/cart.context";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";

const NavigationComponent = () => {
	const {currentUser} = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);
	
	const singOutCallback = async () => {
		await signOutUser();
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
							SIGN OUT
						</span>
						): (
							<Link to='/auth' className="nav-link">
								SIGN IN
							</Link>
						)
					}
					<CartIconComponent/>
					
					{isCartOpen && <CartDropdownComponent/>}
				</div>
			</div>
			<Outlet/>
		</Fragment>
	);
};

export default NavigationComponent;