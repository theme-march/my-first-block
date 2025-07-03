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
		paddingX,
		paddingY,
		marginX,
		marginY,
		fontWeight,
		position,
	} = attributes;
	const tagName = `h${level}`;
	return (
		<div
			{...useBlockProps.save({
				style: {
					padding: `${paddingY}px ${paddingX}px`,
					margin: `${marginY}px ${marginX}px`,
					position: position,
					transition: "all 0.3s ease-in-out",
				},
			})}
		>
			<div className="gsap-title-animation-wrapper">
				<RichText.Content
					tagName={tagName}
					value={content}
					className="gsap-title-animation"
					data-x={offsetX}
					data-y={offsetY}
					data-duration={duration}
					data-delay={delay}
					data-easing={easing}
					style={{
						textAlign: alignment,
						fontWeight: fontWeight,
					}}
				/>
			</div>
		</div>
	);
}
