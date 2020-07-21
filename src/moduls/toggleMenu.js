const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    menu.addEventListener('click', event => {
        const target = event.target;
        for (let i = 0; i < menuItems.length; i++) {
            target.classList.contains('ul>li');
        }
        target.classList.contains('close-btn');
        handlerMenu();
    });
};
export default toggleMenu;