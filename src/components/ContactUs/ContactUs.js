import React from "react";
import "./ContactUs.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import Fade from "react-reveal/Fade";

function ContactUs() {
	return (
		<div className="contactus-main">
			<Fade right>
				<div className="contactus-title">Contact Us</div>
				<div className="contactus-subtitle">
					Lorem ipsum dolor sit amet consectetur
				</div>
				<div className="contactus-form">
					<div className="contactus-form-left">
						<div className="left-title">CONTACT INFO</div>
						<div className="contact-us-location flex">
							<div>
								<LocationOnIcon />
							</div>
							<div>
								<p className="contact-info-text">
									Shop No 18, Sadalaxmi Complex, Vitthal Rao Shivarkar Rd,
									Fatima Nagar, Parmar Nagar, Wanawadi, Pune, Maharashtra 411040
								</p>
							</div>
						</div>
						<div className="contact-us-phone flex">
							<div>
								<PhoneIcon />
							</div>
							<div>
								<p className="contact-info-text">9373677952</p>
							</div>
						</div>
						<div className="contact-us-mail flex">
							<div>
								<MailIcon />
							</div>
							<div>
								<p className="contact-info-text">navkarmattresses@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="contact-us-right">
						<div className="contact-us-form-input">
							<div>
								<input
									type="text"
									placeholder="Name"
									className="contact-input"
								/>
							</div>
							<div>
								<input
									type="text"
									placeholder="Email"
									className="contact-input"
								/>
							</div>
							<div>
								<input
									type="tel"
									placeholder="Phone Number"
									className="contact-input"
								/>
							</div>
							<textarea placeholder="Query"></textarea>
							<div className="contact-us-form-button">
								<button className="send-message">Send Message</button>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default ContactUs;
