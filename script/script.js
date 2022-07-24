$(document).ready(() => {
    $('.menuOpen').click(() => {
        $('.menu-wrapper').addClass('active')
    })

    $('.menuClose').click(() => {
        $('.menu-wrapper').removeClass('active')
    })
    
})

var swiper = new Swiper(".mySwiperProduct", {
        slidesPerView: "auto",
        spaceBetween: 28,
        navigation: {
          nextEl: ".bxs-chevron-right-circle",
          prevEl: ".bxs-chevron-left-circle",
        },
        breakpoints:{
          768: {
            slidesPerView: "2",
            spaceBetween: 50,
          },
          375: {
            slidesPerView: "1",
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: "4",
            spaceBetween: 50,
          }
        }
      });

      var swiper = new Swiper(".mySwiperTesti", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        autoplay: {
          delay: 4000
        }
      });

