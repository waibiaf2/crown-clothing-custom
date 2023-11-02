import React, {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";
import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	Quantity, RemoveButton, Value
} from "./checkout-item.styles";

const CheckoutItemComponent = ({cartItem}) => {
	const {name, imageUrl, price, quantity} = cartItem;
	const {clearItemFromCart,removeItemFromCart,addItemToCart} = useContext(CartContext)
	
	const addCartItemHandler = () => addItemToCart(cartItem);
	const removeCartItemHandler = () => removeItemFromCart(cartItem);
	const clearCartItemHandler = () => clearItemFromCart(cartItem);
	
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`}/>
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={removeCartItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addCartItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>{price}</BaseSpan>
			<RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItemComponent;