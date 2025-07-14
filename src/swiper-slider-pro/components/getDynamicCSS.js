export const getSlideClassName = (index, clientId) =>
	`accordion-child-${clientId?.slice(0, 8)}-${index}`;

export const getAllSlideCSS = (slides = [], clientId) => {
	return slides
		.map((slide, index) => {
			const slideClass = getSlideClassName(index, clientId);
			return `
				.${slideClass} .zolo-accordion-head-title {
					font-size: ${slide?.fontSize?.desktop || "36px"};
				}
				@media (max-width: 1024px) {
					.${slideClass} .zolo-accordion-head-title {
						font-size: ${slide?.fontSize?.tablet || "28px"};
					}
				}
				@media (max-width: 767px) {
					.${slideClass} .zolo-accordion-head-title {
						font-size: ${slide?.fontSize?.mobile || "22px"};
					}
				}
			`;
		})
		.join("\n");
};
