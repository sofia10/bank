var swiper = new Swiper('.s1', {
    slidesPerView: 1,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

var swiper = new Swiper('.s2', {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl: '.partners .swiper-button-next',
        prevEl: '.partners .swiper-button-prev',
    },
});