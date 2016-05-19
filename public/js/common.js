(function(){
  $(".section__text, .list-shedule, .list-accordeon").mCustomScrollbar();
})();

(function(){
  $('#slider-gallery').find('img').click(function(){
    var fullImg = $(this).attr('data-full');
    var title = $(this).attr('data-title');
    var caption = $(this).attr('data-caption');
    var height = $(window).height();
    var modal = "<div id='modal' class='modal hidden'><div class='modal__inner'><button id='modal-close' class='modal__btn btn-close'><img src='img/design/icon-close.svg'></button><img src='img/content/"+fullImg+"'><strong>"+title+": </strong><span> "+caption+"</span></div></div>"
    $('.page').prepend(modal);
    $('#modal').css('height', height);
    $('#modal').attr('class', 'modal animated fadeIn');
    $('#modal-close').click(function(){
      var modal = $(this).parent().parent();
      modal.attr('class', 'modal animated fadeOut');
      modal.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
        modal.remove();
      });
    })
  })

})();

(function(){
  $("body").on('click', '#notice', function(){
    $(this).slideUp(400, function() {
      $(this).remove();
    });
  });
})();

(function(){
  $(".input").focus(function(){
    $(this).removeAttr('placeholder');
    if ($(this).hasClass('input--invalid')) {
      $(this).removeClass('input--invalid');
    }
  });
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


$(function(){

  var sections = $('.section'),
      inited = false;
  sections.addClass('hidden-section');
  sections.appear({ force_process: true });
  sections.on('appear', function() {
    $(this).addClass('animated fadeInUp');
  });
})
