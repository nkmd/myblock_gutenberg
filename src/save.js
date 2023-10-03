/* #########################################################
 *  Код для фронтенда сайта
 ########################################################## */

// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)
// И Получние компонента  из 'block-editor' для сохранения на "Фронт"
import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';

export default function save() {
	// визуальная часть (для ФРОНТА). Сохранение на "Фронт".
	return (
		<div { ...useBlockProps.save() } >
			<InnerBlocks.Content />
		</div>
	);
}
