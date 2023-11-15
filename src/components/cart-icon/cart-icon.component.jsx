import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {
	CartIconContainer,
	ItemCount
} from "./cart-icon.styles";

import {
	selectCartCount,
	selectIsCartOpen
} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.actions";

const CartIconComponent = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);
	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
	
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon"/>
			<ItemCount className="item-count">{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIconComponent;
