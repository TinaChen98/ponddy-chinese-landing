$('#fb_qrcode').qrcode({
    text: 'https://www.facebook.com/groups/PonddyReader'
});


$(document).ready(function() {
    var menu = false
    var lazyLoadInstance = new LazyLoad({
        threshold: 0,
        elements_selector: 'section, a, img'
    })

    $('#navBtn').click(function() {
        $('html,body').animate({ scrollTop: $('.form').offset().top - 90 }, 300)
    })

    $('.navbar-toggler').click(function() {
        if (menu) {
            $(".navbar-close-icon").addClass("navbar-toggler-icon").removeClass("navbar-close-icon")
            $(".navbar-collapse").css("visibility", "hidden")
            $(".navbar-nav").css("height", "auto")
        } else {
            $(".navbar-toggler-icon").addClass("navbar-close-icon").removeClass("navbar-toggler-icon")
            $(".navbar-collapse").css("visibility", "inherit")
            $(".navbar-nav").css("height", "100vh")
        }
        menu = !menu
    })

})
