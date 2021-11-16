import React from "react";
import "../styles/tagsselection.css";

export default function TagsSelection({ tagsList, clickHandler, classTag }) {
	const listing = tagsList.map((tag) => {
		return (
			<span
				key={tag.id}
				{...tag}
				onClick={() => {
					clickHandler(tag);
				}}
				className={`tagslist-item ${classTag}`}
			>
				{tag.label}
			</span>
		);
	});
	return <div className="tagslist">{listing} </div>;
}
