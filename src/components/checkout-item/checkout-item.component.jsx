import React from "react";

import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	Quantity, RemoveButton, Value
} from "./checkout-item.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.actions";

const CheckoutItemComponent = ({cartItem}) => {
	const {name, imageUrl, price, quantity} = cartItem;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	
	const addCartItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));
	const removeCartItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));
	const clearCartItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem));
	
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
