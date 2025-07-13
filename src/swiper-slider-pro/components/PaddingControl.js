import { __ } from "@wordpress/i18n";
import {
	BaseControl,
	RangeControl,
	Button,
	__experimentalUnitControl as UnitControl,
	SelectControl,
	Tooltip,
} from "@wordpress/components";
import { useState, useMemo } from "@wordpress/element";
import { Icon, link, linkOff } from "@wordpress/icons";

const SIDES = ["top", "right", "bottom", "left"];

const UNIT_OPTIONS = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
	{ label: "vh", value: "vh" },
];

const getNumericValue = (val) =>
	parseFloat(val?.toString().replace(/[^\d.-]/g, "")) || 0;

const PaddingControl = ({
	label = __("Padding", "textdomain"),
	value = {},
	onChange,
}) => {
	const [useSlider, setUseSlider] = useState(true);
	const [selectedUnit, setSelectedUnit] = useState("px");

	const currentValue = useMemo(() => {
		// default fallback values
		return {
			top: value?.top || `0${selectedUnit}`,
			right: value?.right || `0${selectedUnit}`,
			bottom: value?.bottom || `0${selectedUnit}`,
			left: value?.left || `0${selectedUnit}`,
		};
	}, [value, selectedUnit]);

	const handleSideChange = (side, val) => {
		onChange({
			...currentValue,
			[side]: val,
		});
	};

	const handleSliderChange = (val) => {
		const unified = {};
		SIDES.forEach((side) => {
			unified[side] = `${val}${selectedUnit}`;
		});
		onChange(unified);
	};

	const handleUnitChange = (unit) => {
		setSelectedUnit(unit);
		const updated = {};
		SIDES.forEach((side) => {
			const num = getNumericValue(currentValue[side]);
			updated[side] = `${num}${unit}`;
		});
		onChange(updated);
	};

	return (
		<BaseControl label={label}>
			<div className="tm-padding-toolbar">
				<SelectControl
					value={selectedUnit}
					options={UNIT_OPTIONS}
					onChange={handleUnitChange}
				/>
				<Tooltip
					text={
						useSlider
							? __("Switch to separate inputs", "textdomain")
							: __("Switch to unified slider", "textdomain")
					}
				>
					<Button
						icon={<Icon icon={useSlider ? linkOff : link} />}
						isSmall
						variant="tertiary"
						onClick={() => setUseSlider(!useSlider)}
						aria-label={__("Toggle Padding Input Mode", "textdomain")}
					/>
				</Tooltip>
			</div>

			{useSlider ? (
				<RangeControl
					label={__("Padding", "textdomain")}
					min={0}
					max={200}
					value={getNumericValue(currentValue.top)}
					onChange={handleSliderChange}
				/>
			) : (
				<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
					{SIDES.map((side) => (
						<div key={side} style={{ flex: "1 1 45%" }}>
							<UnitControl
								label={side.charAt(0).toUpperCase() + side.slice(1)}
								value={currentValue[side]}
								onChange={(val) => handleSideChange(side, val)}
								units={UNIT_OPTIONS}
							/>
						</div>
					))}
				</div>
			)}
		</BaseControl>
	);
};

export default PaddingControl;
