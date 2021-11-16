import "../styles/navbar.css";
import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth, logOut } from "../config/firebase-config";

export default function NavBar() {
	const currentUser = useAuth();

	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	// use effect listener
	useEffect(() => {
		const linkHeight = linksRef.current.getBoundingClientRect().height;
		// DOMRect {x: 0, y: 79, width: 517, height: 200, top: 79, …}
		if (showLinks) {
			linksContainerRef.current.style.height = `${linkHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);

	async function handleLogOut() {
		try {
			await logOut();
		} catch (error) {
			const err = error.message;
			let start = err.indexOf("(");
			let end = err.indexOf(")");
			console.log(error.message);
			alert(`Sorry, something wrong! ${err.slice(start, end + 1)}`);
		}
	}

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<h2 className="logo">
						<Link to="/">
							<span className="logo-focus">Focus</span>
							<span className="logo-diary">Diary</span>
						</Link>
					</h2>
					<div className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
						<FaBars />
					</div>
				</div>

				<div className="links-container" ref={linksContainerRef}>
					{currentUser ? (
						<ul className="links" ref={linksRef}>
							<li>
								<Link to="/alldiaries">All Diaries</Link>
							</li>
							<li>
								<Link to="/newdiary">New Diary</Link>
							</li>
							<li>
								<Link to="/">
									<span onClick={handleLogOut}>Log out</span>
								</Link>
							</li>
						</ul>
					) : (
						<ul className="links" ref={linksRef}>
							<li>
								<Link to="/">Log in</Link>{" "}
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
}
