import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { count = 0 } = attributes;

	return (
		<div {...useBlockProps.save()} className="wp-block-create-block-counter">
			<p>
				<strong>Saved Count:</strong> {count}
			</p>
		</div>
	);
}
