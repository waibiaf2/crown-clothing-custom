import React, {Fragment, useContext} from "react";
import {Outlet} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import './navigation.styles';
import {UserContext} from "../../contexts/user.context";

import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import {CartContext} from "../../contexts/cart.context";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {
	LogoContainer,
	NavLink,
	NavigationContainer,
	NavLinks
} from "./navigation.styles";

const NavigationComponent = () => {
	const {currentUser} = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);
	
	const singOutCallback = async () => {
		await signOutUser();
	}
	
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrwnLogo className="logo"/>
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">
						SHOP
					</NavLink>
					{
						currentUser ? (
							<span className="nav-link" onClick={singOutCallback}>
								SIGN OUT
							</span>
						) : (
							<NavLink to="/auth" className="nav-link">
								SIGN IN
							</NavLink>
						)
					}
					<CartIconComponent/>
				</NavLinks>
				{isCartOpen && <CartDropdownComponent/>}
			</NavigationContainer>
			<Outlet/>
		</Fragment>
	);
};

export default NavigationComponent;