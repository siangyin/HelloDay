import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import "../styles/quote.css";
import React from "react";

export default function Quote({ quote, classTag }) {
	const newClass = classTag;
	return (
		<div className={`dailyQuote ${classTag}`}>
			<FaQuoteLeft />
			{quote.text}...by {quote.author}
			<FaQuoteRight />
		</div>
	);
}
