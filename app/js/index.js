let popClose = document.querySelector(".rv-popup__close");
let pop = document.querySelector(".rv-popup");

if (popClose) {
  popClose.addEventListener('click', function () {
    pop.classList.remove("rv-popup--active");
  });
}


var search = document.getElementById('search');
var buttonSearch = document.getElementById('button-search');

if (search.disabled) {
  buttonSearch.classList.add('button-search__active')
}

let swiper = new Swiper('.different__swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    630: {}
  }
});



