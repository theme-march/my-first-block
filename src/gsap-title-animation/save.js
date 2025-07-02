import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		content,
		level,
		offsetX,
		offsetY,
		duration,
		delay,
		easing,
		alignment,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="gsap-title-animation-wrapper">
				<RichText.Content
					tagName={`h${level}`}
					value={content}
					className="gsap-title-animation"
					data-x={offsetX}
					data-y={offsetY}
					data-duration={duration}
					data-delay={delay}
					data-easing={easing}
					style={{ textAlign: alignment }}
				/>
			</div>
		</div>
	);
}
