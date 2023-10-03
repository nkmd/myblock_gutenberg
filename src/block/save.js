/* #########################################################
 *  Код для Фронтенда части - Дочернего Блока
 ########################################################## */

// Импорт компонент
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
    // Экспортируем title; и description; из /src/block/index.js
    const { title, description } = attributes;

    return(
        <div { ...useBlockProps.save() } >
            <RichText.Content tagName="h2" value={ title } />
            <RichText.Content tagName="p"  value={ description } />

        </div>
    );
}