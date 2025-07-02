import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useState, useCallback } from "@wordpress/element";

import FontSizeSettings from "./components/FontSizeSettings";
import FunFactItem from "./components/FunFactItem";

const DEFAULT_ITEM = {
	count: "0",
	title: "New Title",
	desc: "New description",
	countFontSize: "24px",
	titleFontSize: "18px",
	descFontSize: "16px",
};

export default function Edit({ attributes, setAttributes }) {
	const { items } = attributes;
	const [activeIndex, setActiveIndex] = useState(null);

	const updateItem = useCallback(
		(index, field, value) => {
			const updated = [...items];
			updated[index] = {
				...updated[index],
				[field]: value,
			};
			setAttributes({ items: updated });
		},
		[items, setAttributes],
	);

	const addNewItem = () => {
		setAttributes({ items: [...items, { ...DEFAULT_ITEM }] });
	};

	const removeItem = (index) => {
		const updated = items.filter((_, i) => i !== index);
		setAttributes({ items: updated });
		if (activeIndex === index) {
			setActiveIndex(null);
		}
	};

	const blockProps = useBlockProps({ className: "funfact-content" });

	return (
		<div {...blockProps}>
			<InspectorControls>
				{activeIndex !== null && items[activeIndex] && (
					<FontSizeSettings
						activeItem={items[activeIndex]}
						onChange={(field, value) => updateItem(activeIndex, field, value)}
					/>
				)}
			</InspectorControls>

			<div className="funfact-content__wrapper">
				{items.map((item, index) => (
					<FunFactItem
						key={index}
						item={item}
						index={index}
						isActive={activeIndex === index}
						setActiveIndex={setActiveIndex}
						updateItem={updateItem}
						removeItem={removeItem}
					/>
				))}
			</div>

			<Button
				variant="primary"
				onClick={addNewItem}
				style={{ marginTop: "20px" }}
			>
				{__("Add New", "your-textdomain")}
			</Button>
		</div>
	);
}
