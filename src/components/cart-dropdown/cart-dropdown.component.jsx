import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {CartContext} from "../../contexts/cart.context";

import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";

import "./cart-dropdown.styles";
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage
} from "./cart-dropdown.styles";

const CartDropdownComponent = () => {
	const {cartItems} = useContext(CartContext)
	const navigate = useNavigate();
	
	const goToCheckoutHandler = () => {
		navigate("/checkout");
	}
	
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ?
					(cartItems.map((cartItem) =>
						<CartItemComponent cartItem={cartItem}/> )):
					(<EmptyMessage className="empty-message"> Your Cart is Empty</EmptyMessage>)
				}
			</CartItems>
			<ButtonComponent onClick={goToCheckoutHandler}>Go To Checkout</ButtonComponent>
		</CartDropdownContainer>
	);
};

export default CartDropdownComponent;