import React from "react";
import { icons } from "./data";

const MoodTracker = ({ setMood, mood }) => {
	return (
		<div>
			<h4>
				How's your day?{" "}
				{icons.map((icon) => {
					return (
						<span
							key={icon.id}
							onClick={() => {
								setMood(icon);
							}}
						>
							{icon.icon}
						</span>
					);
				})}
			</h4>

			{mood && (
				<h4>
					Mood of the day : {mood.label}
					{mood.icon}
				</h4>
			)}
		</div>
	);
};

export default MoodTracker;
