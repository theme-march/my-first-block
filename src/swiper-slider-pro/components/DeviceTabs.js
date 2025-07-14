import { __ } from "@wordpress/i18n";
import { ButtonGroup, Button } from "@wordpress/components";

export default function DeviceTabs({ device, setDevice }) {
	const devices = [
		{ label: __("Desktop", "text-domain"), value: "desktop" },
		{ label: __("Tablet", "text-domain"), value: "tablet" },
		{ label: __("Mobile", "text-domain"), value: "mobile" },
	];

	return (
		<div className="zolo-device-tabs" style={{ marginBottom: "10px" }}>
			<ButtonGroup>
				{devices.map((d) => (
					<Button
						isPrimary={device === d.value}
						isSecondary={device !== d.value}
						key={d.value}
						onClick={() => setDevice(d.value)}
					>
						{d.label}
					</Button>
				))}
			</ButtonGroup>
		</div>
	);
}
