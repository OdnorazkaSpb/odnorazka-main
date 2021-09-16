// up button
(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight / 6; // скорость
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show'); // условие отображения
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show'); // условие НЕ отображения))00)
      }
    }
  
    function backToTop() { // подъём
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -10);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();