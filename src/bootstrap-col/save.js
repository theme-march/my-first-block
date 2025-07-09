import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";
export default function save({ attributes }) {
	const {
		colsXs = "12",
		colsSm = "12",
		colsMd = "6",
		colsLg = "4",
		colsXl = "3",
		colsXxl = "3",
	} = attributes;

	const className = ` custom-bootstrap-column  col-${colsXs} col-sm-${colsSm} col-md-${colsMd} col-lg-${colsLg} col-xl-${colsXl} col-xxl-${colsXxl} g-2`;

	const blockProps = useBlockProps.save({
		className,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
