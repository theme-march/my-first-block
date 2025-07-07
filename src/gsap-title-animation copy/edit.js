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
// import SpliTextSetting from "./components/SpliTextSetting";

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
		splitTextEnabled,
		splitType,
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
				{/* <SpliTextSetting
					attributes={attributes}
					setAttributes={setAttributes}
				/> */}
			</InspectorControls>

			<RichText
				{...blockProps}
				tagName={tagName}
				value={content}
				onChange={(value) => setAttributes({ content: value })}
				placeholder={__("📝 Write heading...", "gsap-title-animation")}
				className="gsap-title-animation"
				data-split={splitTextEnabled ? "true" : "false"}
				data-splittype={splitType ? splitType : ""}
			/>
		</Fragment>
	);
}
