/* ********************************************************
*
*  АДМИН часть
*
*  ===ПАМЯТКА===
*    !!! На странице админки поста .Открываем дебаг. Переходим в "КОНСОЛЬ"
*   !! запускать из консоли следует дважды (первый раз запрос на сервер шлёт).
*	> 'разрешить вставку' [RU версия]
*	> wp.data.select('core') [enter]
*	Данный объект использует кучу ментодов.
*   Например интересует метод:
*	wp.data.select('core').getEntityRecords('postType', 'post') [enter]
*
*	// два поста
*	wp.data.select('core').getEntityRecords('postType', 'post', {per_page: 2}) [enter]
*	// изображения тоже возвращать:
*	wp.data.select('core').getEntityRecords('postType', 'post', {per_page: 1, _embed: true})
*	( 0/_embedded/wp:futuredmedia/0/source/url/ )
* */

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { format, dateI18n, getSettings } from '@wordpress/date' // работа с датами
import { PanelBody, ToggleControl, QueryControls } from '@wordpress/components' // Панель "Блок" в сайдбаре и переключатель
import { useSelect } from '@wordpress/data'; // работа с запросами (см. ниже) ($ npm install @wordpress/data)
import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
	const { postsPerPage, showImage } = attributes; // получение атрибутов из 'attributes' (block.json)

	//  ### JS запрос на выборку постов в админку. [postsPerPage] -> сразу обнавлять и посты исходя из 'postsPerPage' ###
	const posts = useSelect(
		(select) => {
			return wp.data.select('core').getEntityRecords('postType', 'post', {
				per_page: postsPerPage,
				_embed: true
			});
		},
		[postsPerPage]
	);
	// console.log(posts);

	// ### вывод постов на экран админки ###
	const blockProps = useBlockProps();
	const onCangeToggleImage = (value) => {
		setAttributes({ showImage: value })
	}
	const onChangePostsPerPage = (value) => {
		setAttributes({ postsPerPage: value })
	}

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<ToggleControl label="Display Images" checked={ showImage } onChange={ onCangeToggleImage } />
					<QueryControls numderOfItems={ postsPerPage } onNumberOfItemsChange={ onChangePostsPerPage }  maxItems={ 6 } minItems={ 1 } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps } >
				{ posts && posts.map((post)=> {
					const featuredImage = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && post._embedded['wp:featuredmedia'][0];
					// console.log(featuredImage);
					return (
						<div key={ post.id }>
							{/*{ showImage && featuredImage && <img src={ featuredImage.media_details.sizes.large.source_url } /> }*/}
							{ showImage && featuredImage && <img src={ featuredImage.media_details.sizes.full.source_url } alt={ featuredImage.alt_text } /> }

							{ post.date_gmt && <time dateTime={ format('c', post.date_gmt) } >
								{ dateI18n(getSettings().formats.date, post.date_gmt) }
							</time> }

							<h2>
								<a href={ post.link }>{ post.title.rendered }</a>
							</h2>
						</div>
					);
				})}
			</div>
		</>
	);
}
