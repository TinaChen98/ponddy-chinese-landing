allJobList = ['sanjose-software-engineer', 'sanjose-web-designer', 'taipei-frontend-engineer',
    'taipei-senior-frontend-engineer', 'taipei-backend-engineer', 'taipei-marketing-commissioner',
    'taipei-chinese-teaching-commissioner', 'tientsin-chinese-teacher', 'taipei-administrative',
    'tientsin-chinese-textbook-editor', 'tientsin-english-textbook-editor', 'taipei-chinese-teaching-operation-pt',
    'taipei-chinese-teaching-edit-pt', 'taipei-english-pt', 'taipei-test-pt',
    'taipei-design-pt', 'taipei-chinese-online-teach-pt', 'taipei-client-relationship-commissioner',
    'taipei-marketing-planing-commissioner', 'taipei-accounting-pt', 'taipei-video-design-pt']
var currentlyCategory = 'sanjose-job'

$(document).ready(function () {
    var lazyLoadInstance = new LazyLoad({
        threshold: 0,
        elements_selector: 'section, a, img'
    });

    $('#navLocation').attr('href', 'jacascript::void(0)')
    $('a[href*="http://blog.ponddy.com/"]').attr('target', '_blank')
    $('#sanjose-job').show()
    $('#taipei-job').hide()
    $('#tientsin-job').hide()
    $('.job-detail').hide()
    var menu = false

    setCurrntJobByUrlHash()
    $(window).on('hashchange', function (e) {
        setCurrntJobByUrlHash()
    });
    $('.navbar-toggler').click(function () {
        if (menu) {
            $(".navbar-close-icon").addClass("navbar-toggler-icon").removeClass("navbar-close-icon")
        } else {
            $(".navbar-toggler-icon").addClass("navbar-close-icon").removeClass("navbar-toggler-icon")
        }
        menu = !menu
    })

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $(".navbar-close-icon").addClass("navbar-toggler-icon").removeClass("navbar-close-icon")
        menu = false
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scroll-up-arrow').fadeIn()
        } else {
            $('.scroll-up-arrow').fadeOut()
        }
    })

    $('.scroll-up-arrow').click(function () {
        $('.scroll-up-arrow').tooltip('hide')
        $('body,html').animate({
            scrollTop: 0
        }, 800)
        return false
    }).tooltip('show')

    var owl = $('.owl-carousel')
    owl.owlCarousel({
        items: 3,
        slideBy: 2,
        loop: false,
        margin: 22,
        autoWidth: true,
        autoheight: true
    })

    $('.navbar-nav .nav-link').click(function () {
        $('.navbar-nav .nav-link').removeClass('active')
        $('.navbar-nav .nav-link').parent().removeClass('active')
        $(this).addClass('active');
        $(this).parent().addClass('active');
    })

    $('#navLocation').click(function () {
        $('html,body').animate({scrollTop: $('#main').offset().top - 90}, 300)
    })

    $('.btn-hero').click(function () {
        $('html,body').animate({scrollTop: $('#jobs').offset().top - 90}, 300)
    })

    $('.loc-filter .item').click(function () {
        var targetCategory = $(this).attr('data')
        var owlTarget = $(this).attr('owl-target')

        owl.trigger("to.owl.carousel", [owlTarget, 500])
        $('.loc-filter .item').removeClass('choose')
        $(this).addClass('choose')
        $('.job-detail').hide(500)
        $('.jobs').hide(500)
        currentlyCategory = targetCategory
        window.location.hash = '#/' + targetCategory
        $('#' + targetCategory).show(500)
    })

    $('.job').click(function () {
        var jobDetail = $(this).attr('data')
        $('.job-detail').hide()
        $('#' + jobDetail).show(500)
        window.location.hash = '#/' + currentlyCategory + '/' + jobDetail
        $('.jobs').hide(500)
    })

    $('.back a').click(function () {
        $('.job-detail').hide(500)
        $('#' + currentlyCategory).show(500)
    })

})

function setCurrntJobByUrlHash() {
    var parts = window.location.hash.substring(1).split("/");
    currentlyCategory = parts[1]
    var jobDetail = parts[2]
    if (currentlyCategory && !jobDetail) {
        $('.loc-filter .item').removeClass('choose')
        chooseCurrentlyCategory(currentlyCategory)
        $('html,body').animate({scrollTop: $('#location').offset().top}, 300)
    } else if (allJobList.includes(jobDetail)) {
        $('.loc-filter .item').removeClass('choose')
        chooseCurrentlyCategory(currentlyCategory)
        showCurrentJob(jobDetail)
    }
}

function chooseCurrentlyCategory(jobDetail) {

    if (jobDetail.includes('sanjose')) {
        $('#sanjose').addClass('choose')
    } else if (jobDetail.includes('taipei')) {
        $('#taipei').addClass('choose')
    } else if (jobDetail.includes('tientsin')) {
        $('#tientsin').addClass('choose')
    }
    $('#sanjose-job').hide()
    $('#' + currentlyCategory).show()

}

function showCurrentJob(jobDetail) {
    $('#' + jobDetail).show()
    setTimeout(function () {
        $('html,body').animate({scrollTop: $('#' + jobDetail).offset().top})
    }, 300)

    $('.jobs').hide()
}
