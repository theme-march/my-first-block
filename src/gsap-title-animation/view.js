// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function runAnimation(item) {
// 	if (item.classList.contains("fade-initialized")) return;

// 	item.classList.add("fade-initialized");

// 	const x = parseFloat(item.dataset.x) || 0;
// 	const y = parseFloat(item.dataset.y) || 0;
// 	const duration = parseFloat(item.dataset.duration) || 0.8;
// 	const delay = parseFloat(item.dataset.delay) || 0;
// 	const ease = item.dataset.easing || "power2.out";

// 	let props = {
// 		opacity: 0,
// 		x,
// 		y,
// 		duration,
// 		delay,
// 		ease,
// 	};

// 	gsap.from(item, {
// 		...props,
// 		scrollTrigger: {
// 			trigger: item,
// 			start: "top 90%",
// 			toggleActions: "play none none none",
// 		},
// 	});
// }

// function initAnimation() {
// 	const items = document.querySelectorAll(
// 		".gsap-title-animation:not(.fade-initialized)",
// 	);

// 	items.forEach((item) => {
// 		runAnimation(item);
// 	});
// }

// document.addEventListener("DOMContentLoaded", initAnimation);
/**
 * Production-ready GSAP scroll animation for Gutenberg block
 * Features:
 * - Efficient: uses requestIdleCallback or fallback
 * - Clean: no memory leaks (no MutationObserver)
 * - Reusable: supports any block with .gsap-title-animation class
 */

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// ✅ Register plugin once
gsap.registerPlugin(ScrollTrigger);

/**
 * Utility function to safely extract dataset values
 * Returns fallback if not set or invalid
 */
const getData = (el, key, fallback = 0) => {
	const value = el.dataset?.[key];
	if (value === undefined || value === null) return fallback;
	return isNaN(value) ? value : parseFloat(value);
};

/**
 * Animates a single element with GSAP & ScrollTrigger
 */
const animateElement = (el) => {
	if (!el || el.classList.contains("fade-initialized")) return;

	el.classList.add("fade-initialized");

	const x = getData(el, "x", 0);
	const y = getData(el, "y", 0);
	const duration = getData(el, "duration", 0.8);
	const delay = getData(el, "delay", 0);
	const easing = getData(el, "easing", "power2.out");

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
			markers: true,
		},
	});
};

/**
 * Initialize animations for all uninitialized blocks
 */
const initGSAPAnimations = () => {
	const elements = document.querySelectorAll(
		".gsap-title-animation:not(.fade-initialized)",
	);

	const run = () => elements.forEach(animateElement);

	// Use browser idle time if available
	if ("requestIdleCallback" in window) {
		requestIdleCallback(run);
		console.log("GSAP animations initialized using requestIdleCallback");
	} else {
		setTimeout(run, 100); // Fallback
		console.log("GSAP animations initialized using setTimeout fallback");
	}
};

/**
 * Entry point on DOM load
 */
document.addEventListener("DOMContentLoaded", initGSAPAnimations);
