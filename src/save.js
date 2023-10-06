/* #########################################################
 *  Код для фронтенда сайта ( Родительский Блок Контейнер )
 ########################################################## */

// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)
// И Получние компонента  из 'block-editor' для сохранения на "Фронт"
import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { columns } = attributes;

	// визуальная часть (для ФРОНТА). Сохранение на "Фронт".
	return (
		<div { ...useBlockProps.save( {
				className: `the-${ columns }-columns`,
			}
		) } >
			<InnerBlocks.Content />
		</div>
	);
}
