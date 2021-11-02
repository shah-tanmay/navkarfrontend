import React from "react";
import "./Hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bed from "./bed.jpg";
import curtain from "./curtain.jpg";
import sofa from "./sofa.jpg";

function Hero() {
	return (
		<div className="hero">
			<Carousel
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				autoFocus={true}
				infiniteLoop={true}
				autoPlay="5000"
			>
				<div>
					<img src={bed} className="carousel-images" />
				</div>
				<div>
					<img src={curtain} className="carousel-images" />
				</div>
				<div>
					<img src={sofa} className="carousel-images" />
				</div>
			</Carousel>
		</div>
	);
}

export default Hero;
