import React from "react";
import { icons } from "../data/Data";

const MoodTracker = ({ setMood, mood, setTodayDiaryObj }) => {
	return (
		<div>
			<h4>
				How's your day?{" "}
				{icons.map((icon) => {
					return (
						<span 
							key={icon.id} className="mood-icon"
							onClick={() => {
								setMood(icon);
								setTodayDiaryObj((prevState) => ({ ...prevState, mood: icon }));
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
