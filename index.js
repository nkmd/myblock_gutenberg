/** #########################################################
 *  файл ЛОГИКИ нашего блока
 ########################################################## */


// Регистрируем
var registerBlockType = wp.blocks.registerBlockType;

/* В целях демонстрации пишим простым React компонентом НЕ компилируя JSX
   https://legacy.reactjs.org/docs/react-without-jsx.html
*/
//  Подключаем React который есть в самом WP (НЕ компилируя JSX)
var createElement = wp.element.createElement;

// Передаём псевданим нашего API (block.json)
registerBlockType("genius/myblock", {
    // вывод на страницу АДМИНКИ
    edit: function () {
        return createElement('h1', {className: "admin_title"}, '_EDIT(React)_');
    },
    // вывод на страницу ФРОНТЕНД пользователя
    save: function () {
        return createElement('h1', {className: "front_title"}, '_SAVE(React)_');
    },
});