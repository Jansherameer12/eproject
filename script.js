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



// Menu icon responsive

var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var isMenuOpen = false; 
menu.addEventListener('click', function () {
    if (isMenuOpen) {
        nav.style.left = "-100%"; 
        menu.classList.remove('fa-close');
        menu.classList.add('fa-bars');
    } else {
        nav.style.left = "0";
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-close');
    }
    isMenuOpen = !isMenuOpen;
});

function cart() {
  var number = Math.floor(Math.random() * 90) + 10;
  Swal.fire({
    title: "You have booked a ticket!",
    text: `Your id is ${number + Date.now().toString()}`,
    icon: "success"
  });
}



function book() {
  var cart = document.getElementById('cart');
  cart.style.right = '0';
  // window.addEventListener('click', function () {
  //   cart.style.right = '-1000px';
  // }); // Closing parenthesis was added here
}
