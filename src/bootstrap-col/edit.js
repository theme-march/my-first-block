import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { colClass } = attributes;
	const blockProps = useBlockProps({ className: colClass });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Column Settings")}>
					<SelectControl
						label={__("Column Width")}
						value={colClass}
						options={[
							{ label: "col", value: "col" },
							{ label: "col-6", value: "col-6" },
							{ label: "col-md-4", value: "col-md-4" },
							{ label: "col-lg-3", value: "col-lg-3" },
							{ label: "col-12", value: "col-12" },
						]}
						onChange={(value) => setAttributes({ colClass: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
}
