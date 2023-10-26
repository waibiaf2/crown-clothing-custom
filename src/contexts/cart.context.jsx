import {React, createContext, useState} from "react";

const CartContext = createContext({
	isCartOpen: false,
	setIsOpen: () => {}
});

export const CartProvider = ({children}) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const value = {isCartOpen, setIsCartOpen}
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}