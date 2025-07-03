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
		fontWeight,
		position,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		fontSize,
	} = attributes;

	const defaultFontSizes = {
		1: 64,
		2: 48,
		3: 36,
		4: 30,
		5: 24,
		6: 20,
	};
	const appliedFontSize = fontSize
		? parseInt(fontSize)
		: defaultFontSizes[level];

	const tagName = `h${level}`;
	return (
		<div className="gsap-title-animation-wrapper">
			<RichText.Content
				{...useBlockProps.save({
					style: {
						position: position,
						textAlign: alignment,
						fontWeight: fontWeight,
						fontSize: `${appliedFontSize}px`,
						padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
						margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
					},
				})}
				tagName={tagName}
				value={content}
				className="gsap-title-animation"
				data-x={offsetX}
				data-y={offsetY}
				data-duration={duration}
				data-delay={delay}
				data-easing={easing}
			/>
		</div>
	);
}
