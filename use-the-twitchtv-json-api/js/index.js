//由于twitchtv不能注册登录，此处为借用https://codepen.io/mike652638/pen/yVGJMw的client-id
var channels=["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","ning886"];
var Img,name,href,game,view;
var index=0;
function getUrl(type,userId){
  return "https://api.twitch.tv/kraken/"+type+"/" + userId + "?client_id=5pkoj4ejkapzxzgq1f3a7dbry59s2r&duration=0&cache=false&noStore=true&callback=?"
}
function addChannel(){
  if(index>=channels.length){
    return;
  }
  var channel=channels[index];
   $.ajax({
      url:getUrl("channels",channel),
      dataType:'jsonp',
    error:function(){
      alert('连接失败');
    },
    success:function(data){
      index++;
      Img=data.logo;
      name=data.display_name;
      href=data.url;
      $.ajax({
      url:getUrl("streams",channel),
      dataType:'jsonp',
    error:function(){
      alert('wrong');
    },
    success:function(data){
      if(data.stream!=null){
        game=data.stream.game;
        view=data.stream.viewers;
        //添加元素
        $('#channel').append("<li class='list row online'><img src='"+Img+"'/><div class='info'><h3><a href='"+href+"' target='_blank'>"+name+"</a><span>直播中...</span></h3><p>直播内容："+game+"</p><p>观看人数："+view+"人</p></div></li>");
      }
      else{
        $('#channel').append("<li class='list row offline'><img src='"+Img+"'/><div class='info'><h3><a href='"+href+"' target='_blank'>"+name+"</a><span>主播不在家...</span></h3</div></li>");
      }
      addChannel();
    }
  });
       
      }
  });
 }
$(document).ready(function(){
  addChannel();
  $(".selector").click(function(){
    $('.selector').removeClass('active');
    $(this).addClass('active');
    var status=$(this).attr('id');
    if(status=='online'){
      $('.online').css('display','block');
      $('.offline').css('display','none');
    }
    if(status=='all'){
      $('.offline,.online').css('display','block');
    }
    if(status=='offline'){
      $('.offline').css('display','block');
      $('.online').css('display','none')
    }
  })
});