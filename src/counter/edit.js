import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const { count = 0 } = attributes;

	// Initial load from REST API → Set in block attribute
	useEffect(() => {
		fetch("/my-site/wordpress/wp-json/my-counter/v1/count")
			.then((res) => res.json())
			.then((data) => {
				if (data.count !== undefined) {
					setAttributes({ count: data.count });
				}
			});
	}, []);

	const increase = () => {
		const newCount = count + 1;
		setAttributes({ count: newCount });

		// Send to API
		fetch("/my-site/wordpress/wp-json/my-counter/v1/count", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ count: newCount }),
		});
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
