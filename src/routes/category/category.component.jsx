import React, {Fragment, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import ProductCardComponent from "../../components/product-card/product-card.component";

import {CategoriesContext} from "../../contexts/catagories.context";

import "./category.styles";
import {CategoryContainer, CategoryTitle} from "./category.styles";

const CategoryComponent = () => {
	const {category} = useParams();
	const {categoriesMap} = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);
	
	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);
	
	return (
		<Fragment>
			<CategoryTitle>{category.toUpperCase()} </CategoryTitle>
			<CategoryContainer>
				{products.map((product) => (
					<ProductCardComponent key={product.id} product={product}/>
				))}
			</CategoryContainer>
		</Fragment>
	);
};

export default CategoryComponent;