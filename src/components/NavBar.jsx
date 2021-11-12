import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar">
			<h1 className="logo">
				<span className="logo-focus">Focus</span>
				<span className="logo-diary">Diary</span>
			</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/alldiaries">All Diaries</Link>
				<Link to="/newdiary">New Diary</Link>
			</div>
		</nav>
	);
};

export default NavBar;
