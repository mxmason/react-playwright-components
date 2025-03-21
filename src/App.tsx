import { useState } from "react";
import { Button } from "~/components/Button";

import * as layout from "~/styles/layout.css";
import * as styles from "./App.css.ts";
import { PushButton } from "./components/PushButton";

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<header className={layout.center}>
				<h1>Hello, buttons</h1>
			</header>
			<main className={layout.center}>
				<div className={styles.card}>
					<h2>Counter</h2>
					<Button
						className={styles.button}
						onClick={() => setCount((count) => count + 1)}
					>
						cosunt is {count}
					</Button>
					<h2>Push button</h2>
					<PushButton>Push me!</PushButton>
				</div>
			</main>
		</>
	);
}
