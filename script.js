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



function boo() {
  var cart = document.getElementById('cart');
  cart.style.right = '0';
  // window.addEventListener('click', function () {
  //   cart.style.right = '-1000px';
  // }); // Closing parenthesis was added here
}

// function popshow(){
//   var pop= document.getElementById('pop');
//   pop.style.display="block";
//   document.getElementById('blur').style.filter="5px";
//   document.body.style.overflow="hidden"
// }

function park1() {
  Swal.fire({
    title: "Yellowstone",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.
    Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic
    canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous,
    Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and
    antelope.`,
    imageUrl: "images/Kruger National Park.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    
  });
}
function park2() {
  Swal.fire({
    title: "Yellowstone",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.
    Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic
    canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous,
    Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and
    antelope.`,
    imageUrl: "images/Kruger National Park.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    
  });
}
function park3() {
  Swal.fire({
    title: "Yellowstone",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.
    Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic
    canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous,
    Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and
    antelope.`,
    imageUrl: "images/Kruger National Park.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    
  });
}
function park4() {
  Swal.fire({
    title: "Yellowstone",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.
    Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic
    canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous,
    Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and
    antelope.`,
    imageUrl: "images/Kruger National Park.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    
  });
}
function park5() {
  Swal.fire({
    title: "Yellowstone",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.
    Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic
    canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous,
    Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and
    antelope.`,
    imageUrl: "images/Kruger National Park.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    
  });
}
function park6() {
  Swal.fire({
    title: "Yellowstone",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.
    Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic
    canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous,
    Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and
    antelope.`,
    imageUrl: "images/Kruger National Park.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    
  });
}
function park7() {
  Swal.fire({
    title: "Yellowstone",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.
    Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic
    canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous,
    Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and
    antelope.`,
    imageUrl: "images/Kruger National Park.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    
  });
}
function park8() {
  Swal.fire({
    title: "Yellowstone",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.
    Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic
    canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous,
    Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and
    antelope.`,
    imageUrl: "images/Kruger National Park.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    
  });
}

