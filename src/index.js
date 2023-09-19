/** #########################################################
 *  главный файл ЛОГИКИ нашего блока
 ########################################################## */

/** Подключаем React С компиляцией JSX  (Пр.2) ******************
*  Нужен NODEJS https://nodejs.org/ru
*  https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
	 > npm init
	 > npm install @wordpress/scripts --save-dev (по докум.)
     > npm i @wordpress/blocks
     // чтоб WP понимал после всего нужно скомпилировать из IE6 в IE5 В консоли:
     > npx wp-scripts build
     // запуск с постоянным маниторингом:
     > npx wp-scripts start

 	 // В 'package.json' пропишим сокращение для команд и вызываем теперь так:
 	 > npm run s | > npm run b
 ************************************************************* */

// Импортируем код блоков (уст-й:  npm i @wordpress/blocks)
import { registerBlockType } from '@wordpress/blocks';
// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)
import { useBlockProps } from '@wordpress/block-editor';

// Импортируем файл стилий CSS (компилятор подхватит без доп. настроек уст-к)
// style.scss - для ФРОНТЕНДА и АДМИНКИ !
import "./style.scss";// ! создаст: build/style-index.css - Подкл. в block.json
import "./editor.scss"; // создаст: build/index.css - Подкл. в block.json

// Передаём псевданим нашего API (block.json)
registerBlockType( 'genius/myblock', {
	// вывод на страницу АДМИНКИ
	edit: function () {
		const blokProps = useBlockProps(); // выз. '@wordpress/block-editor'
		// console.log(blokProps); // что в объекте вообще.
		// вывод служебных тегов, классов в админке  {...blokProps}
		return <h1 {...blokProps} >__EDIT(React JSX) 2__</h1>;
	},

	// вывод на страницу ФРОНТЕНД пользователя
	save: function () {
		const blokProps = useBlockProps.save(); // выз. '@wordpress/block-editor' только для ФРОНТА.
		return <h1 {...blokProps} >__SAVE(React JSX) 2__</h1>;
	},
} );
