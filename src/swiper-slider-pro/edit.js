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
import { useRef } from "@wordpress/element";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper/modules";

import PaddingControl from "./components/PaddingControl";
import CustomRangeControl from "./components/CustomRangeControl";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { slides = [], sliderHeight = "100vh" } = attributes;

	const swiperRef = useRef(null);

	const extractNumber = (val) => {
		if (!val) return 0;
		return parseFloat(val.toString().replace(/[^\d.]/g, "")) || 0;
	};

	const addUnit = (num, unit) => {
		return num !== undefined && num !== null ? `${num}${unit}` : "";
	};

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
			lineHeight: "100%",
			fontSize: "36px",
			maxWidth: "950px",
			padding: {
				top: "0px",
				right: "0px",
				bottom: "0px",
				left: "0px",
			},
		};
		setAttributes({ slides: [...slides, newSlide] });
	};

	const removeSlide = (index) => {
		const newSlides = slides.filter((_, i) => i !== index);
		setAttributes({ slides: newSlides });
	};

	const updateAllSliderHeight = (val) => {
		setAttributes({ sliderHeight: val });
	};

	const blockProps = useBlockProps({
		className: "tm-slider creative-conference creative-conference__slider",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Slides", "text-domain")}>
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
								label={__("Title 1", "text-domain")}
								value={slide.title1}
								onChange={(val) => updateSlide(index, "title1", val)}
							/>
							<TextControl
								label={__("Title 2", "text-domain")}
								value={slide.title2}
								onChange={(val) => updateSlide(index, "title2", val)}
							/>
							<TextControl
								label={__("Speaker Name", "text-domain")}
								value={slide.speakerName}
								onChange={(val) => updateSlide(index, "speakerName", val)}
							/>
							<TextControl
								label={__("Speaker Role", "text-domain")}
								value={slide.speakerRole}
								onChange={(val) => updateSlide(index, "speakerRole", val)}
							/>
							<TextControl
								label={__("Location", "text-domain")}
								value={slide.location}
								onChange={(val) => updateSlide(index, "location", val)}
							/>
							<TextControl
								label={__("Time", "text-domain")}
								value={slide.datetime}
								onChange={(val) => updateSlide(index, "datetime", val)}
							/>

							{/*Max Width RangeControl (number in px) */}
							<CustomRangeControl
								label={__("Content Max Width", "text-domain")}
								value={slide.maxWidth}
								onChange={(val) => updateSlide(index, "maxWidth", val)}
							/>

							{/* Slider Height controls all slides */}
							<CustomRangeControl
								label={__("Slider Height (px)", "text-domain")}
								value={sliderHeight}
								onChange={updateAllSliderHeight}
							/>

							{/* Font Size RangeControl (number in px) */}
							<RangeControl
								label={__("Font Size (px)", "text-domain")}
								min={10}
								max={250}
								value={extractNumber(slide.fontSize)}
								onChange={(val) =>
									updateSlide(index, "fontSize", addUnit(val, "px"))
								}
							/>

							{/* Line Height RangeControl (number in %) */}
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
								value={
									slide.padding || {
										top: "0px",
										right: "0px",
										bottom: "0px",
										left: "0px",
									}
								}
								onChange={(val) => updateSlide(index, "padding", val)}
							/>

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
				<Swiper
					speed={1000}
					loop={true}
					slidesPerView="auto"
					modules={[Parallax, Pagination]}
					allowTouchMove={false}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
						setTimeout(() => swiper.update(), 100);
					}}
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<div
								className="creative-conference__wrapper"
								style={{ minHeight: sliderHeight || "100vh" }}
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
											maxWidth: slide?.maxWidth || "100%",
											padding: `${slide.padding?.top || "0px"} ${
												slide.padding?.right || "0px"
											} ${slide.padding?.bottom || "0px"} ${
												slide.padding?.left || "0px"
											}`,
										}}
									>
										<h1
											className="creative-conference__title anim-line-words home-intro__highlight"
											style={{
												lineHeight: slide.lineHeight || "100%",
												fontSize: slide.fontSize || "36px",
											}}
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
