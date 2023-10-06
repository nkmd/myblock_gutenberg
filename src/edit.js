/* #########################################################
 *  Код для редактора ( Родительский Блок Контейнер ) - Админка Gutenberg
 ########################################################## */

/* =================================================================
* !!! СОБРАНА ПАМЯТКА. МНОГИЕ ИМПОРТЫ НУЖНО СМОТРЕТЬ В ПРЕДИДУЩИХ УРОКАХ !!!
*
*  <BlockControls ... - кнопки база, массивом.
*  <AlignmentToolbar /> - "выравнивание по" , готовый элемент.
*  { text && ( ... ) } - отобразит только когда есть текст в поле
*  <ToolbarGroup> - группа с кнопками внутри |[B][I][U]|
*  <ToolbarButton .../> - кнопка в "ТулБар -е"
*  <ToolbarDropdownMenu ... > Выподающий список, кнопки массивом.
*  <RichText ...> - Тип и контент блока, для сохранения в админке.
*  <InspectorControls> - 'Block' в сайдбаре, свойства блока. '@wordpress/block-editor'
*  <PanelBody ...> - Раздел 'Block -а' в сайдбаре, '@wordpress/components'
*  <TextControl ...> - Текстовое поле в Разделе который в Сайдбаре
*
*  <InnerBlocks ...>  - Позволяет в контейнер на странице, вставлять вложенные блоки.
*  <RangeControl ...> - Ползунок
* ================================================================== */


// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';

// Импортируем  (уст-й: npm i @wordpress/components)
import { PanelBody, RangeControl } from '@wordpress/components';

// Импортируем "Транслэёшенс Рэди" Возможность перевода (уст-й: npm i @wordpress/i18n)
import { __ } from '@wordpress/i18n';

// создаст: build/index.css - Подкл. в block.json
import './editor.scss';


// Получение на "Админ" части значений и сохранение на Админке (attributes из block.json)
export default function Edit( { attributes, setAttributes } ) {
	const { columns } = attributes;

	return (
		<div { ...useBlockProps( {
			className: `the-${ columns }-columns`,
		}) } >

			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __('Columns', 'myblocks' ) }
						min={ 1 }
						max={ 4 }
						value={ columns }
						onChange={ (val) => setAttributes( { columns: val } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks
				allowedBlocks={ [ 'genius/myblock' ] }
				orientation="horizontal"
				template={ [
					[
						'genius/myblock'
					],
					[
						'genius/myblock'
					],
				] }
			/>

		</div>
	);
}


/* ****************
 allowedBlocks={ [ 'core/image' ] }
 allowedBlocks={ [ 'genius/myblock ' ] }
 ------------------------------------------
 Демо Данные (не placeholder):
	template={ [
		[
			'genius/myblock',
			{
				title: 'Title - Demo title',
				description: 'Description text - Demo content'
			}
		],
		[
			'genius/myblock',
			{
				title: 'Title (block 2) - Demo title',
				description: 'Description text (block 2) - Demo content'
			}
		],
	] }
  ------------------------------------------

**************** */