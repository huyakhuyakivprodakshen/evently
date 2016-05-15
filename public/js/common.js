(function(){
  $(".section__text, .list-shedule, .list-accordeon").mCustomScrollbar();
})();

(function() {
  $('.list-accordeon__item').find('input').click(function(){
    $(this).parent().toggleClass("list-accordeon__item--active");
  })
})();

(function() {
  var hidden = true;
  var menu = $('#header-nav');
  var burger = $('#btn-burger');

  toggleMenu(640);

  $(window).resize(function(){
    toggleMenu(640);
    if (!hidden) {
      growHeader();
    }
  });

  $('#btn-burger').click(function(){
    $('#header-nav').slideToggle();
    if (hidden) {
      shrinkHeader();
    } else {
      growHeader();
    }
  });

  function toggleMenu(breakpoint) {
    windowWidth = window.innerWidth;
    if (windowWidth <= breakpoint) {
      menu.hide();
      burger.show();
    } else {
      menu.show();
      burger.hide();
    }
  }

  function shrinkHeader() {
    $('#timer').animate({'margin-top': '20px'});
    $('#promo-btn').animate({'margin-top': '20px'});
    $('#header').animate({'height': '+=120px'});
    hidden = false;
  }

  function growHeader() {
    $('#promo-btn').animate({'margin-top': '50px'});
    $('#timer').animate({'margin-top': '90px'});
    $('#header').animate({'height': '-=120px'});
    hidden = true;
  }
})();
