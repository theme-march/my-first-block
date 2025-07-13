// components/MaxWidthControl.js

import { __ } from "@wordpress/i18n";
import {
	BaseControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";
import { useState, useMemo } from "@wordpress/element";

// Allowed unit options
const UNIT_OPTIONS = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "vw", value: "vw" },
	{ label: "vh", value: "vh" },
	{ label: "em", value: "em" },
];

// Utility: extract number from string like "950px"
const getNumericValue = (value) =>
	parseFloat(value?.toString().replace(/[^\d.]/g, "")) || 0;

// Utility: extract unit from string like "950px"
const getUnit = (value) => value?.toString().match(/[a-zA-Z%]+/)?.[0] || "px";

/**
 * MaxWidthControl - Reusable component for handling responsive max-width input
 *
 * @param {Object} props
 * @param {string} props.label - The label for the control
 * @param {string} props.value - The current value (e.g., "950px")
 * @param {Function} props.onChange - Callback when value changes
 */
const CustomRangeControl = ({
	label = __("Width/Height", "text-domain"),
	value,
	onChange,
}) => {
	const numericValue = useMemo(() => getNumericValue(value), [value]);
	const unitValue = useMemo(() => getUnit(value), [value]);

	const [unit, setUnit] = useState(unitValue);

	// Update when unit changes
	const handleUnitChange = (newUnit) => {
		setUnit(newUnit);
		onChange(`${numericValue}${newUnit}`);
	};

	// Update when numeric value changes
	const handleValueChange = (newVal) => {
		onChange(`${newVal}${unit}`);
	};

	// Determine range based on unit
	const { min, max } = useMemo(() => {
		if (unit === "%" || unit === "vw" || unit === "vh")
			return { min: 10, max: 100 };
		return { min: 100, max: 1600 };
	}, [unit]);

	return (
		<BaseControl label={label}>
			<div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
				<div style={{ flex: 1 }}>
					<RangeControl
						label={false}
						min={min}
						max={max}
						step={1}
						value={numericValue}
						onChange={handleValueChange}
					/>
				</div>
				<div style={{ width: "55px" }}>
					<SelectControl
						label={false}
						value={unit}
						options={UNIT_OPTIONS}
						onChange={handleUnitChange}
					/>
				</div>
			</div>
		</BaseControl>
	);
};

export default CustomRangeControl;
