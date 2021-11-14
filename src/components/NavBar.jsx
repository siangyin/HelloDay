import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/firebase-config";
// , logOut

const NavBar = () => {
	const currentUser = useAuth();

	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		const linkHeight = linksRef.current.getBoundingClientRect().height;
		// DOMRect {x: 0, y: 79, width: 517, height: 200, top: 79, …}
		if (showLinks) {
			linksContainerRef.current.style.height = `${linkHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<h2 className="logo">
						<span className="logo-focus">Focus</span>
						<span className="logo-diary">Diary</span>
					</h2>
					<div className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
						<FaBars />
					</div>
				</div>

				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						<li>
							<Link to="/alldiaries">All Diaries</Link>
						</li>
						<li>
							<Link to="/newdiary">New Diary</Link>
						</li>
						<li>
							<Link to="/">{currentUser ? "Log out" : "Log in"}</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
