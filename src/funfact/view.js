import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ Counter animation init
function initCounters() {
	const counters = document.querySelectorAll(".counter:not(.animated)");

	counters.forEach((counter) => {
		// Recursively find the deepest text node inside the counter
		const walker = document.createTreeWalker(
			counter,
			NodeFilter.SHOW_TEXT,
			null,
			false,
		);

		let targetTextNode = null;
		while (walker.nextNode()) {
			const text = walker.currentNode.textContent.trim();
			if (/^\d+/.test(text)) {
				targetTextNode = walker.currentNode;
				break;
			}
		}

		if (!targetTextNode) return;

		const rawText = targetTextNode.textContent.trim();
		const match = rawText.match(/^(\d+)(.*)$/);
		if (!match) return;

		const numberPart = parseInt(match[1]);
		const suffixPart = match[2] || "";

		counter.classList.add("animated");

		// Animate number inside text node
		gsap.to(
			{ val: 0 },
			{
				val: numberPart,
				duration: 2,
				ease: "power1.out",
				scrollTrigger: {
					trigger: counter,
					start: "top 90%",
					toggleActions: "play none none none",
				},
				snap: { val: 1 },
				onUpdate: function () {
					targetTextNode.textContent =
						Math.floor(this.targets()[0].val) + suffixPart;
				},
			},
		);
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
