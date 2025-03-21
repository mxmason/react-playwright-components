import * as React from "react";
import cn from "clsx";
import * as styles from "./PushButton.css.ts";

interface PushButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	defaultPressed?: boolean;
}

const NO_OP = () => {};

export const PushButton = ({
	children,
	className,
	defaultPressed = false,
	onClick = NO_OP,
	onClickCapture = NO_OP,
	...rest
}: PushButtonProps) => {
	const [isPressed, setIsPressed] = React.useState(defaultPressed);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setIsPressed((prev) => !prev);
		onClickCapture(e);
	};

	return (
		<button
			aria-pressed={isPressed}
			className={cn(styles.root, className)}
			tabIndex={0}
			onClick={onClick}
			onClickCapture={handleClick}
			{...rest}
		>
			{children} <span aria-hidden>{isPressed ? "✅" : "❌"}</span>
		</button>
	);
};
