import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function AnimationSettings({ attributes, setAttributes }) {
	const {
		offsetX,
		offsetY,
		duration,
		delay,
		easing,
		splitTextEnabled = false,
		splitType = "chars",
	} = attributes;

	return (
		<PanelBody title="🎯 Animation Settings" initialOpen={true}>
			<RangeControl
				label={__("Translate X", "gsap-title-animation")}
				value={offsetX}
				onChange={(value) => setAttributes({ offsetX: value })}
				min={-300}
				max={300}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
			<RangeControl
				label={__("Translate Y", "gsap-title-animation")}
				value={offsetY}
				onChange={(value) => setAttributes({ offsetY: value })}
				min={-300}
				max={300}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
			<RangeControl
				label={__("Duration (sec)", "gsap-title-animation")}
				value={duration}
				onChange={(value) => setAttributes({ duration: value })}
				min={0.1}
				max={5}
				step={0.1}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
			<RangeControl
				label={__("Delay (sec)", "gsap-title-animation")}
				value={delay}
				onChange={(value) => setAttributes({ delay: value })}
				min={0}
				max={5}
				step={0.1}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
			/>
			<SelectControl
				label={__("Easing", "gsap-title-animation")}
				value={easing}
				onChange={(value) => setAttributes({ easing: value })}
				__nextHasNoMarginBottom={true}
				__next40pxDefaultSize={true}
				options={[
					{ label: "Power2 Out", value: "power2.out" },
					{ label: "Power1 InOut", value: "power1.inOut" },
					{ label: "Linear", value: "linear" },
					{ label: "Back Out", value: "back.out(1.7)" },
					{ label: "Elastic Out", value: "elastic.out(1, 0.3)" },
				]}
			/>
			<ToggleControl
				label={__("Enable SplitText", "gsap-title-animation")}
				checked={splitTextEnabled}
				onChange={(val) => setAttributes({ splitTextEnabled: val })}
			/>

			{splitTextEnabled && (
				<SelectControl
					label={__("Split By", "gsap-title-animation")}
					value={splitType}
					options={[
						{ label: "Characters", value: "chars" },
						{ label: "Words", value: "words" },
						{ label: "Lines", value: "lines" },
					]}
					onChange={(value) => {
						setAttributes({
							splitType: value,
						});
					}}
					__nextHasNoMarginBottom={true}
					__next40pxDefaultSize={true}
				/>
			)}
		</PanelBody>
	);
}
