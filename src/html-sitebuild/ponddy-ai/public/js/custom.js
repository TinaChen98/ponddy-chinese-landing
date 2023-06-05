$(document).ready(function(){
  var owl = $('.owl-carousel')

  owl.owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoWidth:true,
    items:5
  })

  $('.next-btn').click(function() {
    owl.trigger('next.owl.carousel')
  })

  $('.prev-btn').click(function() {
    owl.trigger('prev.owl.carousel', [343])
  })
})

function goHome() {
  $('html,body').animate({scrollTop:$('#main').offset().top - 90},300);
}

function goAbout() {
  $('html,body').animate({scrollTop:$('#who-we-are').offset().top + 180},300);
}

function goProducts() {
  $('html,body').animate({scrollTop:$('#what-we-do').offset().top - 90},300);
}

function goNews() {
  $('html,body').animate({scrollTop:$('#news').offset().top - 90},300);
}