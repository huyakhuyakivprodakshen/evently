(function(){
  var posts = $('#slider-blog img');
  var btnPrev = $('#slider-blog').find('button.slider__prev');
  var btnNext = $('#slider-blog').find('button.slider__next');
  var numPosts = posts.length;
  var prevPost = numPosts-1;
  var currentPost = 0;
  var nextPost = 1;
  $(posts[currentPost]).css('z-index','2');

  btnPrev.click(function(){
    $(posts[currentPost]).css('z-index','2');
    $(posts[prevPost]).css('z-index','1');
    btnPrev.prop("disabled",true);
    btnNext.prop("disabled",true);
    $(posts[currentPost]).animate({'margin-left': "-=960px"}, 800, function(){
      $(posts[currentPost]).css('z-index','0');
      $(posts[currentPost]).css('margin','auto');
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
    $(posts[currentPost]).css('z-index','2');
    $(posts[nextPost]).css('z-index','1');
    btnPrev.prop("disabled",true);
    btnNext.prop("disabled",true);
    $(posts[currentPost]).animate({'margin-left': "+=960px"}, 800, function(){
      $(posts[currentPost]).css('z-index','0');
      $(posts[currentPost]).css('margin','auto');
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
