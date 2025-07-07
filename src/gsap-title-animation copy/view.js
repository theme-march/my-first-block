import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"; // Club GreenSock access required

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * ✅ Utility: Safe dataset value extractor
 */
const getData = (el, key, fallback = 0) => {
	const val = el.dataset?.[key];
	if (val === undefined || val === null) return fallback;
	return isNaN(val) ? val : parseFloat(val);
};

/**
 * ✅ Animate a single element with or without SplitText
 */
const animateElement = (el) => {
	if (!el || el.classList.contains("fade-initialized")) return;
	el.classList.add("fade-initialized");

	const shouldSplit = el.dataset.split === "true";
	const splitType = (el.dataset.splittype || "chars").toLowerCase(); // fallback to "chars"
	const x = getData(el, "x", 0);
	const y = getData(el, "y", 0);
	const duration = getData(el, "duration", 0.8);
	const delay = getData(el, "delay", 0);
	const easing = el.dataset.easing || "power2.out";

	if (shouldSplit && typeof SplitText === "function") {
		const split = new SplitText(el, { type: splitType });

		let target;
		switch (splitType) {
			case "words":
				target = split.words;
				break;
			case "lines":
				target = split.lines;
				break;
			case "chars":
			default:
				target = split.chars;
				break;
		}

		gsap.set(el, { perspective: 400 });

		gsap.from(target, {
			opacity: 0,
			x,
			y,
			duration,
			delay,
			ease: easing,
			stagger: 0.03,
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play none none none",
				once: true,
			},
			onComplete: () => {
				if (typeof split.revert === "function") split.revert();
			},
		});
	} else {
		gsap.from(el, {
			opacity: 0,
			x,
			y,
			duration,
			delay,
			ease: easing,
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play none none none",
				once: true,
			},
		});
	}
};

/**
 * ✅ Initialize all matching elements
 */
const initGSAPAnimations = () => {
	const elements = document.querySelectorAll(
		".gsap-title-animation:not(.fade-initialized)",
	);
	const run = () => elements.forEach(animateElement);

	if ("requestIdleCallback" in window) {
		requestIdleCallback(run);
		console.log("✅ GSAP animations initialized via requestIdleCallback");
	} else {
		setTimeout(run, 100);
		console.log("✅ GSAP animations initialized via setTimeout");
	}
};

document.addEventListener("DOMContentLoaded", initGSAPAnimations);
