<?php
// This file is generated. Do not modify it manually.
return array(
	'counter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/counter',
		'version' => '0.1.0',
		'title' => 'Counter Block',
		'category' => 'widgets',
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
		'category' => 'widgets',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'count' => 200,
						'title' => 'Speakers',
						'desc' => 'Some description'
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
						)
					)
				)
			)
		),
		'icon' => 'insert',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
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
		'category' => 'widgets',
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
