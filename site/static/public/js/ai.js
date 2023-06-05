$(document).ready(function(){
  var lazyLoadInstance = new LazyLoad({
    threshold: 0
  });

  $('a[href*="http://blog.ponddy.com/"]').attr('target', '_blank')
  
  var owl = $('.owl-carousel')
  var menu = false  

  owl.owlCarousel({
    loop:true,
    margin:30,
    autoWidth:true,
    items:5
  })

  $('.navbar-toggler').click(function() {    
    if (menu) {
      $(".navbar-close-icon").addClass("navbar-toggler-icon").removeClass("navbar-close-icon")
    } else {
      $(".navbar-toggler-icon").addClass("navbar-close-icon").removeClass("navbar-toggler-icon")
    }
    menu = !menu    
  })

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide')
    $(".navbar-close-icon").addClass("navbar-toggler-icon").removeClass("navbar-close-icon")
    menu = false
  })

  $('.next-btn').click(function() {
    if (screen.width < 1024) {
      owl.trigger('next.owl.carousel')
    } else {
      owl.trigger('prev.owl.carousel', [343])
    }
  })

  $('.prev-btn').click(function() {
    if (screen.width < 1024) {
      owl.trigger('prev.owl.carousel', [343])
    } else {
      owl.trigger('next.owl.carousel')
    }
  })

  $('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active')
    $('.navbar-nav .nav-link').parent().removeClass('active')
    $(this).addClass('active')
    $(this).parent().addClass('active')
  })

  $('#navLogo').click(function() {
    $('html,body').animate({scrollTop:$('#main').offset().top - 90},300)
  })

  $('#navHome').click(function() {
    $('html,body').animate({scrollTop:$('#main').offset().top - 90},300)
  })

  $('#navAbout').click(function() {
    $('html,body').animate({scrollTop:$('#who-we-are1').offset().top},300)
  })

  // $('#navProducts').click(function() {
  //   $('html,body').animate({scrollTop:$('#what-we-do').offset().top - 90},300)
  // })
  $( "#navProducts" ).attr("href", "/products/")

  $('#navNews').click(function() {
    $('html,body').animate({scrollTop:$('#news').offset().top - 90},300)
  })

  $( "#navCareer" ).attr("href", "/career/")

  $('#navContact').click(function() {
    $('html,body').animate({scrollTop:$('#contact').offset().top - 90},300)
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
  })

    $('.scroll-up-arrow').tooltip('show')
  
    particlesJS.load('knowledge', '/public/js/particlesjs-config.json', function () {
        // console.log('callback - particles.js config loaded')
    });
})
