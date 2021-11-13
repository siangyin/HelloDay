import { useRef } from "react";
import image from "../images/writingdiary.svg";
import { signUp } from "../firebase/firebase-config";

const Home = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	async function handleSignUp() {
		await signUp(emailRef.current.value, passwordRef.current.value);
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

					<button type="button" onClick={handleSignUp}>
						Log in
					</button>
					<button type="button" onClick={handleSignUp}>
						Sign up
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
