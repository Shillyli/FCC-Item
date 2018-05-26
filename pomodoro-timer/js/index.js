$(document).ready(function(){
  var Break;
  var Session;
  var val=true;
  var t;
  var n=1;
//break时间段点击事件
$('#debreak').click(function(){
	Break=Number($('.break').html());
  if(Number($('.break').html())>0){
    Break--;
    $('.break').html(Break);
  }
});
  $('#inbreak').click(function(){
    if(Number($('.break').html())<5){
    Break++;
    $('.break').html(Break);
    }
  });
  //session时间段点击事件
$('#desession').click(function(){
	Session=Number($('.session').html())
  if(Number($('.session').html())>0){
    Session--;
    $('.session').html(Session);
    if(Session>=10){
    $('#timer').html(Session+':00');
  }
else{
	$('#timer').html('0'+Session+':00');
}}
});
  $('#insession').click(function(){
    if(Number($('.session').html())<25){
    Session++;
    $('.session').html(Session);
    if(Session>=10){
    $('#timer').html(Session+':00');
  }
else{
	$('#timer').html('0'+Session+':00');
}}
  });
  //倒计时
  function poTimer(){
  	var inner;
  	  	var s=Number(($('#timer').html()).slice(3,5));
  		var m=Number(($('#timer').html()).slice(0,2));
  		if(s>0||m>0){
  		if(m>=10){
  			if(s>=10){
  			s--;
  			inner=m+':'+s;
  		}
  		else if(s<10&&s>0){
  			s--;
  			inner=m+':0'+s;
  		}
  		else{
  			s=59;
  			m--;
  			inner=m+':'+s;
  		}
  		}
  		if(m<10){
  			if(s>=10){
  				s--;
  			inner='0'+m+':'+s;
  			}
  			else if(s<10&&s>0){
  			s--;
  			inner='0'+m+':0'+s;
  		}
  		else{
  			s=59;
  			m--;
  			inner='0'+m+':'+s;
  		}
  		}
  		$('#timer').html(inner);
  	}
  		//休息时间倒计时
 else {
 	if(n==1){
  			if(confirm('工作时间结束！是否开始休息？')){
  				clearInterval(t);
  				$('#breSes').text('Break!');
  			$('#timer').html('0'+$('.break').html()+':00');
  			n=0;
  			t=setInterval(poTimer,1000);
}}
else {
	alert('本次番茄钟已结束！');
	clearInterval(t);
	reSet();
}}
  		}
  $('#timerButton').click(function(){
  	if(val==true){
  	t=setInterval(poTimer,1000);
  	val=false;
  }
  else{
    clearInterval(t);
    val=true;
  }
  });
  //重置按钮
  function reSet(){
  	clearInterval(t);
  	$('.session').html('25');
  	$('.break').html('5');
  	$('#timer').html('25:00');
  }
  $('.Button').click(function(){
  	reSet()
  });
});