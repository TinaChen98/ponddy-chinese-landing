$(document).ready(function(){
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
})

function goHero() {
  $('html,body').animate({scrollTop:$('.hero').offset().top - 90},300)  
}