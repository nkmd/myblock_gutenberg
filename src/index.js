/** #########################################################
 *  файл ЛОГИКИ нашего блока
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
 ************************************************************* */

// Импортируем код блоков (уст-й:  npm i @wordpress/blocks)
import { registerBlockType } from '@wordpress/blocks';

// Передаём псевданим нашего API (block.json)
registerBlockType( 'genius/myblock', {
	// вывод на страницу АДМИНКИ
	edit: function () {
		return <h1 className="admin_title">__EDIT(React JSX) 2__</h1>;
	},
	// вывод на страницу ФРОНТЕНД пользователя
	save: function () {
		return <h1 className="front_title">__SAVE(React JSX) 2__</h1>;
	},
} );
