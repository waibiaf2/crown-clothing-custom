import React, {useContext} from "react";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";


import {CartContext} from "../../contexts/cart.context";
import {CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIconComponent = () => {
	const {isCartOpen, setIsCartOpen, cartCount}  = useContext(CartContext)
	
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon"/>
			<ItemCount className="item-count">{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIconComponent;