import { moodIcons } from "../helper/Data";

export default function MoodTracker({ setMood, mood, setTodayDiaryObj }) {
	const listing = moodIcons.map((icon) => {
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
	});

	if (mood !== null) {
		return (
			<div className="mood-tracker">
				<h5>
					Mood of the day:{" "}
					<span>
						<strong className="mood-icon active">{moodIcons[mood].icon}</strong>
						<strong>{moodIcons[mood].label}</strong>
					</span>
				</h5>

				{listing}
			</div>
		);
	}
	return (
		<div className="mood-tracker">
			<h5>Mood of the day:</h5>
			{listing}
		</div>
	);
}
