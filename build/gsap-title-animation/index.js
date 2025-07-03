/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gsap-title-animation/block.json":
/*!*********************************************!*\
  !*** ./src/gsap-title-animation/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/gsap-title-animation","version":"0.1.0","title":"GSAP Title Animation","category":"akash","icon":"smiley","description":"A heading block with GSAP-powered animations on scroll.","textdomain":"gsap-title-animation","attributes":{"content":{"type":"string","source":"html","selector":"h1,h2,h3,h4,h5,h6","default":"Hello GSAP Animated Heading"},"level":{"type":"number","default":2},"offsetX":{"type":"number","default":0},"offsetY":{"type":"number","default":0},"duration":{"type":"number","default":0.8},"delay":{"type":"number","default":0},"easing":{"type":"string","default":"power2.out"},"alignment":{"type":"string","default":"center"},"paddingTop":{"type":"number","default":10},"paddingRight":{"type":"number","default":0},"paddingBottom":{"type":"number","default":10},"paddingLeft":{"type":"number","default":0},"marginTop":{"type":"number","default":0},"marginRight":{"type":"number","default":0},"marginBottom":{"type":"number","default":0},"marginLeft":{"type":"number","default":0},"fontWeight":{"type":"string","default":"600"},"fontSize":{"type":"string","default":""},"position":{"type":"string","default":"relative"}},"supports":{"html":false,"headingLevels":[1,2,3,4,5,6]},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/gsap-title-animation/edit.js":
/*!******************************************!*\
  !*** ./src/gsap-title-animation/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
// // import { __ } from "@wordpress/i18n";
// // import {
// // 	useBlockProps,
// // 	RichText,
// // 	InspectorControls,
// // 	BlockControls,
// // } from "@wordpress/block-editor";
// // import {
// // 	PanelBody,
// // 	SelectControl,
// // 	RangeControl,
// // 	ToolbarGroup,
// // 	ToolbarButton,
// // } from "@wordpress/components";

// // import { Fragment } from "@wordpress/element";

// // export default function Edit({ attributes, setAttributes }) {
// // 	const {
// // 		content,
// // 		level,
// // 		offsetX,
// // 		offsetY,
// // 		duration,
// // 		delay,
// // 		easing,
// // 		alignment,
// // 		paddingX,
// // 		paddingY,
// // 		marginX,
// // 		marginY,
// // 		fontWeight,
// // 		fontSize,
// // 		position,
// // 	} = attributes;

// // 	const blockProps = useBlockProps({
// // 		style: {
// // 			textAlign: alignment,
// // 			padding: `${paddingY}px ${paddingX}px`,
// // 			margin: `${marginY}px ${marginX}px`,
// // 			fontWeight: fontWeight,
// // 			fontSize: `${fontSize}px`,
// // 			position: position,
// // 			transition: "all 0.3s ease-in-out",
// // 		},
// // 	});

// // 	const tagName = `h${level}`;

// // 	return (
// // 		<Fragment>
// // 			{/* 🔽 Toolbar: H1-H6 Dropdown */}
// // 			<BlockControls>
// // 				<ToolbarGroup label={__("Heading Level", "gsap-title-animation")}>
// // 					{[1, 2, 3, 4, 5, 6].map((num) => (
// // 						<ToolbarButton
// // 							key={num}
// // 							isPressed={level === num}
// // 							label={`H${num}`}
// // 							onClick={() => setAttributes({ level: num })}
// // 							showTooltip
// // 						>
// // 							H{num}
// // 						</ToolbarButton>
// // 					))}
// // 				</ToolbarGroup>
// // 			</BlockControls>

// // 			{/* 🎛️ Sidebar Controls */}
// // 			<InspectorControls>
// // 				{/* 🎯 Animation Settings */}
// // 				<PanelBody title="🎯 Animation Settings" initialOpen={true}>
// // 					<RangeControl
// // 						label="Translate X"
// // 						value={offsetX}
// // 						onChange={(value) => setAttributes({ offsetX: value })}
// // 						min={-300}
// // 						max={300}
// // 					/>
// // 					<RangeControl
// // 						label="Translate Y"
// // 						value={offsetY}
// // 						onChange={(value) => setAttributes({ offsetY: value })}
// // 						min={-300}
// // 						max={300}
// // 					/>
// // 					<RangeControl
// // 						label="Duration (sec)"
// // 						value={duration}
// // 						onChange={(value) => setAttributes({ duration: value })}
// // 						min={0.1}
// // 						max={5}
// // 						step={0.1}
// // 					/>
// // 					<RangeControl
// // 						label="Delay (sec)"
// // 						value={delay}
// // 						onChange={(value) => setAttributes({ delay: value })}
// // 						min={0}
// // 						max={5}
// // 						step={0.1}
// // 					/>
// // 					<SelectControl
// // 						label="Easing"
// // 						value={easing}
// // 						onChange={(value) => setAttributes({ easing: value })}
// // 						options={[
// // 							{ label: "Power2 Out", value: "power2.out" },
// // 							{ label: "Power1 InOut", value: "power1.inOut" },
// // 							{ label: "Linear", value: "linear" },
// // 							{ label: "Back Out", value: "back.out(1.7)" },
// // 							{ label: "Elastic Out", value: "elastic.out(1, 0.3)" },
// // 						]}
// // 					/>
// // 				</PanelBody>

