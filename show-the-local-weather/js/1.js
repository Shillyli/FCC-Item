$.getScript("http://api.map.baidu.com/location/ip?ak=U6TqCGVZc9AR1CeT2i5eYmHGG0L4MEug", function(data, textStatus){
   console.log(data); //data returned
   console.log(textStatus); //success
   console.log("Load was performed.");
});