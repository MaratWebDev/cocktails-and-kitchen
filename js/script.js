$(document).ready(function() {

  // alert("hello!!!");
    $('.menu').click(function(){
      $('header').toggleClass('active')
      $('.intro').toggleClass('active')
      $('section').toggleClass('active')
      $('#menu').toggleClass('active')
      $('footer').toggleClass('active')
    })
    // $('a').on('click', function() {
    //   event.preventDefault();
    //   var drinkSeason = $(this).data('season');
    //   var drinkType = $(this).data('type');
    // });
});