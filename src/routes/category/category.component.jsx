import React, {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import ProductCardComponent from "../../components/product-card/product-card.component";

import {selectCategoriesMap} from "../../store/categories/categories.selector";

import {CategoryContainer, CategoryTitle} from "./category.styles";
const CategoryComponent = () => {
	const {category} = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);
	
	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);
	
	console.log(products);
	
	return (
		<Fragment>
			<CategoryTitle>{category.toUpperCase()} </CategoryTitle>
			<CategoryContainer>
				{
					products.map((product) =>
						<ProductCardComponent key={product.id} product={product}/>
				)}
			</CategoryContainer>
		</Fragment>
	);
};

export default CategoryComponent;
