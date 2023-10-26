import React, {useContext} from "react";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import {CartContext} from "../../contexts/cart.context";

const CartIconComponent = () => {
	const {isCartOpen, setIsCartOpen, cartItemCount}  = useContext(CartContext)
	
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	
	return (
		<div className="cart-icon-container" onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon"/>
			<span className="item-count">{cartItemCount}</span>
		</div>
	);
};

export default CartIconComponent;