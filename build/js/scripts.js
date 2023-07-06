// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if(event.target){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)





// SWIPER

const swiperReview = new Swiper('.review__swiper', {
  
  autoplay: {
    delay: 2000,
  },
  
  slidesPerView: 1,
  spaceBetween: 20,
  
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});







// MAGNIFIC

$(document).ready(function() {
  // Инициализируем Magnific Popup
  $('.modal-link').magnificPopup({
    type: 'inline',
    closeMarkup: '<button title="%title%" class="mfp-close">×</button>'
  });

  // Функция для открытия модального окна 1
  $('#btn1').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal1'
      },
      type: 'inline'
    });
  });

});

