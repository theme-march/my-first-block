import { PanelBody, ToggleControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function SplitTextSettings({ attributes, setAttributes }) {
	const { splitTextEnabled = false, splitType = "chars" } = attributes;

	// Determine current selected type

	return (
		<PanelBody
			title={__("🔠 SplitText Settings", "gsap-title-animation")}
			initialOpen={true}
		>
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
