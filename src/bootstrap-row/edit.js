import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";
export default function Edit() {
	const blockProps = useBlockProps({ className: "row" });

	return (
		<div {...blockProps}>
			<div className="custom-bootstrap-row-inner">
				<InnerBlocks templateLock={false} />
			</div>
		</div>
	);
}
