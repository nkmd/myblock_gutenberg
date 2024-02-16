/* #########################################################
 *  Регистрация дочерного блока
 ########################################################## */

// Импортируем код блоков (уст-й:  npm i @wordpress/blocks)
import { registerBlockType } from '@wordpress/blocks';
// Импортируем интернализацию для "textDomain"
import { __ } from '@wordpress/i18n';

// Импорт файла сохранения и отображения на Админке (/src/blocs/edit.js)
import Edit from "./edit";
// Импорт файла отображения сохранения и  на Фронтенд (/src/blocs/save.js)
import Save from "./save";

// Регистр. дочернего блока, передача title; description; icon; (по аналогии block.json)
registerBlockType( 'genius/myblock', {
    title: __( 'My Block (child)', 'myblocks' ),
    description:  __( 'Single Block (child)', 'myblocks' ),
    icon: 'universal-access',
    parent: [ 'genius/myblocks' ], // Показать - только если есть родитель, выделен.
    supports: {
        html: false,     // откл. возможность html редактировать
        reusable: false, // откл. возможность доб. ссылку - ?
    },
    attributes: {
        title: {
            type: 'string', // тип
            source: 'html', // не дублировать в метта поле
            selector: 'h2',
        },
        description: {
          type: 'string',
          source: 'html', // не дублировать в метта поле
          selector: 'p',
        },
        image_url: {
            type: 'string',
            source: 'attribute', // хранить в атрибутах
            selector: 'img',
            attribute: 'src',
        },
        image_alt: {
            type: 'string',
            source: 'attribute', // хранить в атрибутах
            selector: 'img',
            attribute: 'alt',
            default: '',
        },
        image_id: {
            type: 'number',
        },
    },


    // вывод на страницу АДМИНКИ
    //edit: () => <p> Admin Edit </p>,
    edit: Edit,
    // вывод на страницу ФРОНТЕНДА
    // save: () => <p> Frontend Save</p>,
    save: Save,
} );