import {createContext, useEffect, useState} from "react";

import PRODUCTS from "../shop-data.json";
import {addCollectionAndDocuments, getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
	products: [],
})

export const ProductProvider = ({children}) => {
	const [products, setProducts] = useState(PRODUCTS);
	
/*	useEffect(() => {
		addCollectionAndDocuments("categories", SHOP_DATA);
	}, []);*/
	
	const getCategories = async () => {
		const categories = await getCategoriesAndDocuments('categories');
		console.log(categories);
		return categories;
	}
	
	useEffect(() => {
		getCategories();
	}, []);
	
	
	const value = {products}
	
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
}