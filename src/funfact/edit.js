import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Button, TextControl } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { items } = attributes;

	const updateItem = (index, field, value) => {
		const updated = [...items];
		updated[index] = {
			...updated[index],
			[field]: value,
		};
		setAttributes({ items: updated });
	};

	const addNewItem = () => {
		const updated = [
			...items,
			{ count: 0, title: "New Title", desc: "New description" },
		];
		setAttributes({ items: updated });
	};

	const removeItem = (index) => {
		const updated = items.filter((_, i) => i !== index);
		setAttributes({ items: updated });
	};

	const blockProps = useBlockProps({
		className: "funfact-content",
	});

	return (
		<div {...blockProps}>
			<div className="funfact-content__wapper">
				{items.map((item, index) => (
					<div key={index} className="funfact-content__item">
						<RichText
							tagName="span"
							className="counter"
							value={item.count}
							onChange={(val) => updateItem(index, "count", val)}
							placeholder="0"
							allowedFormats={[]}
						/>

						<RichText
							tagName="h6"
							className="funfact-content__item--title"
							value={item.title}
							onChange={(val) => updateItem(index, "title", val)}
							placeholder="Enter title"
						/>
						<RichText
							tagName="p"
							className="funfact-content__item--desp"
							value={item.desc}
							onChange={(val) => updateItem(index, "desc", val)}
							placeholder="Enter description"
						/>
						<Button
							isDestructive
							onClick={() => removeItem(index)}
							style={{ marginTop: "10px" }}
						>
							Remove
						</Button>
					</div>
				))}
			</div>
			<Button
				variant="primary"
				onClick={addNewItem}
				style={{ marginTop: "20px" }}
			>
				Add New
			</Button>
		</div>
	);
}
