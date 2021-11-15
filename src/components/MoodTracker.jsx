import React from "react";
import { icons } from "../Helper/Data";

const MoodTracker = ({ setMood, mood, setTodayDiaryObj }) => {
	return (
		<div>
			<h4>
				How's your day?
				{icons.map((icon) => {
					return (
						<span
							key={icon.id}
							className="mood-icon"
							onClick={() => {
								setMood(icon.id);
								setTodayDiaryObj((prevState) => ({
									...prevState,
									mood: icon.id,
								}));
							}}
						>
							{icon.icon}
						</span>
					);
				})}
			</h4>

			{mood && (
				<h4>
					Mood of the day :
					<span className="mood-icon active">{icons[mood].icon}</span>
					{`Feeling ${icons[mood].label}`}
				</h4>
			)}
		</div>
	);
};

export default MoodTracker;
