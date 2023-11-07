import React from "react";

import {DirectoryContainer} from "./directory.styles";

import DirectoryItemComponent from "../directory-item/directory-item.component";
import {Link} from "react-router-dom";

const DirectoryComponent = ({categories}) => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItemComponent key={category.id} category={category}/>
			))}
		</DirectoryContainer>
	);
};

export default DirectoryComponent;
