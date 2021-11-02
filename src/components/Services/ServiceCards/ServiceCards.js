import React from "react";
import "./ServiceCards.css";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
function ServiceCards() {
	return (
		<div className="service-cards-main">
			<div className="service-card-image">
				<SettingsOutlinedIcon fontSize="large" />
			</div>
			<div className="service-card-title">Sofa Repairs</div>
			<div className="service-card-content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
					amet tincidunt orci. Curabitur hendrerit lacinia vestibulum.
					Pellentesque lacus dui, rutrum quis nunc sit amet, laoreet convallis
					leo
				</p>
			</div>
		</div>
	);
}

export default ServiceCards;
