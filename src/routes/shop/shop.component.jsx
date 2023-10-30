import React, {Fragment, useContext} from "react";

import ProductCardComponent from "../../components/product-card/product-card.component";

import {ProductsContext} from "../../contexts/products.context";

import "./shop.styles.scss";
import {CategoriesContext} from "../../contexts/catagories.context";

const ShopComponent = () => {
	// const {products} = useContext(ProductsContext)
	const {categoriesMap} = useContext(CategoriesContext);
	return (
		<Fragment>
			{
				Object.keys(categoriesMap).map((title) => (
					<Fragment key={title}>
						<h2>{title}</h2>
						<div className="products-container">
							{
								categoriesMap[title].map(product => (
									<ProductCardComponent key={product.id} product={product}/>
								))
							}
						</div>
					</Fragment>
				))
			}
		</Fragment>
	);
};

export default ShopComponent;