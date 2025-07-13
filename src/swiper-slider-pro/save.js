import { useBlockProps } from "@wordpress/block-editor";

function save({ attributes }) {
	const { slides, sliderHeight } = attributes;
	return (
		<section
			{...useBlockProps.save({
				className: "tm-slider creative-conference creative-conference__slider",
			})}
		>
			<div className="swiper-wrapper">
				{slides.map((slide, index) => (
					<div className="swiper-slide" key={index}>
						<div
							className="creative-conference__wrapper parallax-item"
							style={{ minHeight: sliderHeight || "100vh" }}
						>
							<img
								src={slide.image}
								className="creative-conference__img"
								alt="..."
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
										<img className="speaker__img" src={slide.image} alt="..." />
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
					</div>
				))}
			</div>

			<div className="cc__slider--controller">
				<div className="cc__slider__prve--btn">
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
export default save;
