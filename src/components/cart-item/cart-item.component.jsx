import React from "react";

import './cart-item.styles'
import {
	CartItemContainer,
	ItemDetails
} from "./cart-item.styles";

const CartItemComponent = ({cartItem}) => {
	const {imageUrl, price, name, quantity} = cartItem;
	
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<span>{name}</span>
				<span className="price">
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItemComponent;