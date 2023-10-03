/* #########################################################
 *  Код для редактора - Админка Gutenberg
 ########################################################## */

/* !!! СОБРАНА ПАМЯТКА. МНОГИЕ ИМПОРТЫ НУЖНО СМОТРЕТЬ В ПРЕДИДУЩИХ УРОКАХ !!!
*  <BlockControls ... - кнопки база, массивом.
*  <AlignmentToolbar /> - "выравнивание по" , готовый элемент.
*  { text && ( ... ) } - отобразит только когда есть текст в поле
*  <ToolbarGroup> - группа с кнопками внутри |[B][I][U]|
*  <ToolbarButton .../> - кнопка в "ТулБар -е"
*  <ToolbarDropdownMenu ... > Выподающий список, кнопки массивом.
*  <RichText ...> - Тип и контент блока, для сохранения в админке.
*  <InspectorControls> - 'Block' в сайдбаре, свойства блока.
*  <PanelBody ...> - Раздел 'Block -а' в сайдбаре,
*  <TextControl ...> - Текстовое поле в Разделе который в Сайдбаре
*
*  <InnerBlocks ...> - Позволяет в контейнер на странице, вставлять вложенные блоки.
* */


// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)
// И Получние компонента 'BlockControls',... из 'block-editor'
import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

import './editor.scss'; // создаст: build/index.css - Подкл. в block.json

// Получение на "Админ" части значений
export default function Edit( ) {

	return (
		<div { ...useBlockProps() } >
			<InnerBlocks
				allowedBlocks={ [ 'genius/myblock' ] }
			/>
		</div>
	);
}

/*
* allowedBlocks={ [ 'core/image' ] }
* allowedBlocks={ [ 'genius/myblock ' ] }
* */