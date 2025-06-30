import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ Counter animation init
function initCounters() {
	const counters = document.querySelectorAll(".counter:not(.animated)");

	counters.forEach((counter) => {
		const fullText = counter.dataset.target || counter.innerText.trim();
		const match = fullText.match(/^(\d+)(.*)$/);
		const numberPart = match ? parseInt(match[1]) : 0;
		const suffixPart = match?.[2] || "";

		counter.classList.add("animated"); // prevent double animation

		// Inject structured span for animation + static suffix
		counter.innerHTML = `
			<span class="count-value">0</span>
			<span class="suffix">${suffixPart}</span>
		`;

		const valueEl = counter.querySelector(".count-value");

		gsap.to(valueEl, {
			textContent: numberPart,
			duration: 2,
			scrollTrigger: {
				trigger: counter,
				start: "top 90%",
				toggleActions: "play none none none",
			},
			snap: { textContent: 1 },
			ease: "power1.out",
		});
	});
}

// ✅ Fade-in animation init
function initFadeIn() {
	const items = document.querySelectorAll(
		".funfact-content__item:not(.fade-initialized)",
	);

	items.forEach((item, index) => {
		item.classList.add("fade-initialized"); // avoid re-animating

		gsap.from(item, {
			y: 70,
			opacity: 0,
			duration: 0.8,
			delay: index * 0.2,
			scrollTrigger: {
				trigger: item,
				start: "top 90%",
				toggleActions: "play none none none",
			},
			ease: "power2.out",
		});
	});
}

// ✅ Observe for new elements (e.g., after "Add New" in editor or AJAX load)
function observeDOMChanges() {
	const observer = new MutationObserver(() => {
		initCounters();
		initFadeIn();
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
}

// ✅ Main entry
document.addEventListener("DOMContentLoaded", () => {
	initCounters();
	initFadeIn();
	observeDOMChanges();
});
