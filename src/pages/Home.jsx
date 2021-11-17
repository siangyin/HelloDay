import "../styles/home.css";
import image from "../asset/images/writingdiary.svg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, useAuth, logOut, logIn } from "../config/firebase-config";
import Quote from "../components/Quote";

export default function Home() {
	// useRef hook
	const emailRef = useRef();
	const passwordRef = useRef();
	const currentUser = useAuth();
	const navigate = useNavigate();

	const quote = {
		text: `Journaling is like whispering to one's self and listening at the same
				time`,
		author: "Mina Murray",
	};

	// async function for user signup/ login/ logout
	// ----------------------------------------------//
	async function handleSignUp() {
		try {
			await signUp(emailRef.current.value, passwordRef.current.value);
			navigate("/alldiaries");
		} catch (error) {
			const err = error.message;
			let start = err.indexOf("(");
			let end = err.indexOf(")");
			console.log(error.message);
			alert(`Sorry, something wrong! ${err.slice(start, end + 1)}`);
		}
	}

	async function handleLogIn() {
		try {
			await logIn(emailRef.current.value, passwordRef.current.value);
			navigate("/alldiaries");
		} catch (error) {
			const err = error.message;
			let start = err.indexOf("(");
			let end = err.indexOf(")");
			console.log(error.message);
			alert(`Sorry, something wrong! ${err.slice(start, end + 1)}`);
		}
	}

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
		<div className="main-container">
			<img src={image} className="sub-section" alt="writingdiary"></img>

			<section className="sub-section">
				<Quote quote={quote} />
				{currentUser ? (
					<div className="item-container">
						<p>
							<strong>{currentUser.email}</strong> is logged in
						</p>
						<button
							type="button"
							className="login-field"
							onClick={handleLogOut}
						>
							Log out
						</button>
					</div>
				) : (
					<form className="item-container">
						<input
							className="login-field"
							placeholder="email"
							ref={emailRef}
							type="email"
							name="email"
						></input>
						<input
							className="login-field"
							placeholder="password (at least 6 character)"
							ref={passwordRef}
							type="password"
							name="password"
						></input>
						<button type="button" className="login-field" onClick={handleLogIn}>
							Log in
						</button>
						<button
							type="button"
							className="login-field"
							onClick={handleSignUp}
						>
							Sign up
						</button>
					</form>
				)}
			</section>
		</div>
	);
}
