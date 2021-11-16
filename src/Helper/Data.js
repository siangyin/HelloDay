import {
	FaTired,
	FaAngry,
	FaLaughBeam,
	FaSmile,
	FaSadCry,
	FaFrown,
	FaMeh,
	FaGrinHearts,
	FaGrinTongue,
	FaFlushed,
} from "react-icons/fa";

// DataArr: preText
// DataObj: tags, moodIcons

export const preText = [
	"I am grateful for...",
	"3 amazing things that happened today",
	"What did I achieve today?",
	"What lessons did I learn?",
	"How could I have made today better?",
	"Wins and Challenges of the Day",
];

export const tags = [
	{ id: 0, label: "family" },
	{ id: 1, label: "friend" },
	{ id: 2, label: "love" },
	{ id: 3, label: "social" },
	{ id: 4, label: "self-care" },
	{ id: 5, label: "movie" },
	{ id: 6, label: "meditation" },
	{ id: 7, label: "work" },
	{ id: 8, label: "habit" },
	{ id: 9, label: "happiness" },
	{ id: 10, label: "health" },
	{ id: 11, label: "home" },
	{ id: 12, label: "fitness" },
	{ id: 13, label: "finance" },
];

export const moodIcons = [
	{
		id: 0,
		label: "Lovely",
		icon: <FaGrinHearts />,
	},
	{
		id: 1,
		label: "Amazing",
		icon: <FaLaughBeam />,
	},
	{
		id: 2,
		label: "Content",
		icon: <FaSmile />,
	},
	{
		id: 3,
		label: "Silly",
		icon: <FaGrinTongue />,
	},
	{
		id: 4,
		label: "Neutral",
		icon: <FaMeh />,
	},
	{
		id: 5,
		label: "Embarassed",
		icon: <FaFlushed />,
	},
	{
		id: 6,
		label: "Tired",
		icon: <FaTired />,
	},
	{
		id: 7,
		label: "Disappointed",
		icon: <FaFrown />,
	},
	{
		id: 8,
		label: "Upset",
		icon: <FaSadCry />,
	},
	{
		id: 9,
		label: "Frustrated",
		icon: <FaAngry />,
	},
];
