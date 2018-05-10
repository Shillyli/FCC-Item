var content='';
var test=true;//计算一次之后，再输入数字需要重新开始
var ans='';
$(document).ready(function(){
  $('button').click(function(){
    var text=$(this).attr('value');
    if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%"){
      if(test==true){
        content=content+text;
      $('#input').val(content);}
      else{
        content=text;
        $('#input').val(content);
        test=true;
      }
    }
    else if(text=='AC'){
      content='';
      $('#input').val(content);
    }
    else if(text=='CE'){
      content=content.slice(0,-1);
      $('#input').val(content);
    }
    else if(text=='='){
      content=eval(content);
      $('#input').val(content);
      test=false;
    }
    else if(text=='Ans'){
      ans=content;
      $('#input').val(content);
      test=true;
    }
  });
});