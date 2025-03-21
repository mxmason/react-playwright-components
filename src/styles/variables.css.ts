import { createGlobalTheme } from "@vanilla-extract/css";

const vars = createGlobalTheme(":root", {
	colors: {
		black: "hsla(0, 0%, 0%, 1)",
		white: "hsla(0, 0%, 100%, 0.87)",

		blue600: "hsla(237, 100%, 70%, 1)",

		gray100: "hsla(0, 0%, 10%, 1)",
		gray800: "hsla(0, 0%, 14%, 1)",
		danger: "hsla(0, 100%, 50%, 1)",
	},
	spacing: {
		s1: "4px",
		s2: "8px",
		s3: "12px",
		s4: "16px",
		measure: "68ch",
	},
});

export const { colors, spacing } = vars;
