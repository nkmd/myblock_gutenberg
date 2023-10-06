/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block/edit.js":
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/* #########################################################
 *  Код для редактора - Дочернего Блока (Админка)
 ########################################################## */

// Импорт компонент

// Импорт "транслэйшенс рэди" (интернализацию для "textDomain")

function Edit({
  attributes,
  setAttributes
}) {
  // Экспортируем title; и description; из /src/block/index.js
  const {
    title,
    description
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h2",
    allowedFormats: [],
    value: title,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your Title', 'myblocks'),
    onChange: val => setAttributes({
      title: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    allowedFormats: [],
    value: description,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your Description', 'myblocks'),
    onChange: val => setAttributes({
      description: val
    })
  }));
}

/*
*  allowedBlocks={ [ 'core/image' ] }
*  allowedFormats={ [ '' ] }
* */

/***/ }),

/***/ "./src/block/index.js":
/*!****************************!*\
  !*** ./src/block/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/block/save.js");
/* #########################################################
 *  Регистрация дочерного блока
 ########################################################## */

// Импортируем код блоков (уст-й:  npm i @wordpress/blocks)

// Импортируем интернализацию для "textDomain"


// Импорт файла сохранения и отображения на Админке (/src/blocs/edit.js)

// Импорт файла отображения сохранения и  на Фронтенд (/src/blocs/save.js)


// Регистр. дочернего блока, передача title; description; icon; (по аналогии block.json)
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('genius/myblock', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('My Block (child)', 'myblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Single Block (child)', 'myblocks'),
  icon: 'universal-access',
  parent: ['genius/myblocks'],
  // Показать - только если есть родитель, выделен.
  supports: {
    html: false,
    // откл. возможность html редактировать
    reusable: false // откл. возможность доб. ссылку - ?
  },

  attributes: {
    title: {
      type: 'string',
      // тип
      source: 'html',
      // не дублировать в метта поле
      selector: 'h2'
    },
    description: {
      type: 'string',
      source: 'html',
      // не дублировать в метта поле
      selector: 'p'
    }
  },
  // вывод на страницу АДМИНКИ
  //edit: () => <p> Admin Edit </p>,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // вывод на страницу ФРОНТЕНДА
  // save: () => <p> Frontend Save</p>,
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/block/save.js":
/*!***************************!*\
  !*** ./src/block/save.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/* #########################################################
 *  Код для Фронтенда части - Дочернего Блока
 ########################################################## */

// Импорт компонент

function Save({
  attributes
}) {
  // Экспортируем title; и description; из /src/block/index.js
  const {
    title,
    description
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: description
  }));
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

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
*  <InnerBlocks ...> - Позволяет в контейнер на странице, вставлять вложенные блоки.
*
* ================================================================== */

// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)


// Импортируем  (уст-й: npm i @wordpress/components)


// Импортируем "Транслэёшенс Рэди" Возможность перевода (уст-й: npm i @wordpress/i18n)


// создаст: build/index.css - Подкл. в block.json


// Получение на "Админ" части значений и сохранение на Админке
function Edit({
  attributes,
  setAttributes
}) {
  const {
    columns
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: `the-${columns}-columns`
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Columns', 'myblocks'),
    min: 1,
    max: 4,
    value: columns,
    onChange: val => setAttributes({
      columns: val
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['genius/myblock'],
    orientation: "horizontal",
    template: [['genius/myblock'], ['genius/myblock']]
  }));
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ "./src/block/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
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


// Импорт дочернего блока из папки /src/block/index.js


// Импортируем код (для Админки редактора и Фронтенда)- функци '/src/edit.js' и '/src/save.js'



// Импортируем файл стилий CSS (для компилятора - подхватит без доп. настроек уст-к)
// style.scss - для ФРОНТЕНДА и АДМИНКИ !
 // ! создаст: build/style-index.css - Подкл. в block.json

// Передаём псевданим нашего API (block.json)
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('genius/myblocks', {
  // вывод на страницу АДМИНКИ
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // вывод на страницу ФРОНТЕНД пользователя
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/* #########################################################
 *  Код для фронтенда сайта ( Родительский Блок Контейнер )
 ########################################################## */

// Импортируем "Блок эдитор" (уст-й: npm i @wordpress/block-editor)
// И Получние компонента  из 'block-editor' для сохранения на "Фронт"

function save({
  attributes
}) {
  const {
    columns
  } = attributes;

  // визуальная часть (для ФРОНТА). Сохранение на "Фронт".
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: `the-${columns}-columns`
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmyblock"] = self["webpackChunkmyblock"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map