// // 				{/* 🎨 Style Settings */}
// // 				<PanelBody title="🎨 Style Settings" initialOpen={false}>
// // 					<SelectControl
// // 						label="Text Align"
// // 						value={alignment}
// // 						onChange={(value) => setAttributes({ alignment: value })}
// // 						options={[
// // 							{ label: "Left", value: "left" },
// // 							{ label: "Center", value: "center" },
// // 							{ label: "Right", value: "right" },
// // 						]}
// // 					/>
// // 					<RangeControl
// // 						label="Padding X"
// // 						value={paddingX}
// // 						onChange={(value) => setAttributes({ paddingX: value })}
// // 						min={0}
// // 						max={100}
// // 					/>
// // 					<RangeControl
// // 						label="Padding Y"
// // 						value={paddingY}
// // 						onChange={(value) => setAttributes({ paddingY: value })}
// // 						min={0}
// // 						max={100}
// // 					/>
// // 					<RangeControl
// // 						label="Margin X"
// // 						value={marginX}
// // 						onChange={(value) => setAttributes({ marginX: value })}
// // 						min={0}
// // 						max={100}
// // 					/>
// // 					<RangeControl
// // 						label="Margin Y"
// // 						value={marginY}
// // 						onChange={(value) => setAttributes({ marginY: value })}
// // 						min={0}
// // 						max={100}
// // 					/>
// // 					<RangeControl
// // 						label="Font Size"
// // 						value={parseInt(fontSize)}
// // 						onChange={(value) => setAttributes({ fontSize: `${value}` })}
// // 						min={10}
// // 						max={200}
// // 					/>

// // 					<SelectControl
// // 						label="Font Weight"
// // 						value={fontWeight}
// // 						onChange={(value) => setAttributes({ fontWeight: value })}
// // 						options={[
// // 							{ label: "Normal (400)", value: "400" },
// // 							{ label: "Medium (500)", value: "500" },
// // 							{ label: "Semi Bold (600)", value: "600" },
// // 							{ label: "Bold (700)", value: "700" },
// // 							{ label: "Extra Bold (800)", value: "800" },
// // 						]}
// // 					/>
// // 					<SelectControl
// // 						label="Position"
// // 						value={position}
// // 						onChange={(value) => setAttributes({ position: value })}
// // 						options={[
// // 							{ label: "Relative", value: "relative" },
// // 							{ label: "Static", value: "static" },
// // 							{ label: "Absolute", value: "absolute" },
// // 							{ label: "Fixed", value: "fixed" },
// // 						]}
// // 					/>
// // 				</PanelBody>
// // 			</InspectorControls>

// // 			{/* 📝 RichText Heading */}
// // 			<RichText
// // 				{...blockProps}
// // 				tagName={tagName}
// // 				value={content}
// // 				onChange={(value) => setAttributes({ content: value })}
// // 				placeholder={__("📝 Write heading...", "gsap-title-animation")}
// // 				className="gsap-title-animation m-5"
// // 				data-x={offsetX}
// // 				data-y={offsetY}
// // 				data-duration={duration}
// // 				data-delay={delay}
// // 				data-easing={easing}
// // 			/>
// // 		</Fragment>
// // 	);
// // }






