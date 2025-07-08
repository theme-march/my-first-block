import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { containerClass = "container" } = attributes;

	const blockProps = useBlockProps({
		className: `custom-bootstrap-container ${containerClass}`,
	});

	// Efficiently check if there are any inner blocks
	const hasInnerBlocks = useSelect(
		(select) =>
			select("core/block-editor").getBlock(clientId)?.innerBlocks?.length > 0,
		[clientId],
	);

	// Define options once to avoid re-creating on every render
	const containerOptions = [
		{ label: __("Container (fixed width)", "custom"), value: "container" },
		{
			label: __("Container Fluid (full width)", "custom"),
			value: "container-fluid",
		},
		{ label: __("Container SM", "custom"), value: "container-sm" },
		{ label: __("Container MD", "custom"), value: "container-md" },
		{ label: __("Container LG", "custom"), value: "container-lg" },
		{ label: __("Container XL", "custom"), value: "container-xl" },
		{ label: __("Container XXL", "custom"), value: "container-xxl" },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Container Settings", "custom")}
					initialOpen={true}
				>
					<SelectControl
						label={__("Container Type", "custom")}
						value={containerClass}
						options={containerOptions}
						onChange={(val) => setAttributes({ containerClass: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="custom-bootstrap-container-inner">
					<InnerBlocks
						templateLock={false}
						renderAppender={
							!hasInnerBlocks ? InnerBlocks.ButtonBlockAppender : ""
						}
					/>
				</div>
			</div>
		</>
	);
}
