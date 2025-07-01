import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	RangeControl,
	TextControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

// import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { items } = attributes;

	const [activeIndex, setActiveIndex] = useState(null);

	const updateFontSize = (index, val) => {
		const updated = [...items];
		updated[index] = {
			...updated[index],
			fontSize: `${val}px`,
		};
		setAttributes({ items: updated });
	};

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
			<InspectorControls>
				{activeIndex !== null && items[activeIndex] && (
					<PanelBody title={__("Font Size", "text-domain")} initialOpen={true}>
						<RangeControl
							label={__("Font Size (px)", "text-domain")}
							min={12}
							max={80}
							step={1}
							value={parseInt(items[activeIndex].fontSize, 10) || 24}
							onChange={(val) => updateFontSize(activeIndex, val)}
						/>
					</PanelBody>
				)}
			</InspectorControls>
			<div className="funfact-content__wapper">
				{items &&
					items.length > 0 &&
					items.map((item, index) => (
						<div key={index} className="funfact-content__item">
							<RichText
								tagName="h2"
								className="counter"
								value={item.count}
								onChange={(val) => updateItem(index, "count", val)}
								placeholder="0"
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
