import React from "react";
import ProductCards from "./ProductCards/ProductCards";
import Fade from "react-reveal/Fade";
import "./Products.css";

function Products() {
	return (
		<div className="products-main">
			<Fade right>
				<div className="products-title">PRODUCTS</div>
				<div className="products-subtitle">
					Lorem ipsum dolor sit amet consectetur adipiscing elit
				</div>
				<div className="productCards">
					<ProductCards />
					<ProductCards />
					<ProductCards />
					<ProductCards />
					<ProductCards />
				</div>
				<div className="product-button">
					<button className="product-view-more-button">View More</button>
				</div>
			</Fade>
		</div>
	);
}

export default Products;
