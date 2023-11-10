import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";
import {useDispatch} from "react-redux";
import {setCategoriesMap} from "../../store/categories/categories.action";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

const ShopComponent = () => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments("categories");
			dispatch(setCategoriesMap(categoryMap))
		}
		
		getCategoriesMap();
	}, []);
	return (
		<Routes>
			<Route index element={<CategoriesPreviewComponent/>}/>
			<Route path=':category' element={<CategoryComponent/>}/>
		</Routes>
	);
};

export default ShopComponent;
