new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});