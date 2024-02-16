/* #########################################################
 *  Код для Фронтенда части - Дочернего Блока
 ########################################################## */

// Импорт компонент
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
    // Экспортируем title; и description; из /src/block/index.js
    const { title, description, image_id, image_url, image_alt } = attributes;

    return(
        <div { ...useBlockProps.save() } >
            { image_url && (
                <img src={ image_url } alt={ image_alt } id={ image_id } />
            )}

            <RichText.Content tagName="h2" value={ title } />
            <RichText.Content tagName="p"  value={ description } />

        </div>
    );
}