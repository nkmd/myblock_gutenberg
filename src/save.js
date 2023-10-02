/* #########################################################
 *  Код для фронтенда сайта
 ########################################################## */

// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)
// И Получние компонента 'RichText' из 'block-editor' для сохранения на "Фронт"
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	// const blokProps = useBlockProps.save(); // выз. '@wordpress/block-editor' только для ФРОНТА.

	const { text } = attributes; // поучение  'attributes' (block.json)

	// RichText.Content - только визуальная часть (для ФРОНТА). Сохранение на "Фронт".
	return (
		<RichText.Content
			{ ...useBlockProps.save() }
			tagName="h1"
			value={ text } // значение из константы
		/>
	);
}
