import React, {useContext} from "react";

import './checkout.styles'

import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import {CartContext} from "../../contexts/cart.context";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles";

const CheckoutComponent = () => {
	const {cartItems,cartTotal} = useContext(CartContext)
	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			
			{
				cartItems.map((cartItem) =>(
					<CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>
				))
			}
			<Total>Total: ${cartTotal}</Total>
		</CheckoutContainer>
	);
};

export default CheckoutComponent;