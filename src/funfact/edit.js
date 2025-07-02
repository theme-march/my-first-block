// import { __ } from "@wordpress/i18n";
// import {
// 	useBlockProps,
// 	RichText,
// 	InspectorControls,
// 	MediaUpload,
// 	MediaUploadCheck,
// } from "@wordpress/block-editor";
// import { Button, PanelBody, RangeControl } from "@wordpress/components";
// import { useState } from "@wordpress/element";

// export default function Edit({ attributes, setAttributes }) {
// 	const { items } = attributes;
// 	const [activeIndex, setActiveIndex] = useState(null);

// 	const updateItem = (index, field, value) => {
// 		const updated = [...items];
// 		updated[index] = {
// 			...updated[index],
// 			[field]: value,
// 		};
// 		setAttributes({ items: updated });
// 	};

// 	const addNewItem = () => {
// 		const updated = [
// 			...items,
// 			{
// 				count: 0,
// 				title: "New Title",
// 				desc: "New description",
// 				countFontSize: "24px",
// 				titleFontSize: "18px",
// 				descFontSize: "16px",
// 			},
// 		];
// 		setAttributes({ items: updated });
// 	};

// 	const removeItem = (index) => {
// 		const updated = items.filter((_, i) => i !== index);
// 		setAttributes({ items: updated });
// 	};

// 	const blockProps = useBlockProps({
// 		className: "funfact-content",
// 	});

// 	return (
// 		<div {...blockProps}>
// 			<InspectorControls>
// 				{activeIndex !== null && items[activeIndex] && (
// 					<PanelBody title={__("Font Sizes", "funfact")} initialOpen={true}>
// 						<RangeControl
// 							label={__("Count Font Size (h2)", "funfact")}
// 							min={12}
// 							max={80}
// 							value={parseInt(items[activeIndex].countFontSize, 10) || 24}
// 							onChange={(val) =>
// 								updateItem(activeIndex, "countFontSize", `${val}px`)
// 							}
// 						/>
// 						<RangeControl
// 							label={__("Title Font Size (h6)", "funfact")}
// 							min={12}
// 							max={60}
// 							value={parseInt(items[activeIndex].titleFontSize, 10) || 18}
// 							onChange={(val) =>
// 								updateItem(activeIndex, "titleFontSize", `${val}px`)
// 							}
// 						/>
// 						<RangeControl
// 							label={__("Description Font Size (p)", "funfact")}
// 							min={10}
// 							max={50}
// 							value={parseInt(items[activeIndex].descFontSize, 10) || 16}
// 							onChange={(val) =>
// 								updateItem(activeIndex, "descFontSize", `${val}px`)
// 							}
// 						/>
// 					</PanelBody>
// 				)}
// 			</InspectorControls>
// 			<div className="funfact-content__wapper">
// 				{items.map((item, index) => (
// 					<div
// 						key={index}
// 						className="funfact-content__item"
// 						onClick={() => setActiveIndex(index)}
// 						style={{
// 							border:
// 								activeIndex === index
// 									? "2px solid #007cba"
// 									: "1px solid transparent",
// 							padding: "10px",
// 							borderRadius: "6px",
// 							marginBottom: "15px",
// 							backgroundColor:
// 								activeIndex === index ? "#f0f8ff" : "transparent",
// 						}}
// 					>
// 						<RichText
// 							tagName="h2"
// 							className="counter"
// 							value={item.count}
// 							onChange={(val) => updateItem(index, "count", val)}
// 							placeholder="0"
// 							style={{
// 								fontSize: item.countFontSize || "24px",
// 							}}
// 						/>

// 						<RichText
// 							tagName="h6"
// 							className="funfact-content__item--title"
// 							value={item.title}
// 							onChange={(val) => updateItem(index, "title", val)}
// 							placeholder="Enter title"
// 							style={{
// 								fontSize: item.titleFontSize || "18px",
// 							}}
// 						/>

// 						<RichText
// 							tagName="p"
// 							className="funfact-content__item--desp"
// 							value={item.desc}
// 							onChange={(val) => updateItem(index, "desc", val)}
// 							placeholder="Enter description"
// 							style={{
// 								fontSize: item.descFontSize || "16px",
// 							}}
// 						/>

// 						<Button
// 							isDestructive
// 							onClick={() => removeItem(index)}
// 							style={{ marginTop: "10px" }}
// 						>
// 							Remove
// 						</Button>
// 					</div>
// 				))}
// 			</div>

// 			<Button
// 				variant="primary"
// 				onClick={addNewItem}
// 				style={{ marginTop: "20px" }}
// 			>
// 				Add New
// 			</Button>
// 		</div>
// 	);
// }
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useState } from "@wordpress/element";

import FontSizeSettings from "./components/FontSizeSettings";

export default function Edit({ attributes, setAttributes }) {
	const { items } = attributes;
	const [activeIndex, setActiveIndex] = useState(null);

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
			{
				count: 0,
				title: "New Title",
				desc: "New description",
				countFontSize: "24px",
				titleFontSize: "18px",
				descFontSize: "16px",
			},
		];
		setAttributes({ items: updated });
	};

	const removeItem = (index) => {
		const updated = items.filter((_, i) => i !== index);
		setAttributes({ items: updated });
		if (activeIndex === index) {
			setActiveIndex(null);
		}
	};

	const blockProps = useBlockProps({
		className: "funfact-content",
	});

	return (
		<div {...blockProps}>
			<InspectorControls>
				{activeIndex !== null && (
					<FontSizeSettings
						activeItem={items[activeIndex]}
						onChange={(field, value) => updateItem(activeIndex, field, value)}
					/>
				)}
			</InspectorControls>

			<div className="funfact-content__wapper">
				{items.map((item, index) => (
					<div
						key={index}
						className="funfact-content__item"
						onClick={() => setActiveIndex(index)}
						style={{
							border:
								activeIndex === index
									? "2px solid #007cba"
									: "1px solid transparent",
							padding: "10px",
							borderRadius: "6px",
							marginBottom: "15px",
							backgroundColor:
								activeIndex === index ? "#f0f8ff" : "transparent",
						}}
					>
						<RichText
							tagName="h2"
							className="counter"
							value={item.count}
							onChange={(val) => updateItem(index, "count", val)}
							placeholder="0"
							style={{ fontSize: item.countFontSize || "24px" }}
						/>

						<RichText
							tagName="h6"
							className="funfact-content__item--title"
							value={item.title}
							onChange={(val) => updateItem(index, "title", val)}
							placeholder="Enter title"
							style={{ fontSize: item.titleFontSize || "18px" }}
						/>

						<RichText
							tagName="p"
							className="funfact-content__item--desp"
							value={item.desc}
							onChange={(val) => updateItem(index, "desc", val)}
							placeholder="Enter description"
							style={{ fontSize: item.descFontSize || "16px" }}
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
