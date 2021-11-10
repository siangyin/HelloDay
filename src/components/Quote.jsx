import React, { useEffect, useState } from "react";
import axios from "axios";

const Quote = () => {
	const url = "https://type.fit/api/quotes";
	const [quote, setQuote] = useState("");

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const response = await axios.get(url);
				const objArr = response.data;
				const randQuote = objArr[getRandomInt(objArr.length)];
				setQuote(randQuote);
			} catch (error) {
				console.log(error);
			}
		};

		fetchQuote();
	}, []);

	return (
		<div className="daily-quote">
			{quote === "" ? (
				<h2>loading...</h2>
			) : (
				<p>
					Quote of the day: {quote.text}...by {quote.author}
				</p>
			)}
		</div>
	);
};

export default Quote;
