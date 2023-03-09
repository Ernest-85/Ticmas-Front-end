/*addEventListener('DOMContentLoaded', () => {
    const bt_menu = document.querySelector('.bt_menu')
    if (bt_menu) {
        bt_menu.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.Toggle('show')
        })
    }
})*/
const bt_menu = document.querySelector('bt_menu');
const menu_items = document.querySelector('menu_items');

bt_menu.addEventListener('click', () => {
    enlaces.classList.Toggle('activado');
});