import * as React from "react";
import cn from "clsx";

import * as styles from "./Button.css";

type DetailedButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({
	children,
	className,
	...rest
}: DetailedButtonProps) => {
	return (
		<button className={cn(styles.root, className)} tabIndex={0} {...rest}>
			{children}
		</button>
	);
};
