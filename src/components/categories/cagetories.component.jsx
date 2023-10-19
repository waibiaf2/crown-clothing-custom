import React from 'react';

import CategoryItemComponent from "../category-item/category-item.component";

import './categories.styles.scss'

const CategoriesComponent = ({categories}) => {
	return (
		<div className="categories-container">
			{
				categories.map((category) => (
					<CategoryItemComponent category={category}/>
				))
			}
		</div>
	);
};

export default CategoriesComponent;