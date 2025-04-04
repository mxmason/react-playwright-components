import { globalStyle } from "@vanilla-extract/css";

import { colors } from "./variables.css";

// :root {
//   font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
//   line-height: 1.5;
//   font-weight: 400;

//   color-scheme: light dark;
//   color: rgba(255, 255, 255, 0.87);
//   background-color: #242424;

//   font-synthesis: none;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

// 	height: fill-available;
// }

globalStyle(":root", {
	fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
	lineHeight: 1.5,
	fontWeight: 400,

	colorScheme: "light dark",
	color: colors.white,
	backgroundColor: colors.gray800,

	fontSynthesis: "none",
	textRendering: "optimizeLegibility",
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",

	height: ["100vh", "100dvh", "fill-available"],
	"@media": {},
});

// body {
//   margin: 0;
//   display: flex;
//   place-items: center;
//   min-width: 320px;
//   min-height: 100vh;
// }

globalStyle("body", {
	display: "flex",
	height: "100%",
	margin: 0,
	placeItems: "center",
});

// #root {
//   max-width: 1280px;
//   margin: 0 auto;
//   padding: 2rem;
//   text-align: center;
// }

globalStyle("#root", {
	height: "100%",
	width: "100%",
});

// a {
//   font-weight: 500;
//   color: #646cff;
//   text-decoration: inherit;
// }
// a:hover {
//   color: #535bf2;
// }

// h1 {
//   font-size: 3.2em;
//   line-height: 1.1;
// }

// button:hover {
//   border-color: #646cff;
// }
// button:focus,
// button:focus-visible {
//   outline: 4px auto -webkit-focus-ring-color;
// }

// @media (prefers-color-scheme: light) {
//   :root {
//     color: #213547;
//     background-color: #ffffff;
//   }
//   a:hover {
//     color: #747bff;
//   }
// }
