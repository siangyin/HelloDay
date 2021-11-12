import { useState } from "react";
// , { useState, useEffect }
import "./styles/App.css";
import Diary from "./components/Diary";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
	const [dailyDiary, setDailyDiary] = useState();
	console.log(dailyDiary);
	return (
		<div className="App">
			<NavBar />
			<div className="content">
				<Home />
				<Diary setDailyDiary={setDailyDiary} />
			</div>
		</div>
	);
};

export default App;