function Edit({
  attributes,
  setAttributes
}) {
  const {
    content,
    level,
    offsetX,
    offsetY,
    duration,
    delay,
    easing,
    alignment,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    fontWeight,
    position,
    fontSize
  } = attributes;

  // Default font sizes by heading level
  const defaultFontSizes = {
    1: 64,
    2: 48,
    3: 36,
    4: 30,
    5: 24,
    6: 20
  };
  const appliedFontSize = fontSize ? parseInt(fontSize) : defaultFontSizes[level];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: {
      textAlign: alignment,
      fontWeight,
      position,
      fontSize: `${appliedFontSize}px`,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
      transition: "all 0.3s ease-in-out"
    }
  });
  const tagName = `h${level}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Level", "gsap-title-animation"),
        children: [1, 2, 3, 4, 5, 6].map(num => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          isPressed: level === num,
          label: `H${num}`,
          onClick: () => setAttributes({
            level: num
          }),
          showTooltip: true,
          children: ["H", num]
        }, num))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "\uD83C\uDFAF Animation Settings",
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Translate X",
          value: offsetX,
          onChange: value => setAttributes({
            offsetX: value
          }),
          min: -300,
          max: 300
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Translate Y",
          value: offsetY,
          onChange: value => setAttributes({
            offsetY: value
          }),
          min: -300,
          max: 300
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Duration (sec)",
          value: duration,
          onChange: value => setAttributes({
            duration: value
          }),
          min: 0.1,
          max: 5,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Delay (sec)",
          value: delay,
          onChange: value => setAttributes({
            delay: value
          }),
          min: 0,
          max: 5,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Easing",
          value: easing,
          onChange: value => setAttributes({
            easing: value
          }),
          options: [{
            label: "Power2 Out",
            value: "power2.out"
          }, {
            label: "Power1 InOut",
            value: "power1.inOut"
          }, {
            label: "Linear",
            value: "linear"
          }, {
            label: "Back Out",
            value: "back.out(1.7)"
          }, {
            label: "Elastic Out",
            value: "elastic.out(1, 0.3)"
          }]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "\uD83C\uDFA8 Style Settings",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Text Align",
          value: alignment,
          onChange: value => setAttributes({
            alignment: value
          }),
          options: [{
            label: "Left",
            value: "left"
          }, {
            label: "Center",
            value: "center"
          }, {
            label: "Right",
            value: "right"
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Font Size (Override)",
          value: parseInt(fontSize) || defaultFontSizes[level],
          onChange: value => setAttributes({
            fontSize: `${value}`
          }),
          min: 10,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          isSecondary: true,
          onClick: () => setAttributes({
            fontSize: ""
          }),
          style: {
            marginBottom: "1rem"
          },
          children: "Reset Font Size to Default"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Padding Top",
          value: paddingTop,
          onChange: value => setAttributes({
            paddingTop: value
          }),
          min: 0,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Padding Right",
          value: paddingRight,
          onChange: value => setAttributes({
            paddingRight: value
          }),
          min: 0,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Padding Bottom",
          value: paddingBottom,
          onChange: value => setAttributes({
            paddingBottom: value
          }),
          min: 0,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Padding Left",
          value: paddingLeft,
          onChange: value => setAttributes({
            paddingLeft: value
          }),
          min: 0,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Margin Top",
          value: marginTop,
          onChange: value => setAttributes({
            marginTop: value
          }),
          min: 0,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Margin Right",
          value: marginRight,
          onChange: value => setAttributes({
            marginRight: value
          }),
          min: 0,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Margin Bottom",
          value: marginBottom,
          onChange: value => setAttributes({
            marginBottom: value
          }),
          min: 0,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Margin Left",
          value: marginLeft,
          onChange: value => setAttributes({
            marginLeft: value
          }),
          min: 0,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Font Weight",
          value: fontWeight,
          onChange: value => setAttributes({
            fontWeight: value
          }),
          options: [{
            label: "Normal (400)",
            value: "400"
          }, {
            label: "Medium (500)",
            value: "500"
          }, {
            label: "Semi Bold (600)",
            value: "600"
          }, {
            label: "Bold (700)",
            value: "700"
          }, {
            label: "Extra Bold (800)",
            value: "800"
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Position",
          value: position,
          onChange: value => setAttributes({
            position: value
          }),
          options: [{
            label: "Relative",
            value: "relative"
          }, {
            label: "Static",
            value: "static"
          }, {
            label: "Absolute",
            value: "absolute"
          }, {
            label: "Fixed",
            value: "fixed"
          }]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      ...blockProps,
      tagName: tagName,
      value: content,
      onChange: value => setAttributes({
        content: value
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("📝 Write heading...", "gsap-title-animation"),
      className: "gsap-title-animation",
      "data-x": offsetX,
      "data-y": offsetY,
      "data-duration": duration,
      "data-delay": delay,
      "data-easing": easing
    })]
  });
}

/***/ }),

/***/ "./src/gsap-title-animation/index.js":
/*!*******************************************!*\
  !*** ./src/gsap-title-animation/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/gsap-title-animation/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/gsap-title-animation/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/gsap-title-animation/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/gsap-title-animation/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/gsap-title-animation/save.js":
/*!******************************************!*\
  !*** ./src/gsap-title-animation/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    content,
    level,
    offsetX,
    offsetY,
    duration,
    delay,
    easing,
    alignment,
    paddingX,
    paddingY,
    marginX,
    marginY,
    fontWeight,
    position
  } = attributes;
  const tagName = `h${level}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      style: {
        padding: `${paddingY}px ${paddingX}px`,
        margin: `${marginY}px ${marginX}px`,
        position: position,
        transition: "all 0.3s ease-in-out"
      }
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "gsap-title-animation-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: tagName,
        value: content,
        className: "gsap-title-animation",
        "data-x": offsetX,
        "data-y": offsetY,
        "data-duration": duration,
        "data-delay": delay,
        "data-easing": easing,
        style: {
          textAlign: alignment,
          fontWeight: fontWeight
        }
      })
    })
  });
}

/***/ }),

/***/ "./src/gsap-title-animation/style.scss":
/*!*********************************************!*\
  !*** ./src/gsap-title-animation/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"gsap-title-animation/index": 0,
/******/ 			"gsap-title-animation/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmy_first_block"] = globalThis["webpackChunkmy_first_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["gsap-title-animation/style-index"], () => (__webpack_require__("./src/gsap-title-animation/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map