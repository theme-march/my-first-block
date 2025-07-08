import {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function StyleSettings({
	attributes,
	setAttributes,
	defaultFontSizes,
}) {
	const { alignment, fontSize, fontWeight, level, position } = attributes;

	return (
		<PanelBody title="🎨 Style Settings" initialOpen={false}>
			<SelectControl
				label="Text Align"
				value={alignment}
				onChange={(value) => setAttributes({ alignment: value })}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
				options={[
					{ label: "Left", value: "left" },
					{ label: "Center", value: "center" },
					{ label: "Right", value: "right" },
				]}
			/>
			<RangeControl
				label="Font Size"
				value={parseInt(fontSize) || defaultFontSizes[level]}
				onChange={(value) => setAttributes({ fontSize: `${value}` })}
				min={10}
				max={200}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
			<Button
				isSecondary
				onClick={() => setAttributes({ fontSize: defaultFontSizes[level] })}
				style={{ marginBottom: "1rem" }}
			>
				Reset Font Size
			</Button>
			<SelectControl
				label="Font Weight"
				value={fontWeight}
				onChange={(value) => setAttributes({ fontWeight: value })}
				options={[
					{ label: "Normal (400)", value: "400" },
					{ label: "Medium (500)", value: "500" },
					{ label: "Semi Bold (600)", value: "600" },
					{ label: "Bold (700)", value: "700" },
					{ label: "Extra Bold (800)", value: "800" },
				]}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
			<SelectControl
				label="Position"
				value={position}
				onChange={(value) => setAttributes({ position: value })}
				options={[
					{ label: "Relative", value: "relative" },
					{ label: "Static", value: "static" },
					{ label: "Absolute", value: "absolute" },
					{ label: "Fixed", value: "fixed" },
				]}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
		</PanelBody>
	);
}
