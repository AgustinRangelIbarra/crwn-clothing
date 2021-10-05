import React, { Component } from "react";
import PreviewCollection from "../../Components/Preview-Collection/PreviewCollection";
import ShopData from "./Shop_Data";

export class Shop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: ShopData,
		};
	}

	render() {
		const { collections } = this.state;

		return (
			<div className="shop-page">
				{collections.map(({id, ...otherCollectionProps}) => (
					<PreviewCollection key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default Shop;
