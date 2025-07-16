import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		slides = [],
		sliderHeight = "100vh",
		customCss = "",
		unId = "",
	} = attributes;

	return (
		<section
			{...useBlockProps.save({
				className: "tm-slider creative-conference creative-conference__slider",
			})}
		>
			{/* Dynamic CSS for responsive typography */}
			{customCss && <style>{customCss}</style>}

			<div className="swiper-wrapper">
				{slides.map((slide, index) => {
					const {
						image,
						title1,
						title2,
						speakerName,
						speakerRole,
						location,
						datetime,
						maxWidth,
						lineHeight,
						padding = {},
					} = slide;

					const slideClass = `swiper-slide slider-${index}-${unId}`;

					return (
						<div className={slideClass} key={index}>
							<div
								className="creative-conference__wrapper parallax-item"
								style={{ minHeight: sliderHeight }}
							>
								{image && (
									<img
										src={image}
										className="creative-conference__img"
										alt="Slide background"
									/>
								)}

								<div className="container container-customizes">
									<div
										className="creative-conference__content"
										style={{
											maxWidth: maxWidth || "100%",
											padding: `${padding.top || "0px"} ${
												padding.right || "0px"
											} ${padding.bottom || "0px"} ${padding.left || "0px"}`,
										}}
									>
										{/* Slide Title */}
										<h1
											className="creative-conference__title anim-line-words home-intro__highlight zolo-accordion-head-title"
											style={{ lineHeight: lineHeight || "100%" }}
										>
											{title1 && (
												<span className="home-intro__highlight-word">
													{title1}
												</span>
											)}
											<br />
											{title2 && (
												<span className="home-intro__highlight-word small-text">
													{title2}
												</span>
											)}
										</h1>

										{/* Speaker Info */}
										<div className="creative-conference__speaker">
											{image && (
												<img
													className="speaker__img"
													src={image}
													alt="Speaker"
												/>
											)}
											<div className="speaker__content">
												<div className="speaker__inner-text anim-line-words">
													UPCOMING
												</div>
												<h6 className="speaker__name">{speakerName}</h6>
												<p className="speaker__desp">{speakerRole}</p>
											</div>
										</div>

										{/* Location & Date */}
										<div className="creative-conference__datetime">
											<p className="datetime_desp">{location}</p>
											<div className="datetime__content">
												<p className="datetime__name">Mar 25</p>
												<h6 className="datetime__desp">{datetime}</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Navigation Buttons */}
			<div className="cc__slider--controller">
				<div className="cc__slider__prev--btn">
					<div className="dotshape"></div>
					<h6 className="text">PREV</h6>
				</div>
				<div className="cc__slider__next--btn">
					<div className="dotshape"></div>
					<h6 className="text">NEXT</h6>
				</div>
			</div>
		</section>
	);
}
