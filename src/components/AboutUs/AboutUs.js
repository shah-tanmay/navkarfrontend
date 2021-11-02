import React from "react";
import "./AboutUs.css";
import navkarmattresses from "./navkarmattresses.jpg";
import Fade from "react-reveal/Fade";

function AboutUs() {
	return (
		<div className="about-us-main">
			<Fade right>
				<div className="about-us-title">ABOUT US</div>
				<div className="about-us-subtitle">
					Lorem ipsum dolor sit amet consectetur
				</div>
				<div className="about-us-card">
					<div className="about-us-img">
						<img src={navkarmattresses} className="aboutuscardimage" />
					</div>
					<div className="about-us-card-title">
						<h1>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perspiciatis animi, libero ad aliquam at vitae.
						</h1>
					</div>
					<div className="about-us-content">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur vitae illum quibusdam id praesentium ducimus minima
							excepturi explicabo possimus? Minima in magni harum ad, eaque,
							aperiam facere corporis dolor tempora neque distinctio at quasi ea
							quibusdam deleniti. Error, aliquid aspernatur reprehenderit totam
							voluptatem numquam consequatur consectetur distinctio, rerum,
							veritatis at expedita ipsam laborum dolorem enim labore debitis ut
							sequi sapiente incidunt repellendus dignissimos optio? Consequatur
							non modi consequuntur fuga, numquam aut quod vitae deserunt odio
							nobis odit adipisci voluptas, ipsum libero eveniet quae amet
							obcaecati? Nostrum, deleniti? Ducimus consequuntur asperiores vero
							delectus voluptates reiciendis, consequatur eius repellendus id,
							recusandae rerum.
						</p>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default AboutUs;
