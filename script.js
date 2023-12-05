function Onclick(){
    Swal.fire({
      title: "Success!",
      text: "The message sent successfully!",
      icon: "success"
    });
  }
 

  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});





const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});