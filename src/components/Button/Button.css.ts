import { style } from "@vanilla-extract/css";
import { colors, spacing } from "~/styles/variables.css";

export const root = style({
	background: "transparent",
	borderRadius: "8px",
	border: "1px solid transparent",
	padding: `${spacing.s2} ${spacing.s4}`,
	fontSize: "100%",
	fontWeight: 500,
	fontFamily: "inherit",
	backgroundColor: colors.gray800,
	cursor: "pointer",
	transition: "border-color 0.25s",
	"@media": {
		"(prefers-color-scheme: light)": {
			backgroundColor: colors.gray100,
		},
	},
});
