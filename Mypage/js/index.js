$(document).ready(function() {
// 导航滚动监听
$('body').scrollspy({target: '#navbar'})
// 导航栏点击隐藏
$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');});

// 导航点击事件
$('.title').click(function(event){
  var $anch = $(this);
  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},{easing:'easeInOutExpo',duration:1500,complete:callback});
  event.preventDefault();
  });
  $('.another').click(function(){
                      alert('更多正在全力突破大脑防线，只为遇见你');
    return false;
                      });
});
//图片轮播
$(document).ready(function(e) {
	var progress = $(".progress"),li_width = $("#b04 li").length;
    var unslider04 = $('#b04').unslider({
		dots: true,
		complete:function(index){
			progress.animate({"width":(100/li_width)*(index+1)+"%"});
		}
	}),

	data04 = unslider04.data('unslider');
	$('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
});