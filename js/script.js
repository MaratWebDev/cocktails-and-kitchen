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
  
  // Adding function closing navigation bar after clicking <li>

    $('a[href*=#]:not([href=#])').click(function() {
      $('header').removeClass('active')
      $('.intro').removeClass('active')
      $('section').removeClass('active')
      $('#menu').removeClass('active')
      $('footer').removeClass('active')
    });


    // Adding scrolling effect to anchors in nav

    //Smooth scroll anchors on the same page 
//https://css-tricks.com/snippets/jquery/smooth-scrolling/

    var offsetHeight = $("header").outerHeight();

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

               if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - offsetHeight
                }, 500);
                return false;
            }
        }
    });


    // Adding FitVids to resize smoothly <iframe>

    $(".box").fitVids();

    // Changing background color on scrolling at a certain position

    var scroll_pos = 0;

    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();

        if (scroll_pos < 250) {
          
            $("header").css('background-color', '#DDF1FA');
            $("h1").css("color", "#000");        
        }
        else if (scroll_pos > 250) {

            $("header").css('background-color', '#448490')
            $("h1").css('color', '#fff');
        }

    })



















});