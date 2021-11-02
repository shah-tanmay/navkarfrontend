import React from "react";
import "./ProductCards..css";
import curtain from "./productCurtain.jpg";

function ProductCards() {
	return (
		<div className="product-card-main">
			<div className="product-card-image">
				<img src={curtain} className="product-card-image" />
			</div>
			<div className="product-card-title">
				<h1>Curtains</h1>
			</div>
		</div>
	);
}

export default ProductCards;
