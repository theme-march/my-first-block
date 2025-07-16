// save.js
import { useBlockProps, RichText } from "@wordpress/block-editor";

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
			{customCss && <style>{customCss}</style>}

			<div className="swiper-wrapper">
				{slides.map((slide, index) => {
					const {
						title1,
						image,
						speakerName,
						location,
						datetime,
						maxWidth,
						lineHeight,
						padding = {},
						titleColor,
						speakerNameColor,
						locationColor,
						datetimeColor,
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
										<h1
											className="creative-conference__title anim-line-words home-intro__highlight zolo-accordion-head-title"
											style={{
												lineHeight: lineHeight || "100%",
												color: titleColor,
											}}
										>
											{title1 && (
												<RichText.Content
													tagName="span"
													className="home-intro__highlight-word"
													value={title1}
												></RichText.Content>
											)}
										</h1>

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
												<RichText.Content
													tagName="h6"
													className="speaker__name"
													value={speakerName}
													style={{ color: speakerNameColor }}
												/>
											</div>
										</div>

										<div className="creative-conference__datetime">
											<RichText.Content
												tagName="p"
												className="datetime_desp"
												value={location}
												style={{ color: locationColor }}
											/>
											<div
												className="datetime__content"
												style={{ color: datetimeColor }}
											>
												<RichText.Content
													tagName="h6"
													className="datetime__desp"
													value={datetime}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>

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
