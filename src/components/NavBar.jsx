import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/firebase-config";
// , logOut

const NavBar = () => {
	const currentUser = useAuth();

	return (
		<nav className="navbar">
			<h1 className="logo">
				<span className="logo-focus">Focus</span>
				<span className="logo-diary">Diary</span>
			</h1>
			<div className="links">
				<Link to="/alldiaries">All Diaries</Link>
				<Link to="/newdiary">New Diary</Link>
				<Link to="/">{currentUser ? "Log out" : "Log in"}</Link>
			</div>
		</nav>
	);
};

export default NavBar;
