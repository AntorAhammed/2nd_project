import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo 1.png";
import "./header.css";
const Header = ({ setShowModal }) => {
	const [navActive, isnavActive] = useState(false);
	const openModal = (e) => {
		console.log("hwllo");
		e.preventDefault();
		setShowModal((prev) => !prev);
	};
	return (
		<header>
			<div className="container">
				<Link to="/">
					<div className="logo">
						<img src={logo} alt="logo" />
						<h1>GHOSPERS</h1>
					</div>
				</Link>
				<div className={navActive ? "links nav-active" : "links"}>
					<ul className="navigations">
						<li>
							<NavLink to="/" activeclassname="active">
								Official
							</NavLink>
						</li>
						<li>
							<NavLink to="/trending" activeclassname="active">
								Trending
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" activeclassname="active">
								Contact Us
							</NavLink>
						</li>
					</ul>
					<div className="nav-btn">
						<a href="/" onClick={openModal}>
							Connect Wallet
						</a>
						<a href="/">Login</a>
					</div>
				</div>
				<div className="hamburger" onClick={() => isnavActive(!navActive)}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
