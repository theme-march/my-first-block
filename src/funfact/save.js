import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { items } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="funfact-content">
				<div className="funfact-content__wapper">
					{items.map((item, index) => (
						<div key={index} className="funfact-content__item">
							<RichText.Content
								data-target={item.count}
								tagName="h2"
								className="counter"
								value={item.count}
							/>
							<RichText.Content
								tagName="h6"
								className="funfact-content__item--title"
								value={item.title}
							/>
							<RichText.Content
								tagName="p"
								className="funfact-content__item--desp"
								value={item.desc}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
