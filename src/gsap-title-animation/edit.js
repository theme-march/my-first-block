// import { __ } from "@wordpress/i18n";
// import {
// 	useBlockProps,
// 	RichText,
// 	InspectorControls,
// 	BlockControls,
// } from "@wordpress/block-editor";
// import {
// 	PanelBody,
// 	SelectControl,
// 	RangeControl,
// 	ToolbarGroup,
// 	ToolbarButton,
// 	Button,
// } from "@wordpress/components";
// import { Fragment } from "@wordpress/element";

// export default function Edit({ attributes, setAttributes }) {
// 	const {
// 		content,
// 		level,
// 		offsetX,
// 		offsetY,
// 		duration,
// 		delay,
// 		easing,
// 		alignment,
// 		paddingTop,
// 		paddingRight,
// 		paddingBottom,
// 		paddingLeft,
// 		marginTop,
// 		marginRight,
// 		marginBottom,
// 		marginLeft,
// 		fontWeight,
// 		position,
// 		fontSize,
// 	} = attributes;

// 	// Default font sizes by heading level
// 	const defaultFontSizes = {
// 		1: 64,
// 		2: 48,
// 		3: 36,
// 		4: 30,
// 		5: 24,
// 		6: 20,
// 	};

// 	const appliedFontSize = fontSize
// 		? parseInt(fontSize)
// 		: defaultFontSizes[level];

// 	const blockProps = useBlockProps({
// 		style: {
// 			position,
// 			transition: "all 0.3s ease-in-out",
// 			textAlign: alignment,
// 			fontWeight: fontWeight,
// 			fontSize: `${appliedFontSize}px`,
// 			padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
// 			margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
// 		},
// 	});

// 	const tagName = `h${level}`;

// 	return (
// 		<Fragment>
// 			{/* Toolbar Heading Level */}
// 			<BlockControls>
// 				<ToolbarGroup label={__("Heading Level", "gsap-title-animation")}>
// 					{[1, 2, 3, 4, 5, 6].map((num) => (
// 						<ToolbarButton
// 							key={num}
// 							isPressed={level === num}
// 							label={`H${num}`}
// 							onClick={() => setAttributes({ level: num })}
// 							showTooltip
// 						>
// 							H{num}
// 						</ToolbarButton>
// 					))}
// 				</ToolbarGroup>
// 			</BlockControls>

// 			{/* Sidebar Controls */}
// 			<InspectorControls>
// 				<PanelBody title="🎯 Animation Settings" initialOpen={true}>
// 					<RangeControl
// 						label="Translate X"
// 						value={offsetX}
// 						onChange={(value) => setAttributes({ offsetX: value })}
// 						min={-300}
// 						max={300}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Translate Y"
// 						value={offsetY}
// 						onChange={(value) => setAttributes({ offsetY: value })}
// 						min={-300}
// 						max={300}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Duration (sec)"
// 						value={duration}
// 						onChange={(value) => setAttributes({ duration: value })}
// 						min={0.1}
// 						max={5}
// 						step={0.1}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Delay (sec)"
// 						value={delay}
// 						onChange={(value) => setAttributes({ delay: value })}
// 						min={0}
// 						max={5}
// 						step={0.1}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<SelectControl
// 						label="Easing"
// 						value={easing}
// 						onChange={(value) => setAttributes({ easing: value })}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 						options={[
// 							{ label: "Power2 Out", value: "power2.out" },
// 							{ label: "Power1 InOut", value: "power1.inOut" },
// 							{ label: "Linear", value: "linear" },
// 							{ label: "Back Out", value: "back.out(1.7)" },
// 							{ label: "Elastic Out", value: "elastic.out(1, 0.3)" },
// 						]}
// 					/>
// 				</PanelBody>

// 				<PanelBody title="🎨 Style Settings" initialOpen={false}>
// 					<SelectControl
// 						label="Text Align"
// 						value={alignment}
// 						onChange={(value) => setAttributes({ alignment: value })}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 						options={[
// 							{ label: "Left", value: "left" },
// 							{ label: "Center", value: "center" },
// 							{ label: "Right", value: "right" },
// 						]}
// 					/>
// 					<RangeControl
// 						label="Font Size (Override)"
// 						value={parseInt(fontSize) || defaultFontSizes[level]}
// 						onChange={(value) => setAttributes({ fontSize: `${value}` })}
// 						min={10}
// 						max={200}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<Button
// 						isSecondary
// 						onClick={() => setAttributes({ fontSize: "" })}
// 						style={{ marginBottom: "1rem" }}
// 					>
// 						Reset Font Size to Default
// 					</Button>

