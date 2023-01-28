// Custom Scripts
// Custom scripts

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
       content[i].style.display = display
       tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if ( target == item || target.parentNode == item ) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')

const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {
        735: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1414: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});



const menu = document.querySelector('.menu');
const headerInner = document.querySelector('.header__inner');
const body = document.querySelector('.main__body');

menu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
    headerInner.classList.toggle('active');
    body.classList.toggle('active');
})
