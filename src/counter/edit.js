import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const { count = 0 } = attributes;

	useEffect(() => {
		fetch("/my-site/wordpress/wp-json/my-counter/v1/count")
			.then((res) => res.json())
			.then((data) => {
				if (
					typeof data === "object" &&
					data !== null &&
					typeof data.count === "number"
				) {
					setAttributes({ count: data.count });
				}
			})
			.catch((err) => console.error("Fetch count failed", err));
	}, []);

	const increase = () => {
		const newCount = count + 1;
		setAttributes({ count: newCount });

		fetch("/my-site/wordpress/wp-json/my-counter/v1/count", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ count: newCount }),
		}).catch((err) => console.error("Update count failed", err));
	};

	return (
		<div {...useBlockProps()} className="bg-yellow-100 p-4 rounded">
			<h3 className="text-xl font-bold mb-2">Editor Counter</h3>
			<p>Current Count: {count}</p>
			<button
				onClick={increase}
				className="bg-yellow-600 text-white px-3 py-1 mt-2 rounded"
			>
				Increase
			</button>
		</div>
	);
}
