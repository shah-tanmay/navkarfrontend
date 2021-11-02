import React from "react";
import ServiceCards from "./ServiceCards/ServiceCards";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./Services.css";

function Services() {
	return (
		<div className="service-main">
			<Fade left>
				<div className="service-title">
					<h1>SERVICES</h1>
				</div>
				<div className="service-subtitle">Lorem ipsum dolor sit amet</div>
				<div className="service-cards">
					<ServiceCards />
					<ServiceCards />
					<ServiceCards />
				</div>
			</Fade>
		</div>
	);
}

export default Services;
