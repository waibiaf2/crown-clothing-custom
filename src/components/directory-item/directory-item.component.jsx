import React from "react";

import {
	BackgroundImage,
	Body,
	DirectoryItemContainer
} from "./directory-item.styles";
import {Link} from "react-router-dom";

const DirectoryItemComponent = ({category}) => {
	const {imageUrl, title} = category;
	return (
		<DirectoryItemContainer to={`shop/${title}`}>
			<BackgroundImage imageUrl={imageUrl}/>
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
		
	);
};

export default DirectoryItemComponent;
