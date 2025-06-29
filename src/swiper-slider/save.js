import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { slides = [] } = attributes;

	return (
		<div {...useBlockProps()} className="swiper my-swiper-container">
			<div className="swiper-wrapper">
				{slides.map((slide, i) => (
					<div className="swiper-slide" key={i}>
						<img src={slide.imageUrl} alt={slide.title} />
						<h3>{slide.title}</h3>
					</div>
				))}
			</div>
			<div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div>
			<div className="swiper-pagination"></div>
		</div>
	);
}
