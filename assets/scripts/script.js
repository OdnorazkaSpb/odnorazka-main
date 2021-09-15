// // Anchor navigation
// document.querySelectorAll('a[href^="#"').forEach(link => {

//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         let href = this.getAttribute('href').substring(1);

//         const scrollTarget = document.getElementById(href);

//         const topOffset = document.querySelector('.scrollto').offsetHeight;
//         // const topOffset = 0; // если не нужен отступ сверху 
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });
//     });
// up button
(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight / 6;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -10);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();