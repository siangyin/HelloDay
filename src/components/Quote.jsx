import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import "../styles/quote.css";
import React from "react";

export default function Quote({ quote }) {
	return (
		<div className="dailyQuote">
			<FaQuoteLeft />
			{quote.text}...by {quote.author}
			<FaQuoteRight />
		</div>
	);
}
