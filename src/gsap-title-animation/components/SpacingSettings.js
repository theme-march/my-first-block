import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function SpacingSettings({ attributes, setAttributes }) {
	const {
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
	} = attributes;

	return (
		<PanelBody title="🎨 Spacing Settings" initialOpen={false}>
			{/* Padding Controls */}
			<RangeControl
				label={__("Padding Top", "gsap-title-animation")}
				value={paddingTop}
				onChange={(value) => setAttributes({ paddingTop: value })}
				min={0}
				max={500}
			/>
			<RangeControl
				label={__("Padding Right", "gsap-title-animation")}
				value={paddingRight}
				onChange={(value) => setAttributes({ paddingRight: value })}
				min={0}
				max={500}
			/>
			<RangeControl
				label={__("Padding Bottom", "gsap-title-animation")}
				value={paddingBottom}
				onChange={(value) => setAttributes({ paddingBottom: value })}
				min={0}
				max={500}
			/>
			<RangeControl
				label={__("Padding Left", "gsap-title-animation")}
				value={paddingLeft}
				onChange={(value) => setAttributes({ paddingLeft: value })}
				min={0}
				max={500}
			/>

			{/* Margin Controls */}
			<RangeControl
				label={__("Margin Top", "gsap-title-animation")}
				value={marginTop}
				onChange={(value) => setAttributes({ marginTop: value })}
				min={0}
				max={500}
			/>
			<RangeControl
				label={__("Margin Right", "gsap-title-animation")}
				value={marginRight}
				onChange={(value) => setAttributes({ marginRight: value })}
				min={0}
				max={500}
			/>
			<RangeControl
				label={__("Margin Bottom", "gsap-title-animation")}
				value={marginBottom}
				onChange={(value) => setAttributes({ marginBottom: value })}
				min={0}
				max={500}
			/>
			<RangeControl
				label={__("Margin Left", "gsap-title-animation")}
				value={marginLeft}
				onChange={(value) => setAttributes({ marginLeft: value })}
				min={0}
				max={500}
			/>
		</PanelBody>
	);
}
