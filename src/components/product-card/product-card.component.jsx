import React, {useContext} from "react";

import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {CartContext} from "../../contexts/cart.context";

import {
	Footer,
	Name,
	Price,
	ProductCardContainer
} from "./product-card.styles";

const ProductCardComponent = ({product}) => {
	const {name, price, imageUrl} = product;
	const {addItemToCart} = useContext(CartContext);
	
	const addProductToCart = () => addItemToCart(product);
	
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