<?php
/**
Plugin Name: My Block
Plugin URI: http://nikolay.nk.md/gotenberg/demo-plugin/
Description: Gotenberg Block ( additional )
Author: Nikolay I.
Author URI:  http://nikolay.nk.md
*/


// ### Хук регистрации своих Блоков в Gutenberg ### //
function genius_myblock_init() {
    register_block_type_from_metadata(__DIR__);
}
add_action('init','genius_myblock_init');
