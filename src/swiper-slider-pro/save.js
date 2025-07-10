import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { slides } = attributes;

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
							data-swiper-parallax="800"
						>
							<img
								src={slide.image}
								className="creative-conference__img"
								alt="..."
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
							<div className="cc__slider--btn">
								<a href="events-details.html" className="zigzag__btn">
									<div className="zigzag__btn--text">
										<span>Get</span>
										<span className="zigzag__btn--icon">
											<i className="flaticon-right-arrow"></i>
										</span>
										<span> Ticket</span>
									</div>
								</a>
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

			<div
				className="cc_contact--bar"
				data-src="assets/img/hero/contact-bar.png"
			>
				<div className="cc_contact--bar__socialtext left-border">
					<p>Social: FB . IN . TW. DR</p>
				</div>
				<div className="cc_contact--bar__number left-border">
					<a href="tel:+14168241228">+1-416-8241228</a>
				</div>
				<div className="cc_contact--bar__email left-border">
					<a href="mailto:Info@daevnt.org.world">Info@daevnt.org.world</a>
				</div>
			</div>
		</section>
	);
}
