import React from "react";
// , { useState, useEffect }
import "./styles/App.css";
import Diary from "./components/Diary";

const App = () => {
	return (
		<div className="App">
			<h1>Hello Day</h1>
			<Diary />
		</div>
	);
};

export default App;
