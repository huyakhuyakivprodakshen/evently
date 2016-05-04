(function(){
  var slides = $('#slider-blog img');
  var posts = $('#slider-post').find('li.list-slider__item');
  var btnPrev = $('#slider-blog').find('button.slider__prev');
  var btnNext = $('#slider-blog').find('button.slider__next');
  var numPosts = slides.length;
  var prevPost = numPosts-1;
  var currentPost = 0;
  var nextPost = 1;
  $(slides[currentPost]).css('z-index','2');
  btnPrev.click(function(){
    $(slides[currentPost]).css('z-index','2');
    $(slides[prevPost]).css('z-index','1');
    btnPrev.prop("disabled",true);
    btnNext.prop("disabled",true);
    $(posts[currentPost]).attr('class','list-slider__item animated zoomOut');
    $(posts[prevPost]).attr('class', 'list-slider__item animated zoomIn');
    $(slides[currentPost]).animate({'margin-left': "-=960px"}, 800, function(){
      $(slides[currentPost]).css('z-index','0');
      $(slides[currentPost]).css('margin','auto');
      nextPost = currentPost;
      currentPost = prevPost;
      prevPost--;
      btnPrev.prop("disabled",false);
      btnNext.prop("disabled",false);
      if(prevPost == -1) {
        prevPost = numPosts-1;
      }
    });
  })
  btnNext.click(function(){
    $(slides[currentPost]).css('z-index','2');
    $(slides[nextPost]).css('z-index','1');
    btnPrev.prop("disabled",true);
    btnNext.prop("disabled",true);
    $(posts[currentPost]).attr('class','list-slider__item animated zoomOut');
    $(posts[nextPost]).attr('class', 'list-slider__item animated zoomIn');
    $(slides[currentPost]).animate({'margin-left': "+=960px"}, 800, function(){
      $(slides[currentPost]).css('z-index','0');
      $(slides[currentPost]).css('margin','auto');
      prevPost = currentPost;
      currentPost = nextPost;
      nextPost++;
      btnPrev.prop("disabled",false);
      btnNext.prop("disabled",false);
      if(nextPost == numPosts) {
        nextPost = 0;
      }
    });
  })
})()
