<?php
// This file is generated. Do not modify it manually.
return array(
	'fade-title-animation' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/fade-title-animation',
		'version' => '0.1.0',
		'title' => 'Fade Title Animation',
		'category' => 'akash',
		'icon' => 'smiley',
		'description' => 'A heading block with GSAP-powered animations on scroll.',
		'textdomain' => 'fade-title-animation',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h1,h2,h3,h4,h5,h6',
				'default' => 'Hello Fade Animated Heading'
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
	'gsap-title-animation copy' => array(
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
