<?php
/**
Plugin Name: Dynamic Block
Plugin URI: http://nikolay.nk.md/gotenberg/demo-plugin-dynamic-block/
Description: Gotenberg Dynamic Block ( additional )
Author: Nikolay I.
Author URI:  http://nikolay.nk.md
 */

 function genius_dynamicblock_init(){
    register_block_type_from_metadata( __DIR__ );
 }
 add_action('init','genius_dynamicblock_init');