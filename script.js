function Onclick() {
  Swal.fire({
    title: "Success!",
    text: "The message sent successfully!",
    icon: "success"
  });
}
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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

// Cart
function cart() {
  var number = Math.floor(Math.random() * 90) + 10;
  Swal.fire({
    title: "You have booked a ticket!",
    text: `Your id is ${number + Date.now().toString()}`,
    icon: "success"
  });

}
// park display model/popup
function park1() {
  Swal.fire({
    title: "Yellowstone National Park",
    text: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.`,
    imageUrl: "images/park1po.png",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "National Park",
    showConfirmButton: false

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
    imageAlt: "National Park",
    showConfirmButton: false

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
    imageAlt: "National Park",
    showConfirmButton: false

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
    imageAlt: "National Park",
    showConfirmButton: false

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
    imageAlt: "National Park",
    showConfirmButton: false

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
    imageAlt: "National Park",
    showConfirmButton: false

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
    imageAlt: "National Park",
    showConfirmButton: false

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
    imageAlt: "National Park",
    showConfirmButton: false,
    didOpen: () => {
      const modalContainer = Swal.getPopup();
      if (modalContainer) {
        modalContainer.style.zIndex = 2000;
      }
    }

  });
}
function park9() {
  Swal.fire({
    title: "Dry Tortugas National Park",
    text: `Dry Tortugas National Park is in the Gulf of Mexico, west of Key West, Florida. It comprises 7 islands, plus protected coral reefs. Garden Key is home to beaches and the 19th-century Fort Jefferson. Loggerhead Key has a lighthouse and sea turtles. On nearby Loggerhead Reef, the Windjammer Wreck, the remains of an 1875 ship, is a popular dive site. Bush Key is a nesting site for seabirds like sooty terns.`,
    imageUrl: "images/park9pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "National Park",
    showConfirmButton: false,
    didOpen: () => {
      const modalContainer = Swal.getPopup();
      if (modalContainer) {
        modalContainer.style.zIndex = 2000;
      }
    }

  });
}
function park10() {
  Swal.fire({
    title: "Biscayne National Park",
    text: `Biscayne National Park encompasses coral reefs, islands and shoreline mangrove forest in the northern Florida Keys. Its reefs and islands are accessible only by boat. Dolphins, turtles and pelicans live in Biscayne Bay Lagoon. The underwater Maritime Heritage Trail links dive sites, most of them shipwrecks. On Boca Chita Key, Boca Chita Lighthouse has coastal views. A museum at Convoy Point explains local ecosystems.`,
    imageUrl: "images/park10pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "National Park",
    showConfirmButton: false,
    didOpen: () => {
      const modalContainer = Swal.getPopup();
      if (modalContainer) {
        modalContainer.style.zIndex = 2000;
      }
    }

  });
}
function park11() {
  Swal.fire({
    title: "Hawaiʻi Volcanoes National Park",
    text: `Hawaii Volcanoes National Park is on Hawaii Island (the Big Island). At its heart are the Kīlauea and Mauna Loa active volcanoes. The Crater Rim Drive passes steam vents and the Jaggar Museum, which features volcanology exhibits and a viewpoint overlooking Halema'uma'u Crater. Thick ferns mark the entrance to the Thurston Lava Tube (Nāhuku). The Chain of Craters Road weaves over lava. Trails crisscross the park.`,
    imageUrl: "images/park11pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "National Park",
    showConfirmButton: false,
    didOpen: () => {
      const modalContainer = Swal.getPopup();
      if (modalContainer) {
        modalContainer.style.zIndex = 2000;
      }
    }

  });
}
function park12() {
  Swal.fire({
    title: "Badlands National Park",
    text: `Badlands National Park is in South Dakota. Its dramatic landscapes span layered rock formations, steep canyons and towering spires. Bison, bighorn sheep and prairie dogs inhabit its sprawling grasslands. The Badlands Loop Road (Highway 240) winds past scenic lookouts. Several trails begin near the Ben Reifel Visitor Center. The Fossil Exhibit Trail is a boardwalk with displays on fossils uncovered in the park.`,
    imageUrl: "images/park12pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "National Park",
    showConfirmButton: false,
    didOpen: () => {
      const modalContainer = Swal.getPopup();
      if (modalContainer) {
        modalContainer.style.zIndex = 2000;
      }
    }

  });
}
function park13() {
  Swal.fire({
    title: "Acadia National Park",
    text: `Acadia National Park is a 47,000-acre Atlantic coast recreation area primarily on Maine's Mount Desert Island. Its landscape is marked by woodland, rocky beaches and glacier-scoured granite peaks such as Cadillac Mountain, the highest point on the United States’ East Coast. Among the wildlife are moose, bear, whales and seabirds. The bayside town of Bar Harbor, with restaurants and shops, is a popular gateway.`,
    imageUrl: "images/park13pop.jpg",
    imageWidth: 400,
    imageHeight: 200,
    showCloseButton: true,
    imageAlt: "National Park",
    showConfirmButton: false,
    didOpen: () => {
      const modalContainer = Swal.getPopup();
      if (modalContainer) {
        modalContainer.style.zIndex = 2000;
      }
    }

  });
}

// Typewriter
var app = document.getElementById('herotext');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Plan a visit?')
  .pauseFor(600)
  .deleteChars(16)
  .typeString('Indulge in flavors')
  .pauseFor(600)
  .deleteChars(18)
  .typeString('Discover history')
  .pauseFor(1000)
  .start();




  // TOP BTN

  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    var btn = document.querySelector(".btntop");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
    var navbar = document.getElementById("navbar")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  // ScrollToTop

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // AOS 
  AOS.init();

  // Contact Onclick function

  function contact() {
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('message').value="";
    Swal.fire({
      title: "Success!",
      text: "The message sent successfully!",
      icon: "success"
    });
  }
  
  