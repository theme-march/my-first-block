import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function CounterFrontend() {
	const [count, setCount] = useState(0);

	// Load count on mount
	useEffect(() => {
		fetch("/my-site/wordpress/wp-json/my-counter/v1/count")
			.then((res) => res.json())
			.then((data) => setCount(data.count));
	}, []);
	console.log(count);

	const increase = () => {
		const newCount = count + 1;
		setCount(newCount);
		fetch("/my-site/wordpress/wp-json/my-counter/v1/count", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ count: newCount }),
		});
	};

	return (
		<div className="bg-blue-100 p-4 rounded">
			<h3 className="text-xl font-bold mb-2">Frontend Counter</h3>
			<p>Current Count: {count}</p>
			<button
				className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
				onClick={increase}
			>
				Increase
			</button>
		</div>
	);
}

document.addEventListener("DOMContentLoaded", () => {
	const containers = document.querySelectorAll(
		".wp-block-create-block-counter",
	);

	containers.forEach((container) => {
		const root = createRoot(container);
		root.render(<CounterFrontend />);
	});
});
