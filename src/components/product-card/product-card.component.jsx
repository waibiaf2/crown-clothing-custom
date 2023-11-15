import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart} from "../../store/cart/cart.actions";

import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import {
	Footer,
	Name,
	Price,
	ProductCardContainer
} from "./product-card.styles";

const ProductCardComponent = ({product}) => {
	const {name, price, imageUrl} = product;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	
	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, product))
	};
	
	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`}/>
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<ButtonComponent
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to Cart
			</ButtonComponent>
		</ProductCardContainer>
	);
	
};

export default ProductCardComponent;
