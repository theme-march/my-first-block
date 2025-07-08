import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { containerClass } = attributes;

	const blockProps = useBlockProps({
		className: `custom-bootstrap-container ${containerClass}`,
	});

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
						options={[
							{ label: "Container (fixed width)", value: "container" },
							{
								label: "Container Fluid (full width)",
								value: "container-fluid",
							},
							{ label: "Container SM", value: "container-sm" },
							{ label: "Container MD", value: "container-md" },
							{ label: "Container LG", value: "container-lg" },
							{ label: "Container XL", value: "container-xl" },
							{ label: "Container XXL", value: "container-xxl" },
						]}
						onChange={(val) => setAttributes({ containerClass: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="custom-bootstrap-inner">
					<InnerBlocks
						templateLock={false}
						renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					/>
				</div>
			</div>
		</>
	);
}
