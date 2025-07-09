import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { PanelBody, SelectControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

import "./editor.scss";

const columnChoices = Array.from({ length: 12 }, (_, i) => ({
	label: `${i + 1} Column${i > 0 ? "s" : ""}`,
	value: (i + 1).toString(),
}));

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		colsXs = "12",
		colsSm = "12",
		colsMd = "6",
		colsLg = "4",
		colsXl = "3",
		colsXxl = "3",
	} = attributes;

	const blockProps = useBlockProps({
		className: `custom-bootstrap-column col-${colsXs} col-sm-${colsSm} col-md-${colsMd} col-lg-${colsLg} col-xl-${colsXl} col-xxl-${colsXxl} g-2`,
	});
	// Efficiently check if there are any inner blocks
	const hasInnerBlocks = useSelect(
		(select) =>
			select("core/block-editor").getBlock(clientId)?.innerBlocks?.length > 0,
		[clientId],
	);
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Column Settings" initialOpen={true}>
					<SelectControl
						label="XS (Extra small)"
						value={colsXs}
						options={columnChoices}
						onChange={(value) => setAttributes({ colsXs: value })}
					/>
					<SelectControl
						label="SM (Small ≥576px)"
						value={colsSm}
						options={columnChoices}
						onChange={(value) => setAttributes({ colsSm: value })}
					/>
					<SelectControl
						label="MD (Medium ≥768px)"
						value={colsMd}
						options={columnChoices}
						onChange={(value) => setAttributes({ colsMd: value })}
					/>
					<SelectControl
						label="LG (Large ≥992px)"
						value={colsLg}
						options={columnChoices}
						onChange={(value) => setAttributes({ colsLg: value })}
					/>
					<SelectControl
						label="XL (Extra Large ≥1200px)"
						value={colsXl}
						options={columnChoices}
						onChange={(value) => setAttributes({ colsXl: value })}
					/>
					<SelectControl
						label="XXL (Extra Extra Large ≥1400px)"
						value={colsXxl}
						options={columnChoices}
						onChange={(value) => setAttributes({ colsXxl: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks
					templateLock={false}
					renderAppender={
						!hasInnerBlocks ? InnerBlocks.ButtonBlockAppender : ""
					}
				/>
			</div>
		</Fragment>
	);
}
