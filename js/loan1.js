$(function () {
    initCheckedRadios();
    $('input').change(function () {
        initCheckedRadios();
    });
});

function initCheckedRadios(){
    $('input').each(function () {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('active');
        } else {
            $(this).closest('tr').removeClass('active');
        }
    });
}