import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import "../styles/quote.css";
import React from "react";

export default function Quote({ quote, classTag }) {
	return (
		<div className={`dailyQuote ${classTag}`}>
			<FaQuoteLeft />
			<span>
				{quote.text}...by {quote.author}
			</span>
			<FaQuoteRight />
		</div>
	);
}
