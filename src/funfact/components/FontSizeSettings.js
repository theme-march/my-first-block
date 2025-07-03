import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function FontSizeSettings({ activeItem, onChange }) {
	if (!activeItem) return null;

	return (
		<PanelBody title={__("Font Sizes", "funfact")} initialOpen={true}>
			<RangeControl
				label={__("Count Font Size (h2)", "funfact")}
				min={12}
				max={80}
				value={parseInt(activeItem.countFontSize, 10) || 24}
				onChange={(val) => onChange("countFontSize", `${val}px`)}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
			<RangeControl
				label={__("Title Font Size (h6)", "funfact")}
				min={12}
				max={60}
				value={parseInt(activeItem.titleFontSize, 10) || 18}
				onChange={(val) => onChange("titleFontSize", `${val}px`)}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
			<RangeControl
				label={__("Description Font Size (p)", "funfact")}
				min={10}
				max={50}
				value={parseInt(activeItem.descFontSize, 10) || 16}
				onChange={(val) => onChange("descFontSize", `${val}px`)}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
		</PanelBody>
	);
}
