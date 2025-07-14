import { useSelect } from "@wordpress/data";

export default function useDeviceType() {
	const device = useSelect(
		(select) =>
			select("core/edit-post")?.__experimentalGetPreviewDeviceType?.() ||
			"Desktop",
		[],
	);
	return device.toLowerCase(); // 'desktop' / 'tablet' / 'mobile'
}
