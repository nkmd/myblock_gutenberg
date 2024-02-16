/* #########################################################
 *  Код для редактора - Дочернего Блока (Админка)
 ########################################################## */

// Импорт нужных компонент ( MediaPlaceholder - только для загрузки картинок, )
import { useBlockProps, RichText, MediaPlaceholder, BlockControls, MediaReplaceFlow, InspectorControls } from '@wordpress/block-editor';
// Импорт "транслэйшенс рэди" (интернализацию для "textDomain")
import { __ } from '@wordpress/i18n';
// Импорт 'спинер' (показать загрузку изобр. на сервер), И 'ToolbarButton', 'PanelBody', ...
import { Spinner, ToolbarButton, PanelBody, TextControl} from '@wordpress/components';
// Импорт компонента - показывать 'спинер' только при загрузке
import { isBlobURL } from '@wordpress/blob';

export default function Edit( {attributes , setAttributes} ) {
    // Экспортируем title; и description; image_id, ... из /src/block/index.js
    const { title, description, image_id, image_url, image_alt } = attributes;

    // посмотреть что WP кладёт в image_url (В реал. времени - не грузит изображение сразу)
    // console.log(image_url);

    // вывели дублированный код в отдельную функ.
    const onSelectURL = ( val ) => {
        setAttributes( {
            image_id: undefined,
            image_url: val,
            image_alt: ''
        })
    };
    const onSelect = ( val ) => {
        setAttributes( {
            image_id: val.id,
            image_url: val.url,
            image_alt: val.alt
        })
    }

    return (
        <>
            { image_url && !isBlobURL( image_url ) && (
                <InspectorControls>
                    <PanelBody title={ __('Settings for Image', 'myblocks') }>
                        <TextControl
                            label={ __('Change ALT', 'myblocks') }
                            value={ image_alt }
                            help={ __('Change attribute text ALT', 'myblocks') }
                            onChange={ (val) => setAttributes({ image_alt: val }) }
                        />
                    </PanelBody>
                </InspectorControls>
            )}

            { image_url && (
                <BlockControls>
                    <MediaReplaceFlow
                        name={ __('Replace Image','myblocks') }
                        onSelect={ onSelect }
                        onSelectURL={ onSelectURL }
                        accept="image/*"
                        allowedTypes={ ['image'] }
                        //disableMediaButtons={ image_url }
                        mediaId={ image_id }
                        mediaURL={ image_url }
                    />
                    <ToolbarButton onClick={ () => setAttributes( {image_id: undefined, image_url: undefined, image_alt: ''} ) }>
                        { __('Remove Image', 'myblocks') }
                    </ToolbarButton>
                </BlockControls>
            )}

            <div { ...useBlockProps() } >
                { image_url && (
                    <div className={` image ${isBlobURL(image_url) ? 'is-loading': 'loaded' }` }>
                        <img src={ image_url } alt={ image_alt } id={ image_id } />
                        { isBlobURL(image_url) && <Spinner /> }
                    </div>
                ) }

                <MediaPlaceholder
                    onSelect={ onSelect }
                    onSelectURL={ onSelectURL }
                    accept="image/*"
                    allowedTypes={ ['image'] }
                    disableMediaButtons={ image_url }
                />

                <RichText
                    tagName="h2"
                    allowedFormats={ [] }
                    value={ title }
                    placeholder={ __('Your Title', 'myblocks') }
                    onChange={ ( val ) => setAttributes( { title: val } ) }
                />
                <RichText
                    tagName="p"
                    allowedFormats={ [] }
                    value={ description }
                    placeholder={ __('Your Description', 'myblocks') }
                    onChange={ ( val ) => setAttributes( { description: val } ) }
                />
            </div>
        </>
    );
}


/*
/* **********************************************
  allowedBlocks={ [ 'core/image' ] }
  allowedFormats={ [ '' ] }
* -----------------------------------
     <MediaPlaceholder
        onSelect={ ( val ) => console.log( val ) }
        onSelectURL={ ( val ) => console.log( val ) }
        accept="image/*"
        allowedTypes={ ['image'] }
    />
* -----------------------------------


********************************************** */
