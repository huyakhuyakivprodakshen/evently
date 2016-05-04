(function($){
  $(window).load(function(){
    $(".section__text, .section__text--sm, .section__shedule, .list-accordeon").mCustomScrollbar();
  });
})(jQuery);

(function() {
  var windowWidth = $(window).width();
  var menu = $('#header-nav');
  (windowWidth <= 640) ? menu .css('display','none') : menu.css('display','block');
  $(window).resize(function(){
    windowWidth = $(window).width();
    (windowWidth <= 640) ? menu.css('display','none') : menu.css('display','block');
  })
})();

(function() {
  $('.list-accordeon__item').find('input').click(function(){
    $(this).parent().toggleClass("list-accordeon__item--active");
  })
})();

(function() {
  var currentPage = 0;
  var btns = $('.section__pager').find('.button-page');
  var shedules = $('#slider-shedule').find('li.list-slider__item');
  $('.section__pager').find('.button-page').click(function(){
    $(btns[currentPage]).removeClass('button-page--active');
    $(shedules[currentPage]).attr('class','list-slider__item animated zoomOut');
    $(shedules[currentPage]).css('z-index','0');
    currentPage = btns.index(this);
    $(this).addClass("button-page--active");
    $(shedules[currentPage]).attr('class', 'list-slider__item animated zoomIn');
    $(shedules[currentPage]).css('z-index','1');
  });
})();
