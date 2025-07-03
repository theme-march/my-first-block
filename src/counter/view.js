import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function CounterFrontend() {
	const [count, setCount] = useState(0);

	// Load count on first mount
	useEffect(() => {
		fetch("/my-site/wordpress/wp-json/my-counter/v1/count")
			.then((res) => res.json())
			.then((data) => {
				if (typeof data?.count === "number") {
					setCount(data.count);
				} else {
					console.warn("Invalid count data from API:", data);
				}
			})
			.catch((err) => {
				console.error("Failed to fetch count from API:", err);
			});
	}, []);

	const increase = () => {
		const newCount = count + 1;
		setCount(newCount);

		// Send updated count to API
		fetch("/my-site/wordpress/wp-json/my-counter/v1/count", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ count: newCount }),
		}).catch((err) => console.error("Failed to POST new count to API:", err));
	};

	return (
		<div className="wp-block-create-block-counter bg-blue-100 p-4 rounded">
			<h3 className="text-xl font-bold mb-2">Frontend Counter</h3>
			<p>Current Count: {count}</p>
			<button
				onClick={increase}
				className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
			>
				Increase
			</button>
		</div>
	);
}

// Wait for DOM and render into each .wp-block-create-block-counter
document.addEventListener("DOMContentLoaded", () => {
	const containers = document.querySelectorAll(
		".wp-block-create-block-counter",
	);

	if (!containers || containers.length === 0) {
		console.warn("No .wp-block-create-block-counter elements found.");
		return;
	}

	containers.forEach((container) => {
		try {
			const root = createRoot(container);
			root.render(<CounterFrontend />);
		} catch (error) {
			console.error("React render failed for counter block:", error);
		}
	});
});
