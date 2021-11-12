import { useState } from "react";
// import { useEffect } from "react";
import "./styles/App.css";
import Diary from "./components/NewDiary";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllDiaries from "./components/AllDiaries";
import { sampleDiaryData } from "./components/data";

const App = () => {
	const [dailyDiary, setDailyDiary] = useState();
	const [diaries, setDiaries] = useState(sampleDiaryData);
	const [editing, setEditing] = useState({ status: false, data: null });

	// form submitted data
	console.log(dailyDiary);

	function handleDelete(id) {
		const newdata = diaries.filter((diary) => diary.date !== id);
		setDiaries(newdata);
	}

	function handleEdit(id) {
		const newdata = diaries.filter((diary) => diary.date === id);
		setEditing({ status: true, data: newdata[0] });
		//data to edit & retrieved
		console.log(editing.data);
	}

	// not working, trying to update data.
	// useEffect(() => {
	// 	console.log("diary changed");
	// 	console.log(dailyDiary);
	// 	if (dailyDiary) {
	// 		const index = diaries.findIndex((e) => e.date === dailyDiary.date);
	// 		console.log(index);
	// 	}
	// }, []);

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

				{editing.status && (
					<Diary setDailyDiary={setDailyDiary} diary={editing.data} />
				)}

				<Diary setDailyDiary={setDailyDiary} />
			</div>
		</div>
	);
};

export default App;
