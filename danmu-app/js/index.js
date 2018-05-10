var val = document.getElementById("inp");
var win = document.getElementById("win");
var out = document.getElementById("out");
var del = document.getElementById("del");
var colors = function(){
    return  Math.floor(Math.random() * 225);
  };
  var r = colors(),
    g = colors(),
    b = colors();
function getRandomcolor(){
  return "rgb(" + r + "," + g + "," + b + ")";
}
//发射
$(document).ready(function(){
  $('#out').click( function() {
  var p = document.createElement("p");
  p.innerHTML = val.value;
    document.getElementById("inp").value='';
  win.appendChild(p);
 $('p').attr("color",getRandomcolor());
      $('p').animate({marginRight:'100%'},{duration:30000,complete:function(){
       $(p).remove();
       }});
});
 //var time=20000+10000*Math.random();
 $('#del').click(function(){
  $('#win').empty();
});
});