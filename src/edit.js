/* #########################################################
 *  Код для редактора - Админка Gutenberg
 ########################################################## */

// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)
// И Получние компонента 'RichText' из 'block-editor'
import { useBlockProps, RichText } from '@wordpress/block-editor';


import './editor.scss'; // создаст: build/index.css - Подкл. в block.json

// Получение на "Админ" части значений ( attributes - болжен быть указан в block.json!, setAttrtibutes )
export default function Edit( { attributes, setAttributes } ) {
	// const blokProps = useBlockProps(); // выз. '@wordpress/block-editor'
	// console.log(blokProps); // что в объекте вообще.
	// вывод служебных тегов, классов в админке  {...blokProps}
	// return <h1 { ...blokProps }>__EDIT(React JSX) 3__</h1>;

	// Обращение к компоненту 'RichText'
	const { text } = attributes; // поучение в 'text' из 'attributes'
	return (
		<RichText
			{ ...useBlockProps() }
			tagName="h1"
			value={ text } // значение из константы
			onChange={ ( value ) => setAttributes( { text: value } ) } //! сохр в админке не на Фронт!
			placeholder={ 'Введите текст' }
			allowedFormats={ [ 'core/bold' ] } // допустимые элементы оформления текста [bold]
		/>
	);
}
