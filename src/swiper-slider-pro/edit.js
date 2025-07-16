import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, Button, RangeControl } from "@wordpress/components";
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
	titleColor: "#000000",
	speakerNameColor: "#000000",
	speakerRoleColor: "#000000",
	locationColor: "#000000",
	datetimeColor: "#000000",
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
	const addSlide = useCallback(() => {
		setAttributes({ slides: [...slides, defaultSlide()] });
	}, [slides, setAttributes]);

	// Remove a slide
	const removeSlide = useCallback(
		(index) => {
			setAttributes({ slides: slides.filter((_, i) => i !== index) });
		},
		[slides, setAttributes],
	);

	// Update slider height
	const updateSliderHeight = useCallback(
		(val) => setAttributes({ sliderHeight: val }),
		[setAttributes],
	);

	// Generate Dynamic CSS for font sizes
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

	const blockProps = useBlockProps({
		className: "tm-slider creative-conference creative-conference__slider",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Slides", "text-domain")} initialOpen={true}>
					{slides.map((slide, index) => (
						<div key={index} className="zolo-slide-panel">
							<h4>{`Slide ${index + 1}`}</h4>

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
							<PanelColorSettings
								title={__("Text Colors", "text-domain")}
								initialOpen={false}
								colorSettings={[
									{
										label: __("Title Color"),
										value: slide.titleColor,
										onChange: (color) =>
											updateSlide(index, "titleColor", color),
									},
									{
										label: __("Speaker Name Color"),
										value: slide.speakerNameColor,
										onChange: (color) =>
											updateSlide(index, "speakerNameColor", color),
									},
									{
										label: __("Speaker Role Color"),
										value: slide.speakerRoleColor,
										onChange: (color) =>
											updateSlide(index, "speakerRoleColor", color),
									},
									{
										label: __("Location Color"),
										value: slide.locationColor,
										onChange: (color) =>
											updateSlide(index, "locationColor", color),
									},
									{
										label: __("Datetime Color"),
										value: slide.datetimeColor,
										onChange: (color) =>
											updateSlide(index, "datetimeColor", color),
									},
								]}
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
										{/* Title with RichText and multiline support */}
										<RichText
											tagName="h1"
											className="creative-conference__title anim-line-words home-intro__highlight zolo-accordion-head-title"
											style={{
												lineHeight: slide.lineHeight,
												color: slide.titleColor,
											}}
											value={slide.title1}
											onChange={(val) => {
												updateSlide(index, "title1", val);
											}}
										/>

										<div className="creative-conference__speaker">
											<img className="speaker__img" src={slide.image} alt="" />
											<div className="speaker__content">
												<div className="speaker__inner-text anim-line-words">
													UPCOMING
												</div>
												<RichText
													tagName="h6"
													className="speaker_name"
													style={{ color: slide.speakerNameColor }}
													value={slide.speakerName}
													onChange={(val) =>
														updateSlide(index, "speakerName", val)
													}
												/>
											</div>
										</div>

										<div className="creative-conference__datetime">
											<RichText
												tagName="p"
												className="datetime_desp"
												style={{ color: slide.locationColor }}
												value={slide.location}
												onChange={(val) => updateSlide(index, "location", val)}
											/>
											<div
												className="datetime__content"
												style={{ color: slide.datetimeColor }}
											>
												<RichText
													tagName="h6"
													className="datetime__desp"
													value={slide.datetime}
													onChange={(val) =>
														updateSlide(index, "datetime", val)
													}
												/>
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
