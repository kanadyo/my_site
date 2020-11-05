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


  // スムーズスクロール
  $(function(){
    // #で始まる出発地点をクリックした場合に処理を実行
    $('a[href^=#]').click(function() {
       // 出発地点の値を取得
       var href= $(this).attr("href");
       // 到着地点を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 到着地点を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, 400, 'swing');
       return false;
        });
 });
 

