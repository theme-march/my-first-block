import { useBlockProps } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
	const { count } = attributes;

	return (
		<div {...useBlockProps()} className="bg-blue-100 p-4 rounded">
			<h3 className="text-xl font-bold mb-2">React Counter Block</h3>
			<p>Current Count: {count}</p>
			<button
				onClick={() => setAttributes({ count: count + 1 })}
				className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
			>
				Increase
			</button>
		</div>
	);
}
