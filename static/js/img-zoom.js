(function ($) {
  const $originalImg = $('.original-img');
  const $largeImg = $('.large-img');
  const $largeImgInner = $('.large-img-inner')
  const $originalOffset = $originalImg.offset();

  let hovered = false;

  $originalImg.mouseenter(function () {
    console.log('mouseenter');
    hovered = true;
    $largeImg.fadeIn();
  });

  $originalImg.mouseleave(function() {
    console.log('mouseleave');
    hovered = false;
    $largeImg.fadeOut();
  });

  $(document).bind('mousemove', function(e) {
    if (!hovered) {
      return;
    }

    let relx = e.pageX - $originalOffset.left;
    let rely = e.pageY - $originalOffset.top;

    $largeImgInner.css({
      left: relx*2 - relx*4,
      top: rely*2 - rely*4
    });

    console.log($largeImgInner);
    console.log(relx, rely);
  });

})(jQuery);
