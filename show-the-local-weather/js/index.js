$(document).ready(function(){
    cityJsonp();
});

function cityJsonp(){
  $.ajax({
    url:'https://api.map.baidu.com/location/ip?ak=U6TqCGVZc9AR1CeT2i5eYmHGG0L4MEug&callback=?',
    type:'get',
    dataType:'jsonp',
    success:function(data){
    var cityName=data.content.address_detail.city;
    jsonp(createUrl(cityName));
  }
  });
}
//请求聚合数据
function jsonp(url){
  $.ajax({
    url:url,
    type:'get',
    dataType:'jsonp',
    success:function(response){
    var data=response.result;
  var infos=document.getElementsByClassName('info');
  infos[0].innerHTML=data.today.city;
  infos[1].innerHTML=data.today.date_y;
  infos[2].innerHTML=data.today.week;
  infos[3].innerHTML=data.today.weather;
  infos[4].innerHTML=data.sk.temp+'℃';
  infos[5].innerHTML=data.sk.wind_direction+data.sk.wind_strength;
  infos[6].innerHTML=data.sk.humidity;
  infos[7].innerHTML=data.sk.time;
  infos[8].innerHTML=data.today.uv_index;
  infos[9].innerHTML=data.today.wash_index;
  infos[10].innerHTML=data.today.dressing_advice;
  var futures=document.getElementsByClassName('future');
for(var i=0;i<futures.length;i++){
  var fus=futures[i].getElementsByClassName('fu');
  var str=data.future[i+1].date;
  fus[0].innerHTML=str.substr(0,4)+'-'+str.substr(4,2)+'-'+str.substr(6,2);
  fus[1].innerHTML=data.future[i+1].week;
  fus[2].innerHTML=data.future[i+1].weather;
  fus[3].innerHTML=data.future[i+1].temperature;
};
changeimg(response);
  }
  });
}
function createUrl(){
  var cityName='';
  if(arguments.length==0){
    cityName=document.getElementById('city').value;
  }
  else{
    cityName=arguments[0];
  }
  var url='https://v.juhe.cn/weather/index?cityname='+encodeURI(cityName)+'&format=2&key=de121620c47d0e3f01c16ef09e17bde4'+'&callback=?';
  return url;
}
//处理天气数据  
function changeimg(data){
  var Img = document.getElementById("image");
    var firstWeatherId=data.result.today.weather_id.fa;
    chooseImg(firstWeatherId,Img);
}
function chooseImg(id,index){
    var add='image/'+id+'.png'
    index.src=add;
}
