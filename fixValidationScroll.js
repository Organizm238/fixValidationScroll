(function ($, window, document) {
    $(function () {
        addOffsetToValidationScroll(100);
    });

    function addOffsetToValidationScroll(delay) {
        document.addEventListener('invalid', function(e){
            console.log( $(e.target));
            $(e.target).addClass("invalid");
            var offset = $('.header').height()+5;
            $('html, body').animate({scrollTop: $($(".invalid")[0]).offset().top - offset }, delay);
        }, true);
        document.addEventListener('focus', function(e){
            $(e.target).removeClass("invalid")
        }, true);
    }
}(window.jQuery, window, document));