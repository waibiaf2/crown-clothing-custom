import React, {useContext} from "react";

import "./checkout-item.styles.scss";

import {CartContext} from "../../contexts/cart.context";

const CheckoutItemComponent = ({cartItem}) => {
	const {name, imageUrl, price, quantity} = cartItem;
	const {clearItemFromCart,removeItemFromCart,addItemToCart} = useContext(CartContext)
	
	const addCartItemHandler = () => addItemToCart(cartItem);
	const removeCartItemHandler = () => removeItemFromCart(cartItem);
	const clearCartItemHandler = () => clearItemFromCart(cartItem);
	
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`}/>
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={removeCartItemHandler}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={addCartItemHandler}>&#10095;</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={clearCartItemHandler}>&#10005;</div>
		</div>
	);
};

export default CheckoutItemComponent;