$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();

    $(document).scroll(function(){
        var scrollHeight = $(document).scrollTop();
        if(scrollHeight > 0)
            $('.site__header').addClass('stuck','slow');
        else
            $('.site__header').removeClass('stuck','slow');
    });

    $('.burger-btn').click(function(){
        $('.burger-nav').addClass('active');
    });

    $('.close-btn').click(function(){
        $('.burger-nav').removeClass('active');
    });

    $('.clicker-menu').click(function(){
        $('.bg-inner-menu').toggleClass('active');
    });
});