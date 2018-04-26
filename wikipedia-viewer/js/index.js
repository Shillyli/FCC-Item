$(document).ready(function() {
          var url='https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=';
    //向维基百科发送获取数据
    function search(url) {
      $.ajax({
        async : false,
        url: url,
        error:function(){
          alert('wrong');
        },
        success: function(response) {
          var id = [];
          for (pageid in response.query.pages) {
            id.push(pageid);
          }
          for (var i = 0; i < id.length; i++) {
            var Id=id[i];
            var page = response.query.pages[Id];
            var title = page.title;
            var href =
              "http://en.wikipedia.org/wiki/" + encodeURIComponent(title);
            var extract = page.extract;
            var content = "";
            if (page.thumbnail) {
              content = "<img src='" + page.thumbnail.source + "'/>";
            }
            content += extract;

            $(".content")
              .append("<li class='li-"+i+"'></li>");
            var list = ".li-" + i;
            $(list).append(
              "<h3 class='title'><a href='" + href + "' target='_blank'>" + title + "</a></h3>"
            );
            $(list).append("<p>" + content + "</p>");
          }
        }
      });
    }
    $('.btn').click(function() {
      var searchtxt = $("#search").val();
        if (searchtxt !== "input your search content" && searchtxt !== "") {
        var searchurl = url + searchtxt;
        search(searchurl);
        //动画效果
        $("#header").animate({ marginTop: "40px"}, 600, function() {
          $(".content").show(600);
        });
        $("#weiki").fadeOut(500);
      }
      else {
        $("#search")
          .val("input your search content")
          .trigger("focus");
      }
    });
    $("#search").focus(function() {
        $('#search:text').select();
        $("#header").animate({ marginTop: "180px" }, 600, function() {
          $("#weiki").fadeIn(500);
        $(".content")
          .stop(true, true)
          .animate({ height: "hide" }, 600);
      });
           });
      $("#search").keyup(function(event) {
        // 按回车触发搜索
        if (event.keyCode == 13) {
          $(".btn").trigger("click");
          $("#search").blur();
        }
      });
  });