import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar">
			<h1 className="logo">
				<span className="logo-focus">Focus</span>
				<span className="logo-diary">Diary</span>
			</h1>
			<div className="links">
				<a href="/">Home</a>
				<a href="/alldiaries">All Diaries</a>
				<a href="/newdiary">New Diary</a>
			</div>
		</nav>
	);
};

export default NavBar;
