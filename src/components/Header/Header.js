import React from "react";
import FaceBookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Header.css";

function Header() {
	return (
		<div className="header-main">
			<div className="header-right">
				<div className="header-logo-div">
					<p className="header-brand">Navkar</p>
				</div>
			</div>
			<div className="header-right">
				<div className="header-list">
					<li>Home</li>
					<li>About Us</li>
					<li>Servies</li>
					<li>Contact</li>
				</div>
				<div className="header-social">
					<div>
						<FaceBookIcon fontSize="large" />
					</div>
					<div>
						<InstagramIcon fontSize="large" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
