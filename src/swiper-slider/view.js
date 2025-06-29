import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
	"Slide 1",
	"Slide 2",
	"Slide 3",
	"Slide 4",
	"Slide 5",
	"Slide 6",
	"Slide 7",
	"Slide 8",
	"Slide 9",
];

function CounterFrontend() {
	return (
		<Swiper
			className="mySwiper"
			style={{ width: "100%", height: "300px" }}
			modules={[Navigation, Pagination]}
			spaceBetween={30}
			slidesPerView={1}
			loop={true}
			pagination={{ clickable: true }}
			navigation
		>
			{slides.map((text, index) => (
				<SwiperSlide key={index}>
					<div
						style={{
							background: "#eee",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "20px",
						}}
					>
						{text}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

document.addEventListener("DOMContentLoaded", () => {
	const containers = document.querySelectorAll(
		".wp-block-create-block-swiper-slider",
	);
	containers.forEach((container) => {
		const root = createRoot(container);
		root.render(<CounterFrontend />);
	});
});
