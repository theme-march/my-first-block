import { RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function FunFactItem({
	item,
	index,
	isActive,
	setActiveIndex,
	updateItem,
	removeItem,
}) {
	const handleClick = () => setActiveIndex(index);

	return (
		<div
			className="funfact-content__item"
			onClick={handleClick}
			style={{
				border: isActive ? "2px solid #007cba" : "1px solid transparent",
				padding: "10px",
				borderRadius: "6px",
				marginBottom: "15px",
				backgroundColor: isActive ? "#f0f8ff" : "transparent",
				cursor: "pointer",
			}}
		>
			<RichText
				tagName="h2"
				className="counter"
				value={item.count}
				onChange={(val) =>
					updateItem(index, "count", val.replace(/[^\d]/g, ""))
				} // Validation: only digits
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
				className="funfact-content__item--desc"
				value={item.desc}
				onChange={(val) => updateItem(index, "desc", val)}
				placeholder="Enter description"
				style={{ fontSize: item.descFontSize || "16px" }}
			/>

			<Button
				isDestructive
				onClick={(e) => {
					e.stopPropagation(); // Prevent parent click
					removeItem(index);
				}}
				style={{ marginTop: "10px" }}
			>
				Remove
			</Button>
		</div>
	);
}
