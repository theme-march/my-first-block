import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps} className="row">
			<InnerBlocks
				allowedBlocks={["create-block/bootstrap-col"]}
				template={[
					["create-block/bootstrap-col"],
					["create-block/bootstrap-col"],
				]}
			/>
		</div>
	);
}
