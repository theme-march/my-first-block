import { useBlockProps } from "@wordpress/block-editor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Edit({ attributes }) {
	const { slides = [] } = attributes;

	return (
		<div {...useBlockProps()}>
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={20}
				slidesPerView={1}
				loop={true}
				navigation
				pagination={{ clickable: true }}
				style={{ height: "300px" }}
			>
				{slides.length ? (
					slides.map((slide, i) => (
						<SwiperSlide key={i}>
							<img
								src={slide.imageUrl}
								alt={slide.title}
								style={{ width: "100%" }}
							/>
							<h3>{slide.title}</h3>
						</SwiperSlide>
					))
				) : (
					<SwiperSlide>
						<p>Sample Slide - Add slides from settings.</p>
					</SwiperSlide>
				)}
			</Swiper>
		</div>
	);
}
