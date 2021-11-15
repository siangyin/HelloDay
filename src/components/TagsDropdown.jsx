import React from "react";

function TagsDropdown({ tagsList, clickHandler, classTag }) {
	return (
		<ul className="tagslist">
			{tagsList.map((tag) => {
				return (
					<li
						key={tag.id}
						{...tag}
						onClick={() => {
							clickHandler(tag);
						}}
						className={`tagslist-item ${classTag}`}
					>
						{tag.label}
					</li>
				);
			})}
		</ul>
	);
}

export default TagsDropdown;
