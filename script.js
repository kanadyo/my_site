// フェードインさせる
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
  });
});

//   トップページに戻るやつ
  $(document).ready(function() {
    // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
      // declare variable
      var topPos = $(this).scrollTop();

      // if user scrolls down - show scroll to top button
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

      } else {
        $(scrollTop).css("opacity", "0");
      }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;

    }); // click() scroll top EMD

  }); // ready() END


//スクロール
$("#navabout").on('click', function(){
    const aboutArea = $("#about").offset().top;
    $(window).scrollTop(aboutArea);
});

$("#navfavhob").on('click', function(){
  const eventArea = $("#favhob").offset().top;
  $(window).scrollTop(eventArea);
});
