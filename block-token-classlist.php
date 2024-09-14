<?php

/**
 * Plugin Name:       Block Token Classlist
 * Description:       A WordPress Gutenberg plugin for easier editable custom classes.
 * Version:           1.0.0
 * Author:            elf02
 * Author URI:        https://elf02.de
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       elf02-block-token-classlist
 */

namespace elf02\BlockTokenClasslist;

if (!defined('ABSPATH')) {
    exit;
}


function editor_assets()
{
    $asset_meta = include plugin_dir_path(__FILE__) . 'build/js/editor.asset.php';

    wp_enqueue_script(
        'elf02-block-token-classlist',
        plugin_dir_url(__FILE__) . '/build/js/editor.js',
        $asset_meta['dependencies'],
        $asset_meta['version']
    );
}
add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\editor_assets');