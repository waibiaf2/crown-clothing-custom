import {createContext, useEffect, useState} from "react";
import {createAuthUserWithEmailAndPassword, getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
	categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesMap = await getCategoriesAndDocuments("categories");
			setCategoriesMap(categoriesMap);
		}
		
		getCategoriesMap();
	},[])
	
	const value = {categoriesMap}
	
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	)
}