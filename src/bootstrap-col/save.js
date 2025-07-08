import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { colClass } = attributes;

	return (
		<div {...useBlockProps.save({ className: colClass })}>
			<InnerBlocks.Content />
		</div>
	);
}
