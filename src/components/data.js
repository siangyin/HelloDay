import {
	FaTired,
	FaAngry,
	FaLaughBeam,
	FaSmile,
	FaSadCry,
	FaFrown,
	FaMeh,
} from "react-icons/fa";
import React from "react";

export const icons = [
	{
		id: 1,
		label: "laugh",
		icon: <FaLaughBeam />,
	},
	{
		id: 2,
		label: "smile",
		icon: <FaSmile />,
	},
	{
		id: 3,
		label: "meh",
		icon: <FaMeh />,
	},
	{
		id: 4,
		label: "tired",
		icon: <FaTired />,
	},
	{
		id: 5,
		label: "frown",
		icon: <FaFrown />,
	},
	{
		id: 6,
		label: "sad",
		icon: <FaSadCry />,
	},
	{
		id: 7,
		label: "angry",
		icon: <FaAngry />,
	},
];

export const preText = [
	"I am grateful for...",
	"3 amazing things that happened today",
	"What did I achieve today?",
	"What lessons did I learn?",
	"How could I have made today better?",
	"Wins and Challenges of the Day",
];
