import axios from "axios";
import React, { useEffect, useState } from "react";

function Quote() {
	const url = "https://type.fit/api/quotes";
	const [quote, setQuote] = useState("");

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	const getQuote = async () => {
		try {
			const response = await axios.get(url);
			const objArr = response.data;

			setQuote(objArr[getRandomInt(objArr.length)]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getQuote();
	}, []);

	console.log("hi");
	console.log(quote);

	return (
		<div>
			{quote === "" && <h2>loading...</h2>}
			<p>{quote.text}</p>
			<p>by {quote.author}</p>
		</div>
	);
}

export default Quote;
