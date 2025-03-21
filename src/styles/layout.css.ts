import { style } from "@vanilla-extract/css";
import { spacing } from "./variables.css";

export const center = style({
	boxSizing: "content-box",
	marginLeft: "auto",
	marginRight: "auto",
	maxWidth: spacing.measure,
	maxInlineSize: spacing.measure,
});
