import React, {useContext} from "react";

import "./cart-dropdown.styles.scss";
import ButtonComponent from "../button/button.component";
import {CartContext} from "../../contexts/cart.context";
import CartItemComponent from "../cart-item/cart-item.component";

const CartDropdownComponent = () => {
	const {cartItems} = useContext(CartContext)
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ?
					(cartItems.map((cartItem) =>
						<CartItemComponent cartItem={cartItem}/> )):
					(<span className="empty-message"> Your Cart is Empty</span>)
				}
			</div>
			<ButtonComponent>Go To Checkout</ButtonComponent>
		</div>
	);
};

export default CartDropdownComponent;