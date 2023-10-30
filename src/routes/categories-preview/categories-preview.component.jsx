import React, {Fragment, useContext} from "react";

import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";

import {CategoriesContext} from "../../contexts/catagories.context";

const  CategoriesPreviewComponent = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	
	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreviewComponent key={title} title={title} products={products} />
				);
			})}
		</Fragment>
	);
};

export default CategoriesPreviewComponent;