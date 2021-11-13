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

	return (
		<div className="home">
			<h2>Homepage component</h2>

			<div className="user-login">
				<img src={image} style={{ width: "50vw" }} alt="writingdiary"></img>
				<form className="login-form-form">
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
					<br />

					<button type="button" onClick={handleLogIn}>
						Log in
					</button>
					<button type="button" onClick={handleSignUp} disabled={currentUser}>
						Sign up
					</button>

					<button type="button" onClick={handleLogOut} disabled={!currentUser}>
						Log out
					</button>

					{currentUser && <p>{currentUser.email} is logged in</p>}
				</form>
			</div>
		</div>
	);
};

export default Home;
