import { useState, useEffect } from "react";
// , { useState,  }
import "./styles/App.css";
import Diary from "./components/NewDiary";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllDiaries from "./components/AllDiaries";
import { sampleDiaryData } from "./components/data";

const App = () => {
	const [dailyDiary, setDailyDiary] = useState();
	const [diaries, setDiaries] = useState(sampleDiaryData);
	const [editing, setEditing] = useState({ status: false, data: {} });
	console.log(dailyDiary);

	function handleDelete(id) {
		const newdata = diaries.filter((diary) => diary.date !== id);
		setDiaries(newdata);
	}

	function handleEdit(id) {
		const newdata = diaries.filter((diary) => diary.date === id);
		console.log(newdata);
		setEditing({ status: true, data: newdata });
	}

	return (
		<div className="App">
			<NavBar />
			<div className="content">
				<Home />
				<AllDiaries
					diaries={diaries}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
				/>

				<Diary diary={sampleDiaryData[1]} />

				<Diary setDailyDiary={setDailyDiary} />
			</div>
		</div>
	);
};

export default App;
