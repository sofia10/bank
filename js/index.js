var myScreenWidth = $(document).width();
var delay = 4000;
var spaceBetween = 100;
var mySwiper = new Swiper('.s1', {
    spaceBetween: 30,
    autoplay: {
        delay: delay,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-elements',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="col-md-4 bull d-flex flex-column justify-content-between '+className+'">\n' +
                '                            <div class="progress-line">\n' +
                '                                <div class="line">\n' +
                '                                    <div class="line line-gr"></div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                            <div class=" d-flex align-items-center">\n' +
                '                                <img src="'+menu.img[index]+'" alt="">\n' +
                '                                <div class="title">'+menu.text[index]+'</div>\n' +
                '                            </div>\n' +
                '                        </div>';
        },
    },
});

mySwiper.on('slideChangeTransitionStart', function () {
    setTimeout(function () {
        move();
    },spaceBetween)
});


$('.bull').click(function () {
    $('.line-gr').stop();
});
// $(function () {
//     if(myScreenWidth <= 991) {
//         if ($('.bull').hasClass('active')) {
//             $(this).show();
//             alert();
//         }
//     }
// });
function move(){
    var progress = $('.line-gr')[mySwiper.activeIndex];
    $('.line-gr').css({'width':'0'});
    $('.line-gr').closest('.bull').removeClass('active');
    $(progress).closest('.bull').addClass('active');
    $(progress).animate({
        width: '100%'
    }, delay)
}




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
    breakpoints:{
        991: {
            slidesPerView: 4,
        },
        575: {
            slidesPerView: 3,
        }
    }
});
$(function () {
    move();
})
