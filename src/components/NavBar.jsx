import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar">
			<h1 className="logo">
				<span className="logo-focus">Focus</span>
				<span className="logo-diary">Dairy</span>
			</h1>
			<div className="links">
				<a href="/">Home</a>
				<a href="/create">New Diary</a>
	
			</div>
		</nav>
	);
};

export default NavBar;
