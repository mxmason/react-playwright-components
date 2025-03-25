// Playwright!

import { test, expect } from "@playwright/experimental-ct-react";
import { PushButton } from "./PushButton";

test("should render with expected ARIA state", async ({ mount }) => {
	const component = await mount(<PushButton />);
	await expect(component).toHaveAttribute("aria-pressed", "false");
});

test("should toggle state when clicked", async ({ mount }) => {
	const component = await mount(<PushButton>A button</PushButton>);
	await component.click();
	await expect(component).toHaveAttribute("aria-pressed", "true");
	await component.click();
	await expect(component).toHaveAttribute("aria-pressed", "false");
});
