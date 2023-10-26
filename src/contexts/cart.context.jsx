import {React, createContext, useState, useEffect} from "react";

const addCartItem = (cartItems,productToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
	
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id ?
				{...cartItem, quantity: cartItem.quantity + 1}:
				cartItem
		)
	}
	
	return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
	//find the cart item to remove
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
	
	//check if quantity is equal to 1, if it is remove item from the cart
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	
	//return back cartitems with matching cartitem with reduced quantity
	return cartItems.map(cartItem =>
		cartItem.id === cartItemToRemove.id ?
			{...cartItem, quantity: cartItem.quantity - 1} :
			cartItem
	);
}

const clearCartItem = (cartItems, cartItemToClear) =>
	cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
	isCartOpen: false,
	setIsOpen: () => {},
	cartItems:[],
	cartCount: 0,
	cartTotal: 0,
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {}
});

export const CartProvider = ({children}) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartItemCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);
	
	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,0
		)
		
		setCartItemCount(newCartCount);
	}, [cartItems]);
	
	useEffect(() => {
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + (cartItem.quantity * cartItem.price), 0
		);
		
		setCartTotal(newCartTotal);
		
	}, [cartItems]);
	
	const addItemToCart = (product) =>
		setCartItems(addCartItem(cartItems, product));
	
	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems,cartItemToRemove ))
	};
	
	const clearItemFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear))
	}
	
	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		cartCount,
		cartTotal,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart
	}
	
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
