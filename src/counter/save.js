import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { count } = attributes;

	return (
		<div {...useBlockProps.save()} className="bg-blue-100 p-4 rounded">
			<h3 className="text-xl font-bold mb-2">React Counter Block</h3>
			<p>Current Count: {count}</p>
		</div>
	);
}
