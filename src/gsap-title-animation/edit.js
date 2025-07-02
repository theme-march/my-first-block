import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl, RangeControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		content,
		level,
		offsetX,
		offsetY,
		duration,
		delay,
		easing,
		alignment,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Animation Settings", "gsap-title-animation")}
					initialOpen={true}
				>
					<RangeControl
						label="X Offset"
						value={offsetX}
						onChange={(value) => setAttributes({ offsetX: value })}
						min={-300}
						max={300}
					/>
					<RangeControl
						label="Y Offset"
						value={offsetY}
						onChange={(value) => setAttributes({ offsetY: value })}
						min={-300}
						max={300}
					/>
					<RangeControl
						label="Duration (sec)"
						value={duration}
						onChange={(value) => setAttributes({ duration: value })}
						min={0.1}
						max={5}
						step={0.1}
					/>
					<RangeControl
						label="Delay (sec)"
						value={delay}
						onChange={(value) => setAttributes({ delay: value })}
						min={0}
						max={5}
						step={0.1}
					/>
					<SelectControl
						label="Easing Function"
						value={easing}
						options={[
							{ label: "Power2 Out", value: "power2.out" },
							{ label: "Power1 InOut", value: "power1.inOut" },
							{ label: "Linear", value: "linear" },
							{ label: "Back Out", value: "back.out(1.7)" },
							{ label: "Elastic Out", value: "elastic.out(1, 0.3)" },
						]}
						onChange={(value) => setAttributes({ easing: value })}
					/>
					<SelectControl
						label="Text Alignment"
						value={alignment}
						options={[
							{ label: "Left", value: "left" },
							{ label: "Center", value: "center" },
							{ label: "Right", value: "right" },
						]}
						onChange={(value) => setAttributes({ alignment: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<RichText
				{...useBlockProps()}
				tagName={`h${level}`}
				value={content}
				onChange={(value) => setAttributes({ content: value })}
				placeholder={__("Write heading...", "gsap-title-animation")}
				className="gsap-title-animation"
				data-x={offsetX}
				data-y={offsetY}
				data-duration={duration}
				data-delay={delay}
				data-easing={easing}
				data-alignment={alignment}
				style={{ textAlign: alignment }}
			/>
		</>
	);
}
