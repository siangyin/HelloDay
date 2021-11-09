import "./styles/App.css";
import Quote from "./components/Quote";
import Diary from "./components/Diary";

function App() {
	return (
		<div className="App">
			<h1>Hello Day</h1>
			<Quote />
			<Diary />
		</div>
	);
}

export default App;
