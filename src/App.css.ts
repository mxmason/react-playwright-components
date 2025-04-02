import { createVar, globalStyle, keyframes, style } from "@vanilla-extract/css";

const glowColor = createVar();

export const button = style({
	border: "1px solid black",
	borderRadius: "4px",
});

export const logo = style({
	vars: {
		[glowColor]: "hsla(237, 100%, 70%, 0.667)",
	},
	height: "6em",
	padding: "1.5em",
	willChange: "filter",
	transition: "filter 400ms",
	selectors: {
		"&:hover": {
			filter: `drop-shadow(0 0 2em ${glowColor})`,
		},
	},
});

export const logoLightGlow = style([
	logo,
	{
		vars: {
			[glowColor]: "hsla(193, 95%, 68%, 0.667)",
		},
	},
]);

const logoSpin = keyframes({
	from: {
		transform: "rotate(0deg)",
	},
	to: {
		transform: "rotate(360deg)",
	},
});

globalStyle(`a:has(${logo})`, {
	display: "inline-block",
});

globalStyle(`a:nth-of-type(2) ${logo}`, {
	animation: `${logoSpin} infinite 20s linear`,
});

export const card = style({
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	gap: "8px",
});
