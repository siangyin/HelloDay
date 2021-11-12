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
	const [diaries, setDiaries] = useState(sampleDiaryData);
	console.log(dailyDiary);

	function handleDelete(id) {
		const newdata = diaries.filter((diary) => diary.date !== id);
		setDiaries(newdata);
	}

	return (
		<div className="App">
			<NavBar />
			<div className="content">
				<Home />
				<AllDiaries diaries={diaries} handleDelete={handleDelete} />
				<Diary setDailyDiary={setDailyDiary} />
			</div>
		</div>
	);
};

export default App;
