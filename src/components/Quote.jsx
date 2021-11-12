import { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

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
		<>
			{quote === "" && <h4>loading...</h4>}
			<h4>Quote of the day: </h4>

			{quote && (
				<div className="dailyQuote">
					<FaQuoteLeft />
					{quote.text}...by {quote.author}
					<FaQuoteRight />
				</div>
			)}
		</>
	);
};

export default Quote;
