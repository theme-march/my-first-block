import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import { useRef } from "@wordpress/element";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper/modules";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { slides = [] } = attributes;

	const swiperRef = useRef(null);

	// Slide update handlers
	const updateSlide = (index, key, value) => {
		const newSlides = [...slides];
		newSlides[index][key] = value;
		setAttributes({ slides: newSlides });
	};

	const addSlide = () => {
		const newSlide = {
			title1: "Title One",
			title2: "Subtitle",
			speakerName: "Speaker",
			speakerRole: "Role",
			location: "Venue",
			datetime: "10:00 AM",
			image: "",
		};
		setAttributes({ slides: [...slides, newSlide] });
	};

	const removeSlide = (index) => {
		const newSlides = slides.filter((_, i) => i !== index);
		setAttributes({ slides: newSlides });
	};

	const blockProps = useBlockProps({
		className: "tm-slider creative-conference creative-conference__slider",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title="Slides">
					{slides.map((slide, index) => (
						<div
							key={index}
							style={{
								marginBottom: "10px",
								borderBottom: "1px solid #ccc",
								paddingBottom: "10px",
							}}
						>
							<h5>{`Slide ${index + 1}`}</h5>
							<TextControl
								label={`Title 1 (Slide ${index + 1})`}
								value={slide.title1}
								onChange={(val) => updateSlide(index, "title1", val)}
							/>
							<TextControl
								label="Title 2"
								value={slide.title2}
								onChange={(val) => updateSlide(index, "title2", val)}
							/>
							<TextControl
								label="Speaker Name"
								value={slide.speakerName}
								onChange={(val) => updateSlide(index, "speakerName", val)}
							/>
							<TextControl
								label="Speaker Role"
								value={slide.speakerRole}
								onChange={(val) => updateSlide(index, "speakerRole", val)}
							/>
							<TextControl
								label="Location"
								value={slide.location}
								onChange={(val) => updateSlide(index, "location", val)}
							/>
							<TextControl
								label="Time"
								value={slide.datetime}
								onChange={(val) => updateSlide(index, "datetime", val)}
							/>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => updateSlide(index, "image", media.url)}
									allowedTypes={["image"]}
									render={({ open }) => (
										<Button variant="secondary" onClick={open}>
											{slide.image ? "Replace Image" : "Upload Image"}
										</Button>
									)}
								/>
							</MediaUploadCheck>
							<Button
								isDestructive
								onClick={() => removeSlide(index)}
								style={{ marginTop: "10px" }}
							>
								Remove Slide
							</Button>
						</div>
					))}
					<Button isPrimary onClick={addSlide}>
						Add New Slide
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<Swiper
					speed={1000}
					loop={true}
					slidesPerView="auto"
					modules={[Parallax, Pagination]}
					allowTouchMove={false} // ❌ Mouse/touch swipe disabled
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
						setTimeout(() => swiper.update(), 100); // delay update
					}}
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="creative-conference__wrapper">
								<img
									src={slide.image}
									className="creative-conference__img"
									alt=""
								/>
								<div className="container container-customizes">
									<div className="creative-conference__content">
										<h1 className="creative-conference__title anim-line-words home-intro__highlight">
											<span className="home-intro__highlight-word">
												{slide.title1}
											</span>
											<span className="home-intro__highlight-word small-text">
												{slide.title2}
											</span>
										</h1>
										<div className="creative-conference__speaker">
											<img className="speaker__img" src={slide.image} alt="" />
											<div className="speaker__content">
												<div className="speaker__inner-text anim-line-words">
													UPCOMING
												</div>
												<h6 className="speaker__name">{slide.speakerName}</h6>
												<p className="speaker__desp">{slide.speakerRole}</p>
											</div>
										</div>
										<div className="creative-conference__datetime">
											<p className="datetime_desp">{slide.location}</p>
											<div className="datetime__content">
												<p className="datetime__name">Mar 25</p>
												<h6 className="datetime__desp">{slide.datetime}</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="cc__slider--controller">
					<div
						className="cc__slider__prev--btn"
						onClick={() => swiperRef.current?.slidePrev()}
					>
						<div className="dotshape"></div>
						<h6 className="text">PREV</h6>
					</div>
					<div
						className="cc__slider__next--btn"
						onClick={() => swiperRef.current?.slideNext()}
					>
						<div className="dotshape"></div>
						<h6 className="text">NEXT</h6>
					</div>
				</div>
			</div>
		</>
	);
}
