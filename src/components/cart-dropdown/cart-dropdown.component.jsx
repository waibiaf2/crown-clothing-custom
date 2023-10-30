import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {CartContext} from "../../contexts/cart.context";

import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdownComponent = () => {
	const {cartItems} = useContext(CartContext)
	const navigate = useNavigate();
	
	const goToCheckoutHandler = () => {
		navigate("/checkout");
	}
	
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ?
					(cartItems.map((cartItem) =>
						<CartItemComponent cartItem={cartItem}/> )):
					(<span className="empty-message"> Your Cart is Empty</span>)
				}
			</div>
			<ButtonComponent onClick={goToCheckoutHandler}>Go To Checkout</ButtonComponent>
		</div>
	);
};

export default CartDropdownComponent;