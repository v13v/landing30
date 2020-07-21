const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');
    const popUpAnimation = () => {
        if (window.innerWidth <= 768) {
            popup.style.display = `block`;//выполнять
        } else {
            popup.style.display = `block`;
            popupContent.style.opacity = '0';
            let count = 0;
            const toggleOpacity = setInterval(() => {
                if (count < 1) {
                    popupContent.style.opacity = count += 0.1;
                } else {
                    clearInterval(toggleOpacity);
                }
            }, 70);
        }
    };
    popupBtn.forEach(elem  => {
        elem.addEventListener('click', popUpAnimation);
    });
    popup.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};
export default togglePopUp;