<?php
/**
Plugin Name: Dynamic Block
Plugin URI: http://nikolay.nk.md/gotenberg/demo-plugin-dynamic-block/
Description: Gotenberg Dynamic Block ( additional )
Author: Nikolay I.
Author URI:  http://nikolay.nk.md
 */

// #### РЭНДЕР ПОСТОВ НА ФРОНТ СТРАНИЦУ ####
// сам колбэк (подгружаем $attributes из block.json)
function genius_latest_posts_block($attributes){
    // print_r($attributes);
    // массив с настройками
    $arg =array(
        'posts_per_page' => $attributes['postsPerPage'],
        'post_status'    => 'publish',
        'order'          => $attributes['order'],
        'orderby'        => $attributes['orderBy']
    );
    // проверка  ( так как может отсутствовать)
    if(isset($attributes['category'])){
        $arg['category__in'] = $attributes['category'];
    }
    $latest_posts = get_posts($arg);

    $html = '<div '.get_block_wrapper_attributes() .' data="__test_dynamic_class_func" >';
    if(!empty($latest_posts)){
        foreach ($latest_posts as $post){
            $html .= '<div>' ;
            if($attributes['showImage'] && has_post_thumbnail($post)){
                $html .= wp_kses_post(get_the_post_thumbnail($post, 'large'));
            }
            $html .= '<time datetime="'. esc_attr(get_the_date('c', $post)) .'">'. esc_html(get_the_date('', $post)) .'</time>';
            $html .= '<h2><a href="'. esc_url(get_the_permalink($post)) .'"> '. esc_html(get_the_title($post)) .'</a></h2>';
            $html .= '</div>' ;
        }
    }
    $html .= '</div>';
    return $html;

}


// #### Оснавная функция ####
 function genius_dynamicblock_init(){
    register_block_type_from_metadata( __DIR__, array(
        // передача колбэк отвечает за динамическую часть фронтенд, которая кенер. на php
        "render_callback" => 'genius_latest_posts_block'
    ) );
 }
 add_action('init','genius_dynamicblock_init');