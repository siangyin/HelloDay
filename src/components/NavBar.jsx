import React from "react";
import { Link } from "react-router-dom";
import { signUp, useAuth, logOut, logIn } from "../firebase/firebase-config";

const NavBar = () => {
	const currentUser = useAuth();

	console.log(currentUser);
	return (
		<nav className="navbar">
			<h1 className="logo">
				<span className="logo-focus">Focus</span>
				<span className="logo-diary">Diary</span>
			</h1>
			<div className="links">
				<Link to="/alldiaries">All Diaries</Link>
				<Link to="/newdiary">New Diary</Link>
				<Link to="/">{currentUser? "Log out" : "Log in"}</Link>
			</div>
		</nav>
	);
};

export default NavBar;
