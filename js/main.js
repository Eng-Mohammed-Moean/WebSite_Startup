const swiper = new Swiper('.swiper', {
  // Optional parameters
  // loop: true,

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

// const navbar_nav = document.querySelector(".navbar-nav").querySelectorAll("a");
// console.log(navbar_nav);
// navbar_nav.forEach(element => {
//   element.addEventListener("click", () => {
//     navbar_nav.forEach(nav => nav.classList.remove("active"))
//     element.classList.add("active");
//   })
// });


window.onscroll = () => {
  if (scrollY < 700) {
    document.querySelector(".link_Home").classList.add("active");
  } else {
    document.querySelector(".link_Home").classList.remove("active");
  }
  if (scrollY >= 700 && scrollY <= 1346) {
    document.querySelector(".link_Solutions").classList.add("active");
  } else {
    document.querySelector(".link_Solutions").classList.remove("active");
  }
  if (scrollY >= 1346 && scrollY <= 1900) {
    document.querySelector(".link_Services").classList.add("active");
  } else {
    document.querySelector(".link_Services").classList.remove("active");
  }
  if (scrollY > 1900 && scrollY <= 2500) {
    document.querySelector(".link_About").classList.add("active");
  } else {
    document.querySelector(".link_About").classList.remove("active");
  }
  if (scrollY > 2500 && scrollY <= 3342) {
    document.querySelector(".link_Feedback").classList.add("active");
  } else {
    document.querySelector(".link_Feedback").classList.remove("active");
  }
}