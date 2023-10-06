/* #########################################################
 *  ГЛАВНЫЙ файл ЛОГИКИ нашего блока - Плагина ( Родительский Блок Контейнер )
 ########################################################## */

/* Подключаем React С компиляцией JSX  (Пр.2) ******************
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

// Импорт дочернего блока из папки /src/block/index.js
import './block';

// Импортируем код (для Админки редактора и Фронтенда)- функци '/src/edit.js' и '/src/save.js'
import Edit from './edit';
import Save from './save';

// Импортируем файл стилий CSS (для компилятора - подхватит без доп. настроек уст-к)
// style.scss - для ФРОНТЕНДА и АДМИНКИ !
import './style.scss'; // ! создаст: build/style-index.css - Подкл. в block.json

// Передаём псевданим нашего API (block.json)
registerBlockType( 'genius/myblocks', {
	// вывод на страницу АДМИНКИ
	edit: Edit,
	// вывод на страницу ФРОНТЕНД пользователя
	save: Save,
} );