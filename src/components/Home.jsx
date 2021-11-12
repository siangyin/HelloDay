import React from "react";
import image from "../images/writingdiary.svg";

const Home = () => {
	return (
		<div className="home">
			<h2>Homepage component</h2>

			<div className="user-login">
				<img src={image} style={{ width: "50vw" }}></img>
				<form className="login-form-form">
					<h4 className="login-form-label">Username: </h4>
					<input
						className="login-form-input"
						type="text"
						name="username"
					></input>
					<br />

					<h4 className="login-form-label">Password: </h4>
					<input
						className="login-form-input"
						type="password"
						name="password"
					></input>
					<br />

					<button type="submit">Add</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
