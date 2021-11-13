import { useRef } from "react";
import image from "../images/writingdiary.svg";
import { signUp, useAuth, logOut, logIn } from "../firebase/firebase-config";

const Home = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const currentUser = useAuth();

	async function handleSignUp() {
		try {
			await signUp(emailRef.current.value, passwordRef.current.value);
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
	console.log(currentUser);
	return (
		<div className="home">
			<img src={image} style={{ width: "50vw" }} alt="writingdiary"></img>
			<div className="user-login">
				{!currentUser && (
					<section className="login-form-form">
						<h4 className="login-form-label">Email: </h4>
						<input
							className="login-form-input"
							ref={emailRef}
							type="email"
							name="email"
						></input>
						<br />
						<h4 className="login-form-label">Password: </h4>
						<input
							className="login-form-input"
							ref={passwordRef}
							type="password"
							name="password"
						></input>
					</section>
				)}
				{currentUser ? (
					<button type="button" onClick={handleLogOut}>
						Log out
					</button>
				) : (
					<button type="button" onClick={handleLogIn}>
						Log in
					</button>
				)}

				{currentUser ? (
					<p>{currentUser.email} is logged in</p>
				) : (
					<button type="button" onClick={handleSignUp}>
						Sign up
					</button>
				)}
			</div>
		</div>
	);
};

export default Home;
