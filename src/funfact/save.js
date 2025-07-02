import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { items } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="funfact-content">
				<div className="funfact-content__wrapper">
					{items.map((item, index) => (
						<div key={index} className="funfact-content__item">
							<RichText.Content
								tagName="h2"
								className="counter"
								value={item.count}
								style={{
									fontSize: item.countFontSize || "24px",
								}}
							/>
							<RichText.Content
								tagName="h6"
								className="funfact-content__item--title"
								value={item.title}
								style={{
									fontSize: item.titleFontSize || "18px",
								}}
							/>
							<RichText.Content
								tagName="p"
								className="funfact-content__item--desp"
								value={item.desc}
								style={{
									fontSize: item.descFontSize || "16px",
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
