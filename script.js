const swiper2 = new Swiper('.swiper-2', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        315: {
            slidesPerView: 1,
        },
        530: {
            slidesPerView: 2,
        },
        995: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    },
});
const swiper3 = new Swiper('.swiper-3', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        300: {
            slidesPerView: 1
        },
        430: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        995: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
    },
});