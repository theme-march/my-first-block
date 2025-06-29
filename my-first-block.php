<?php
/**
 * Plugin Name:       My First Block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-first-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_my_first_block_block_init() {

	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'create_block_my_first_block_block_init' );


/**
 * Create custom table on plugin activation
 */
function my_counter_create_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'my_counter';

    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        count INT NOT NULL DEFAULT 0
    ) $charset_collate;";

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $sql );
}
register_activation_hook( __FILE__, 'my_counter_create_table' );


/**
 * Register REST API route
 */
add_action( 'rest_api_init', function () {
    register_rest_route( 'my-counter/v1', '/count', [
        'methods'             => [ 'GET', 'POST' ],
        'permission_callback' => '__return_true', // Public, no permission check
        'callback'            => 'my_counter_handle_request',
    ]);
});

/**
 * REST API callback
 */
function my_counter_handle_request( WP_REST_Request $request ) {
    global $wpdb;
    $table = $wpdb->prefix . 'my_counter';

    if ( $request->get_method() === 'POST' ) {
        $updated_count = intval( $request->get_param( 'count' ) );

        // Check if row exists
        $exists = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $table WHERE id = %d", 1 ) );

        if ( $exists ) {
            $wpdb->update(
                $table,
                [ 'count' => $updated_count ],
                [ 'id' => 1 ],
                [ '%d' ],
                [ '%d' ]
            );
        } else {
            $wpdb->insert(
                $table,
                [ 'id' => 1, 'count' => $updated_count ],
                [ '%d', '%d' ]
            );
        }

        return rest_ensure_response([
            'success' => true,
            'count' => $updated_count,
        ]);
    }

    // GET request - fetch count
    $count = $wpdb->get_var( $wpdb->prepare( "SELECT count FROM $table WHERE id = %d", 1 ) );
    if ( $count === null ) {
        $count = 0;
    }

    return rest_ensure_response([
        'count' => intval( $count ),
    ]);
}
