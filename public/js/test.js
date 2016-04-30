(function($){
  $(window).load(function(){
    $(".section__text, .section__text--sm, .section__shedule").mCustomScrollbar();
  });
})(jQuery);

(function() {
  var menu = $('#header-nav');
  toggleElement(menu, 640);
  $(window).resize(function(){
    toggleElement(menu, 640);
  })
})();

function toggleElement(element, size) {
  var windowWidth = $(window).width();
  (windowWidth <= 640) ? element.css('display','none') : element.css('display','block');
}
