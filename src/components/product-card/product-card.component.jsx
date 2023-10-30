import React, {useContext} from "react";

import ButtonComponent from "../button/button.component";
import {CartContext} from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCardComponent = ({product}) => {
	const {name, price, imageUrl} = product;
	const {addItemToCart} = useContext(CartContext);
	
	const addProductToCart = () => addItemToCart(product);
	
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`}/>
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<ButtonComponent buttonType='inverted' onClick={addProductToCart} >Add to Cart</ButtonComponent>
		</div>
	);
};

export default ProductCardComponent;