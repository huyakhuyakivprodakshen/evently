(function(){
  var slides = $('#slider-speaker img');
  var cards = $('#slider-info').find('li.list-slider__item');
  var btnPrev = $('#slider-speaker').find('button.slider__prev');
  var btnNext = $('#slider-speaker').find('button.slider__next');
  var numSlides = slides.length;
  var prevSlide = numSlides-1;
  var currentSlide = 0;
  var nextSlide = 1;
  $(slides[currentSlide]).css('z-index','2');
  console.log(cards);
  btnPrev.click(function(){
    $(slides[currentSlide]).css('z-index','2');
    $(slides[prevSlide]).css('z-index','1');
    btnPrev.prop("disabled", true);
    btnNext.prop("disabled", true);
    $(cards[currentSlide]).attr('class','list-slider__item animated zoomOut');
    $(cards[prevSlide]).attr('class', 'list-slider__item animated zoomIn');
    $(slides[currentSlide]).animate({'margin-left': "-=960px"}, 800, function(){
      $(slides[currentSlide]).css('z-index','0');
      $(slides[currentSlide]).css('margin','auto');
      nextSlide = currentSlide;
      currentSlide = prevSlide;
      prevSlide--;
      btnPrev.prop("disabled",false);
      btnNext.prop("disabled",false);
      if(prevSlide == -1) {
        prevSlide = numSlides-1;
      }
    });
  })
  btnNext.click(function(){
    $(slides[currentSlide]).css('z-index','2');
    $(slides[nextSlide]).css('z-index','1');
    btnPrev.prop("disabled",true);
    btnNext.prop("disabled",true);
    $(cards[currentSlide]).attr('class','list-slider__item animated zoomOut');
    $(cards[nextSlide]).attr('class', 'list-slider__item animated zoomIn');
    $(slides[currentSlide]).animate({'margin-left': "+=960px"}, 800, function(){
      $(slides[currentSlide]).css('z-index','0');
      $(slides[currentSlide]).css('margin','auto');
      prevSlide = currentSlide;
      currentSlide = nextSlide;
      nextSlide++;
      btnPrev.prop("disabled",false);
      btnNext.prop("disabled",false);
      if(nextSlide == numSlides) {
        nextSlide = 0;
      }
    });
  })
})();
