import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	TextControl,
	RangeControl,
} from "@wordpress/components";
import { useRef, useMemo, useCallback } from "@wordpress/element";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper/modules";

import PaddingControl from "./components/PaddingControl";
import CustomRangeControl from "./components/CustomRangeControl";
import useDeviceType from "./hooks/useDeviceType";

// Helpers
const extractNumber = (val) =>
	parseFloat(val?.toString().replace(/[^\d.]/g, "")) || 0;

const addUnit = (num, unit) =>
	num !== undefined && num !== null ? `${num}${unit}` : "";

const defaultSlide = () => ({
	title1: "Title One",
	title2: "Subtitle",
	speakerName: "Speaker Name",
	speakerRole: "Speaker Role",
	location: "Venue",
	datetime: "10:00 AM",
	image: "",
	lineHeight: "100%",
	maxWidth: "950px",
	fontSize: {
		desktop: "36px",
		tablet: "28px",
		mobile: "22px",
	},
	padding: {
		top: "0px",
		right: "0px",
		bottom: "0px",
		left: "0px",
	},
	customCss: "",
	unId: "",
});

export default function Edit({ attributes, setAttributes, clientId }) {
	const { slides = [], sliderHeight = "100vh" } = attributes;

	const swiperRef = useRef(null);
	const device = useDeviceType();

	// Update slide content
	const updateSlide = useCallback(
		(index, key, value) => {
			const newSlides = [...slides];
			newSlides[index] = { ...newSlides[index], [key]: value };
			setAttributes({ slides: newSlides });
		},
		[slides, setAttributes],
	);

	// Add a new slide
	const addSlide = () => setAttributes({ slides: [...slides, defaultSlide()] });

	// Remove a slide
	const removeSlide = (index) =>
		setAttributes({ slides: slides.filter((_, i) => i !== index) });

	// Set slider height
	const updateSliderHeight = (val) => setAttributes({ sliderHeight: val });

	// Block props
	const blockProps = useBlockProps({
		className: "tm-slider creative-conference creative-conference__slider",
	});

	// Generate Dynamic CSS
	const allSlideCSS = useMemo(() => {
		const css = slides
			.map((slide, index) => {
				const className = `slider-${index}-${clientId}`;
				return `
				.${className} .zolo-accordion-head-title {
					font-size: ${slide.fontSize?.desktop};
				}
				@media (max-width: 1024px) {
					.${className} .zolo-accordion-head-title {
						font-size: ${slide.fontSize?.tablet};
					}
				}
				@media (max-width: 767px) {
					.${className} .zolo-accordion-head-title {
						font-size: ${slide.fontSize?.mobile};
					}
				}`;
			})
			.join("\n");

		setAttributes({ customCss: css, unId: clientId });
		return css;
	}, [slides, clientId, setAttributes]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Slides", "text-domain")} initialOpen={true}>
					{slides.map((slide, index) => (
						<div key={index} className="zolo-slide-panel">
							<h4>{`Slide ${index + 1}`}</h4>

							{/* Text Fields */}
							{[
								"title1",
								"title2",
								"speakerName",
								"speakerRole",
								"location",
								"datetime",
							].map((field) => (
								<TextControl
									key={field}
									label={__(field.replace(/([A-Z])/g, " $1"), "text-domain")}
									value={slide[field]}
									onChange={(val) => updateSlide(index, field, val)}
								/>
							))}

							{/* Controls */}
							<CustomRangeControl
								label={__("Content Max Width (px)", "text-domain")}
								value={slide.maxWidth}
								onChange={(val) => updateSlide(index, "maxWidth", val)}
							/>

							<CustomRangeControl
								label={__("Slider Height (px)", "text-domain")}
								value={sliderHeight}
								onChange={updateSliderHeight}
							/>

							<RangeControl
								label={`Font Size (${device})`}
								min={10}
								max={250}
								value={extractNumber(slide.fontSize?.[device])}
								onChange={(val) =>
									updateSlide(index, "fontSize", {
										...slide.fontSize,
										[device]: `${val}px`,
									})
								}
							/>

							<RangeControl
								label={__("Line Height (%)", "text-domain")}
								min={50}
								max={300}
								value={extractNumber(slide.lineHeight)}
								onChange={(val) =>
									updateSlide(index, "lineHeight", addUnit(val, "%"))
								}
							/>

							<PaddingControl
								label={__("Padding (Top, Right, Bottom, Left)", "text-domain")}
								value={slide.padding}
								onChange={(val) => updateSlide(index, "padding", val)}
							/>

							{/* Image Upload */}
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => updateSlide(index, "image", media.url)}
									allowedTypes={["image"]}
									render={({ open }) => (
										<Button variant="secondary" onClick={open}>
											{slide.image
												? __("Replace Image", "text-domain")
												: __("Upload Image", "text-domain")}
										</Button>
									)}
								/>
							</MediaUploadCheck>

							<Button
								isDestructive
								onClick={() => removeSlide(index)}
								style={{ marginTop: "10px" }}
							>
								{__("Remove Slide", "text-domain")}
							</Button>
						</div>
					))}

					<Button isPrimary onClick={addSlide}>
						{__("Add New Slide", "text-domain")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<style>{allSlideCSS}</style>

				<Swiper
					speed={1000}
					loop
					slidesPerView="auto"
					modules={[Parallax, Pagination]}
					allowTouchMove={false}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
						setTimeout(() => swiper.update(), 100);
					}}
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index} className={`slider-${index}-${clientId}`}>
							<div
								className="creative-conference__wrapper"
								style={{ minHeight: sliderHeight }}
							>
								<img
									src={slide.image}
									className="creative-conference__img"
									alt=""
								/>
								<div className="container container-customizes">
									<div
										className="creative-conference__content"
										style={{
											maxWidth: slide.maxWidth,
											padding: `${slide.padding?.top} ${slide.padding?.right} ${slide.padding?.bottom} ${slide.padding?.left}`,
										}}
									>
										<h1
											className="creative-conference__title anim-line-words home-intro__highlight zolo-accordion-head-title"
											style={{ lineHeight: slide.lineHeight }}
										>
											<span className="home-intro__highlight-word">
												{slide.title1}
											</span>
											<br />
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

				{/* Slider Controller */}
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
