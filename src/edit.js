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
import { format, dateI18n, getSettings } from '@wordpress/date'; // работа с датами
import { PanelBody, ToggleControl, QueryControls } from '@wordpress/components'; // Панель "Блок" в сайдбаре и переключатель
import { useSelect } from '@wordpress/data'; // работа с запросами (см. ниже) ($ npm install @wordpress/data)
import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
	// ### получение атрибутов из 'attributes' (block.json) ###
	const { postsPerPage, showImage, order, orderBy, category } = attributes;

	//  ### JS запрос на выборку постов в админку. ###
	//  [postsPerPage, order, orderBy] -> сразу "рефрешить" и посты при измени поля в 'Блок'
	const posts = useSelect(
		(select) => {
			return wp.data.select('core').getEntityRecords('postType', 'post', {
				per_page: postsPerPage,
				_embed: true,
				order, // идентично order: order,
				orderby: orderBy,
				categories: category ? category : []
			});
		},
		[postsPerPage, order, orderBy, category]
	);
	// console.log(posts);


	//  ### JS запрос на выборку категорий (таксономия типа category, не post_tag) в админку.
	const categories = useSelect((select) => {
			return wp.data.select('core').getEntityRecords('taxonomy', 'category', {
				per_page: -1,
			});
		},
		[]
	);


	// ### вывод постов на экран админки ###
	const blockProps = useBlockProps();

	// ### колбэки - сохранение в базу значений полей при изменении ###
	const onCangeToggleImage = (value) => {
		setAttributes({ showImage: value });
	};
	const onChangePostsPerPage = (value) => {
		setAttributes({ postsPerPage: value });
	};
	const onChangeOrder = (value) => {
		setAttributes({ order: value });
	};
	const onChangeOrderBy = (value) => {
		setAttributes({ orderBy: value });
	};
	const onChangeCategory = (value) => {
		setAttributes({ category: value });
	};


	return (
		<>
			{/* поля в сайдбаре 'Блок' */}
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						label="Display Images"
						checked={ showImage }
						onChange={ onCangeToggleImage }
					/>
					{/*<QueryControls numberOfItems={ postsPerPage } onNumberOfItemsChange={ onChangePostsPerPage }  maxItems={ 6 } minItems={ 1 } order="" onOrderChange={(val)=>console.log(val)} orderBy="" onOrderByChange={(val)=>console.log(val)} />*/}
					<QueryControls
						numberOfItems={ postsPerPage }
						onNumberOfItemsChange={ onChangePostsPerPage }
						maxItems={ 6 }
						minItems={ 1 }
						order={ order }
						onOrderChange={ onChangeOrder }
						orderBy={ orderBy }
						onOrderByChange={ onChangeOrderBy }
						categoriesList={ categories }
						selectedCategoryId={ category }
						onCategoryChange={ onChangeCategory }
						// onCategoryChange={ (val)=>console.log(val) }
					/>
				</PanelBody>
			</InspectorControls>

			{/* рендер постов на странице админки */}
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
