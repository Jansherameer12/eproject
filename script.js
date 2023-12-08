function Onclick() {
  Swal.fire({
    title: "Success!",
    text: "The message sent successfully!",
    icon: "success"
  });
}


const scroll = new LocomotiveScroll({
  el: document.querySelector('#blur'),
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
    title: "Yellowstone National Park",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.`,
    imageUrl: "images/park1po.png",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",

  });
}

function park2() {
  Swal.fire({
    title: "Hingol National Park",
    text: `Hingol National Park or Hungol National Park is one of the largest national parks in Pakistan, located in the Makran coastal region. The park covers an area of about 6,100 square kilometres and is located 190 km from Karachi in the three districts of Gwadar, Lasbela and Awaran in Balochistan.`,
    imageUrl: "images/parkpop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",

  });
}

function park3() {
  Swal.fire({
    title: "Chitral Gol National Park",
    text: `Chitral Gol National Park is one of the National Parks of Pakistan. It is located in Lower Chitral District in Khyber-Pakhtunkhwa province of Pakistan beside the Chitral River, at a distance of two hours drive from Chitral town. The park is also known as Chitral National Park`,
    imageUrl: "images/park3pp.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",

  });
}

function park4() {
  Swal.fire({
    title: "Kirthar National Park",
    text: `The Kirthar National Park is situated in the Kirthar Mountains in Jamshoro District in Sindh, Pakistan. It was established in 1974 and encompasses over 3,087 km², making it the third largest national park in Pakistan`,
    imageUrl: "images/park4p.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",

  });
}

function park5() {
  Swal.fire({
    title: "Deosai National Park",
    text: `Deosai National Park is a high-altitude alpine plain and National Park located between Skardu District and ASTORE District in Gilgit-Baltistan, Pakistan. Deosai Plains are situated at an average elevation of 4,114 metres above sea level and considered as the second highest plateaus in the world.`,
    imageUrl: "images/park5pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",

  });
}

function park6() {
  Swal.fire({
    title: "Ayub National Park",
    text: `Ayub National Park, commonly known as Ayub Park or, historically, Topi Rakh Park, is a national park located on the Grand Trunk Road, not far away from the old presidency in Rawalpindi, Punjab, Pakistan. The park was established before the creation of Pakistan and covers an area of 313 acres`,
    imageUrl: "images/park6pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",

  });
}

function park7() {
  Swal.fire({
    title: "Yosemite National Park",
    text: `Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area.`,
    imageUrl: "images/park7pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",
    confirmButtonText: "Ok jan"

  });
}

function park8() {
  Swal.fire({
    title: "Zion National Park",
    text: `Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs. Zion Canyon Scenic Drive cuts through its main section, leading to forest trails along the Virgin River. The river flows to the Emerald Pools, which have waterfalls and a hanging garden. Also along the river, partly through deep chasms, is Zion Narrows wading hike.`,
    imageUrl: "images/park8pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "Custom image",

  });
}