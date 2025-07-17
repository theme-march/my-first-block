import { useSelect } from "@wordpress/data";

export default function useDeviceType() {
	const device = useSelect((select) => {
		const editSite = select("core/edit-site");
		const editPost = select("core/edit-post");
		return (
			editSite?.__experimentalGetPreviewDeviceType?.() ||
			editPost?.__experimentalGetPreviewDeviceType?.() ||
			"Desktop"
		);
	}, []);

	return device.toLowerCase(); // desktop, tablet, mobile
}
