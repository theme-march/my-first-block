<?php
// This file is generated. Do not modify it manually.
return array(
	'counter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/counter',
		'version' => '0.1.0',
		'title' => 'Counter Block',
		'category' => 'akash',
		'attributes' => array(
			'count' => array(
				'type' => 'number',
				'default' => 0
			)
		),
		'icon' => 'insert',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'counter',
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
	'my-first-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/my-first-block',
		'version' => '0.1.0',
		'title' => 'My First Block',
		'category' => 'akash',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'my-first-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
