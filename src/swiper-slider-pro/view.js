import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Swiper from "swiper";

document.querySelectorAll(".creative-conference__slider").forEach((slider) => {
	const swiper = new Swiper(slider, {
		loop: true,
		speed: 1200,
		parallax: true,
		watchSlidesProgress: true,
		slidesPerView: 1,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: slider.querySelector(".cc__slider__next--btn"),
			prevEl: slider.querySelector(".cc__slider__prve--btn"),
		},
		on: {
			init() {
				runSlideAnimation(slider);
			},
			slideChangeTransitionStart() {
				runSlideAnimation(slider);
			},
		},
	});

	function runSlideAnimation(scope) {
		const active = scope.querySelector(
			".swiper-slide-active .creative-conference__wrapper",
		);
		if (!active) return;

		const tl = gsap.timeline();
		const words = active.querySelectorAll(".home-intro__highlight-word");
		const [word1, word2] = [...words].map(
			(el) => new SplitText(el, { type: "chars" }),
		);

		tl.from([word1.chars, word2.chars], {
			rotateX: 50,
			opacity: 0,
			x: 20,
			duration: 0.85,
			stagger: 0.075,
			ease: "power3.inOut",
		});

		tl.from(
			active.querySelectorAll(
				".speaker__img, .speaker__name, .speaker__desp, .creative-conference__datetime",
			),
			{
				opacity: 0,
				y: 10,
				duration: 0.6,
				stagger: 0.2,
				ease: "power1.inOut",
			},
			"-=1.2",
		);
	}
});
console.log("view page page");
