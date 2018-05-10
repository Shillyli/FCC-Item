var content = "";
var author = "";
//从一言api获取引语
function getQuote() {
  $.getJSON("https://sslapi.hitokoto.cn/?encode=json", function(json) {
    content = json.hitokoto;
    author = json.from;
    $("#quote-text").html(content);
    $("#quote-author").html("——"+author);
  });
  //设置颜色变换
  var colors = function() {
    return  Math.floor(Math.random() * 225);
  };
  var r = colors(),
    g = colors(),
    b = colors();
  $("body").animate(
    {
      backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
    },
    1000
  ); 
  $(".button").animate(
    {
      backgroundColor: "rgb(" + r + "," + g + "," + b + ")"
    },
    1000
  ); 
  $(".text").animate(
    {
      color: "rgb(" + r + "," + g + "," + b + ")"
    },
    1000
  ); //animate()不能直接用于颜色设置，需要添加jquery-color插件
}
$(document).ready(function(){
getQuote();  $("#sendQQ").attr('href',"https://user.qzone.qq.com/529772565/infocenter");
$("#sendWei").attr('href','http://t.sina.com.cn');
$("#new-quote").on("click", getQuote);
});