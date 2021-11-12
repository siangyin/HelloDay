import { useState } from "react";
// , { useState, useEffect }
import "./styles/App.css";
import Diary from "./components/NewDiary";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllDiaries from "./components/AllDiaries";
import { sampleDiaryData } from "./components/data";

const App = () => {
	const [dailyDiary, setDailyDiary] = useState();
	console.log(dailyDiary);
	return (
		<div className="App">
			<NavBar />
			<div className="content">
				<Home />
				<AllDiaries sampleDiaryData={sampleDiaryData} />
				<Diary setDailyDiary={setDailyDiary} />
			</div>
		</div>
	);
};

export default App;
