(function(){

  function slideZoom(zoomOut, zoomIn) {
    zoomOut.attr('class','list-slider__item animated zoomOut');
    zoomOut.css('z-index','0');
    zoomIn.attr('class', 'list-slider__item animated zoomIn');
    zoomIn.css('z-index','1');
  };

  function slideLeft(prevItem, currentItem, prevBtn, nextBtn, itemsStatus, numItems) {
    currentItem.css('z-index','2');
    prevItem.css('z-index','1');
    prevBtn.prop("disabled", true);
    nextBtn.prop("disabled", true);
    currentItem.attr('class', 'img animated slideOutLeft');
    currentItem.one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
      currentItem.attr('class', 'img');
      currentItem.css('z-index','0');
      itemsStatus.next = itemsStatus.current;
      itemsStatus.current = itemsStatus.prev;
      itemsStatus.prev--;
      if(itemsStatus.prev == -1) {
        itemsStatus.prev = numItems-1;
      };
      prevBtn.prop("disabled", false);
      nextBtn.prop("disabled", false);
    });
  };

  function slideRight(nextItem, currentItem, prevBtn, nextBtn, itemsStatus, numItems) {
    currentItem.css('z-index','2');
    nextItem.css('z-index','1');
    prevBtn.prop("disabled", true);
    nextBtn.prop("disabled", true);
    currentItem.attr('class', 'img animated slideOutRight');
    currentItem.one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
      currentItem.attr('class', 'img');
      currentItem.css('z-index','0');
      itemsStatus.prev = itemsStatus.current;
      itemsStatus.current = itemsStatus.next;
      itemsStatus.next++;
      if(itemsStatus.next == numItems) {
        itemsStatus.next = 0;
      };
      prevBtn.prop("disabled", false);
      nextBtn.prop("disabled", false);
    });
  };

  var speakerSlides = $('#slider-speaker img');
  var speakerCards = $('#slider-info li.list-slider__item');
  var btnPrevSpeaker = $('#slider-speaker button.section__slider-prev');
  var btnNextSpeaker = $('#slider-speaker button.section__slider-next');
  var numSpeakers = speakerSlides.length;
  var speakersStatus = {'prev': numSpeakers-1, 'current': 0, 'next': 1};

  var postSlides = $('#slider-blog img');
  var postTexts = $('#slider-post li.list-slider__item');
  var btnPrevPost = $('#slider-blog button.section__slider-prev');
  var btnNextPost = $('#slider-blog button.section__slider-next');
  var numPosts = postSlides.length;
  var postsStatus = {'prev': numPosts-1, 'current': 0, 'next': 1};

  var currentPage = 0;
  var btns = $('.shedule__pager .btn-page');
  var shedules = $('#slider-shedule li.list-slider__item');

  $(postSlides[postsStatus.current]).css('z-index','2');
  $(speakerSlides[speakersStatus.current]).css('z-index','2');

  btnPrevSpeaker.click(function(){
    slideLeft($(speakerSlides[speakersStatus.prev]), $(speakerSlides[speakersStatus.current]), btnPrevSpeaker, btnNextSpeaker, speakersStatus, numSpeakers);
    slideZoom($(speakerCards[speakersStatus.current]), $(speakerCards[speakersStatus.prev]));
  });
  btnNextSpeaker.click(function(){
    slideRight($(speakerSlides[speakersStatus.next]), $(speakerSlides[speakersStatus.current]), btnPrevSpeaker, btnNextSpeaker, speakersStatus, numSpeakers);
    slideZoom($(speakerCards[speakersStatus.current]), $(speakerCards[speakersStatus.next]));
  });
  btnPrevPost.click(function(){
    slideLeft($(postSlides[postsStatus.prev]), $(postSlides[postsStatus.current]), btnPrevPost, btnNextPost, postsStatus, numPosts);
    slideZoom($(postTexts[postsStatus.current]), $(postTexts[postsStatus.prev]));
  });
  btnNextPost.click(function(){
    slideRight($(postSlides[postsStatus.next]), $(postSlides[postsStatus.current]), btnPrevPost, btnNextPost, postsStatus, numPosts);
    slideZoom($(postTexts[postsStatus.current]), $(postTexts[postsStatus.next]));
  });

  $('.shedule__pager').find('.btn-page').click(function(){
    var nextPage = btns.index(this);
    $(btns[currentPage]).removeClass('btn-page--active');
    $(this).addClass("btn-page--active");
    slideZoom($(shedules[currentPage]), $(shedules[nextPage]));
    currentPage = nextPage;
  });

})();

//SPONSOR
(function(){
  var badges = $('#slider-sponsors li.list-slider__item');
  var btnPrev = $('#slider-sponsors button.section__slider-prev-s');
  var btnNext = $('#slider-sponsors button.section__slider-next-s');
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
//GALLERY
(function(){
  var btnPrev = $('#slider-gallery button.section__slider-prev');
  var btnNext = $('#slider-gallery button.section__slider-next');
  var imgSet1 = $('.gallery__img--1 img.img');
  var imgSet2 = $('.gallery__img--2 img.img');
  var imgSet3 = $('.gallery__img--3 img.img');
  var imgSet4 = $('.gallery__img--4 img.img');
  var set = [imgSet1, imgSet2, imgSet3, imgSet4];
  var numSets = imgSet1.length;
  var prevSet = numSets-1;
  var currentSet = 0;
  var nextSet = 1;

  $.each(set, function(i, item){
    $(item[currentSet]).css('z-index','2');
  });

  btnPrev.click(function(){

    $.each(set, function(i, item) {
      $(item[currentSet]).css('z-index','2');
      $(item[prevSet]).css('z-index','1');
      $(item[currentSet]).attr('class','img animated slideOutLeft');
    });

    setTimeout(function(){
      $.each(set, function(i, item) {
        $(item[currentSet]).css('z-index','0');
        $(item[currentSet]).attr('class','img');
      }, 800);
    });

    nextSet = currentSet;
    currentSet = prevSet;
    prevSet--;
    if(prevSet == -1) {
      prevSet = numSets-1;
    }
  });

  btnNext.click(function(){

    $.each(set, function(i, item) {
      $(item[currentSet]).css('z-index','2');
      $(item[nextSet]).css('z-index','1');
      $(item[currentSet]).attr('class','img animated slideOutRight');
    });

    setTimeout(function(){
      $.each(set, function(i, item) {
        $(item[currentSet]).css('z-index','0');
        $(item[currentSet]).attr('class','img');
      }, 800);
    });

    prevSet = currentSet;
    currentSet = nextSet;
    nextSet++;
    if(nextSet == numSets) {
      nextSet = 0;
    }
  });

})();
