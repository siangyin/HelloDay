import { useEffect, useState } from "react";
import axios from "axios";
import Quote from "./Quote";

export default function GetQuote() {
	const url = "https://type.fit/api/quotes";
	const [quote, setQuote] = useState("");

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	useEffect(() => {
		const abortCont = new AbortController();

		const fetchQuote = async () => {
			try {
				const response = await axios.get(url, { signal: abortCont.signal });
				const objArr = response.data;
				const randQuote = objArr[getRandomInt(objArr.length)];
				setQuote(randQuote);
			} catch (error) {
				console.log(error);
			}
		};

		fetchQuote();

		return () => {
			abortCont.abort();
		};
	}, []);

	return (
		<>
			{quote ? (
				<Quote quote={quote} classTag="diary" />
			) : (
				<h4>Loading quote...</h4>
			)}
		</>
	);
}
