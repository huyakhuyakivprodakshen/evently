(function(){
  var badges = $('#slider-sponsors').find('li.list-slider__item');
  var btnPrev = $('#slider-sponsors').find('button.slider__prev-sm');
  var btnNext = $('#slider-sponsors').find('button.slider__next-sm');
  var numBadges = badges.length;
  var prevBadge = 0;
  var currentBadge = 1;
  var nextBadge = 2;
  $(badges[prevBadge]).css('margin-left','-100%');
  $(badges[nextBadge]).css('margin-left','100%');
  btnPrev.click(function(){
    $(badges[currentBadge]).animate({'margin-left': "-=100%"}, 800);
    $(badges[nextBadge]).animate({'margin-left': "-=100%"}, 800);
    prevBadge = currentBadge;
    currentBadge = nextBadge;
    nextBadge++;
    if(nextBadge == numBadges) {
      nextBadge = 0;
    }
    $(badges[nextBadge]).css('margin-left','100%');
  });

  btnNext.click(function(){
    $(badges[currentBadge]).animate({'margin-left': "+=100%"}, 800);
    $(badges[prevBadge]).animate({'margin-left': "+=100%"}, 800);
    nextBadge = currentBadge;
    currentBadge = prevBadge;
    prevBadge--;
    if(prevBadge == -1) {
      prevBadge = numBadges-1;
    }
    $(badges[prevBadge]).css('margin-left','-100%');
  });
})();
