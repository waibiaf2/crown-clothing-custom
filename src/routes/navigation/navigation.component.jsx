import React, {Fragment, useContext} from "react";
import {Outlet} from "react-router-dom";

import './navigation.styles';

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {
	LogoContainer,
	NavLink,
	NavigationContainer,
	NavLinks
} from "./navigation.styles";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectIsCartOpen} from "../../store/cart/cart.selector";

const NavigationComponent = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	
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
							<NavLink to='#' className="nav-link" onClick={singOutCallback}>
								SIGN OUT
							</NavLink>
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
