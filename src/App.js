import { useState } from "react";
// , { useState, useEffect }
import "./styles/App.css";
import Diary from "./components/Diary";

const App = () => {
	const [dailyDiary, setDailyDiary] = useState();
	console.log(dailyDiary);
	return (
		<div className="App">
			<h1 className="logo">
				<span className="logo-focus">Focus</span>
				<span className="logo-diary">Dairy</span>
			</h1>
			<Diary setDailyDiary={setDailyDiary} />
		</div>
	);
};

export default App;
