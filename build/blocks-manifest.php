<?php
// This file is generated. Do not modify it manually.
return array(
	'bootstrap-col' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/bootstrap-column',
		'title' => 'Bootstrap Column',
		'category' => 'akash',
		'icon' => 'columns',
		'description' => 'Responsive Bootstrap column block for row layout.',
		'supports' => array(
			'html' => false,
			'anchor' => false,
			'customClassName' => false,
			'reusable' => true
		),
		'attributes' => array(
			'colsXs' => array(
				'type' => 'string',
				'default' => '12'
			),
			'colsSm' => array(
				'type' => 'string',
				'default' => '12'
			),
			'colsMd' => array(
				'type' => 'string',
				'default' => '6'
			),
			'colsLg' => array(
				'type' => 'string',
				'default' => '4'
			),
			'colsXl' => array(
				'type' => 'string',
				'default' => '3'
			),
			'colsXxl' => array(
				'type' => 'string',
				'default' => '3'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'bootstrap-containers' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/bootstrap-container',
		'version' => '0.1.0',
		'title' => 'Bootstrap Container',
		'category' => 'akash',
		'icon' => 'screenoptions',
		'description' => 'Bootstrap container block with selectable container type.',
		'textdomain' => 'gsap-title-animation',
		'attributes' => array(
			'containerClass' => array(
				'type' => 'string',
				'default' => 'container'
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'funfact' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/funfact',
		'version' => '0.1.0',
		'title' => 'Fun Fact Block',
		'category' => 'akash',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'count' => 0,
						'title' => 'New Title',
						'desc' => 'New description',
						'countFontSize' => '24px',
						'titleFontSize' => '18px',
						'descFontSize' => '16px'
					)
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'count' => array(
							'type' => 'string'
						),
						'title' => array(
							'type' => 'string'
						),
						'desc' => array(
							'type' => 'string'
						),
						'countFontSize' => array(
							'type' => 'string'
						),
						'titleFontSize' => array(
							'type' => 'string'
						),
						'descFontSize' => array(
							'type' => 'string'
						),
						'backgroundImage' => array(
							'type' => 'string'
						)
					)
				)
			)
		),
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			'attributes' => array(
				'items' => array(
					array(
						'count' => '200',
						'title' => 'Speakers',
						'desc' => 'Some description'
					)
				)
			)
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'color' => array(
				'background' => true,
				'text' => true
			)
		),
		'textdomain' => 'funfact',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'gsap-title-animation' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/gsap-title-animation',
		'version' => '0.1.0',
		'title' => 'GSAP Title Animation',
		'category' => 'akash',
		'icon' => 'smiley',
		'description' => 'A heading block with GSAP-powered animations on scroll.',
		'textdomain' => 'gsap-title-animation',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h1,h2,h3,h4,h5,h6',
				'default' => 'Hello GSAP Animated Heading'
			),
			'level' => array(
				'type' => 'number',
				'default' => 2
			),
			'offsetX' => array(
				'type' => 'number',
				'default' => 0
			),
			'offsetY' => array(
				'type' => 'number',
				'default' => 0
			),
			'duration' => array(
				'type' => 'number',
				'default' => 0.8
			),
			'delay' => array(
				'type' => 'number',
				'default' => 0
			),
			'easing' => array(
				'type' => 'string',
				'default' => 'power2.out'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'paddingTop' => array(
				'type' => 'number',
				'default' => 10
			),
			'paddingRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingBottom' => array(
				'type' => 'number',
				'default' => 10
			),
			'paddingLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '600'
			),
			'fontSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'position' => array(
				'type' => 'string',
				'default' => 'relative'
			),
			'splitTextEnabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'splitType' => array(
				'type' => 'string',
				'default' => 'chars'
			)
		),
		'supports' => array(
			'html' => false,
			'headingLevels' => array(
				1,
				2,
				3,
				4,
				5,
				6
			),
			'align' => true,
			'color' => array(
				'background' => true,
				'text' => true
			)
		),
		'example' => array(
			'attributes' => array(
				'level' => 2
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