// 					<SelectControl
// 						label="Font Weight"
// 						value={fontWeight}
// 						onChange={(value) => setAttributes({ fontWeight: value })}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 						options={[
// 							{ label: "Normal (400)", value: "400" },
// 							{ label: "Medium (500)", value: "500" },
// 							{ label: "Semi Bold (600)", value: "600" },
// 							{ label: "Bold (700)", value: "700" },
// 							{ label: "Extra Bold (800)", value: "800" },
// 						]}
// 					/>
// 					<SelectControl
// 						label="Position"
// 						value={position}
// 						onChange={(value) => setAttributes({ position: value })}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 						options={[
// 							{ label: "Relative", value: "relative" },
// 							{ label: "Static", value: "static" },
// 							{ label: "Absolute", value: "absolute" },
// 							{ label: "Fixed", value: "fixed" },
// 						]}
// 					/>
// 				</PanelBody>

// 				<PanelBody title="🎨 Spacing Settings" initialOpen={false}>
// 					{/* Padding Controls */}
// 					<RangeControl
// 						label="Padding Top"
// 						value={paddingTop}
// 						onChange={(value) => setAttributes({ paddingTop: value })}
// 						min={0}
// 						max={500}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Padding Right"
// 						value={paddingRight}
// 						onChange={(value) => setAttributes({ paddingRight: value })}
// 						min={0}
// 						max={500}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Padding Bottom"
// 						value={paddingBottom}
// 						onChange={(value) => setAttributes({ paddingBottom: value })}
// 						min={0}
// 						max={500}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Padding Left"
// 						value={paddingLeft}
// 						onChange={(value) => setAttributes({ paddingLeft: value })}
// 						min={0}
// 						max={500}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>

// 					{/* Margin Controls */}
// 					<RangeControl
// 						label="Margin Top"
// 						value={marginTop}
// 						onChange={(value) => setAttributes({ marginTop: value })}
// 						min={0}
// 						max={500}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Margin Right"
// 						value={marginRight}
// 						onChange={(value) => setAttributes({ marginRight: value })}
// 						min={0}
// 						max={500}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Margin Bottom"
// 						value={marginBottom}
// 						onChange={(value) => setAttributes({ marginBottom: value })}
// 						min={0}
// 						max={500}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 					<RangeControl
// 						label="Margin Left"
// 						value={marginLeft}
// 						onChange={(value) => setAttributes({ marginLeft: value })}
// 						min={0}
// 						max={500}
// 						__nextHasNoMarginBottom={true}
// 						__next40pxDefaultSize={true}
// 					/>
// 				</PanelBody>
// 			</InspectorControls>

// 			{/* Main Content */}

// 			<RichText
// 				{...blockProps}
// 				tagName={tagName}
// 				value={content}
// 				onChange={(value) => setAttributes({ content: value })}
// 				placeholder={__("📝 Write heading...", "gsap-title-animation")}
// 				className="gsap-title-animation"
// 			/>

// 			{/* Reset Button */}
// 		</Fragment>
// 	);
// }

import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	BlockControls,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import AnimationSettings from "./components/AnimationSettings";
import StyleSettings from "./components/StyleSettings";
import SpacingSettings from "./components/SpacingSettings";
import { getCombinedSpacing } from "./utils/styleHelpers";

export default function Edit({ attributes, setAttributes }) {
	const {
		content,
		level,
		alignment,
		fontSize,
		fontWeight,
		position,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
	} = attributes;

	// 	// Default font sizes by heading level
	const defaultFontSizes = {
		1: 64,
		2: 48,
		3: 36,
		4: 30,
		5: 24,
		6: 20,
	};
	const appliedFontSize = fontSize
		? parseInt(fontSize)
		: defaultFontSizes[level];

	const blockProps = useBlockProps({
		style: {
			textAlign: alignment || "left",
			fontWeight: fontWeight || "400",
			position: position || "relative",
			fontSize: `${appliedFontSize}px`,
			padding: getCombinedSpacing(
				paddingTop,
				paddingRight,
				paddingBottom,
				paddingLeft,
			),
			margin: getCombinedSpacing(
				marginTop,
				marginRight,
				marginBottom,
				marginLeft,
			),
			transition: "all 0.3s ease-in-out",
		},
	});

	const tagName = `h${level}`;

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup label={__("Heading Level", "gsap-title-animation")}>
					{[1, 2, 3, 4, 5, 6].map((num) => (
						<ToolbarButton
							key={num}
							isPressed={level === num}
							label={`H${num}`}
							onClick={() => setAttributes({ level: num })}
							showTooltip
						>
							H{num}
						</ToolbarButton>
					))}
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<AnimationSettings
					attributes={attributes}
					setAttributes={setAttributes}
				/>
				<StyleSettings
					attributes={attributes}
					setAttributes={setAttributes}
					defaultFontSizes={defaultFontSizes}
				/>
				<SpacingSettings
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			</InspectorControls>

			<RichText
				{...blockProps}
				tagName={tagName}
				value={content}
				onChange={(value) => setAttributes({ content: value })}
				placeholder={__("📝 Write heading...", "gsap-title-animation")}
				className="gsap-title-animation"
			/>
		</Fragment>
	);
}
