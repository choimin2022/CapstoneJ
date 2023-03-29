// 입력 필드 띄우는 함수
$(function() {
  $("input[type='text']").keypress(function(e) {   //<img class="tiger_chat" alt="image" src="character_mini.jpg">
    if (e.keyCode == 13 && $(this).val().length) {
      var _val = $(this).val();
      var _class = $(this).attr("class");
      $(this).val('');
      var _tar = $(".chat_wrap .inner").append('<div class="item '+_class+'"><div class="box"><p class="msg">' + _val + '</p><span class="time">' + currentTime() + '</span></div></div>');
      var lastItem = $(".chat_wrap .inner").find(".item:last");
      setTimeout(function() {
        lastItem.addClass("on");
        sendMessage(_val) //post로 보내는 함수 오른쪽은 예시 채팅 코드  
       /*setTimeout(function() {
          displayMessage("안녕하세요 영진전문대학교 챗봇입니다 무엇을 도와드릴까요?", "https://www.naver.com/", "네이버");
        }, 700); // 답변 메시지 숫자는 딜레이  */
      });

      var position = lastItem.position().top + $(".chat_wrap .inner").scrollTop();
      console.log(position);
      $(".chat_wrap .inner").stop().animate({
        scrollTop: position
      }, 500);
    }
  });
});

//챗봇 측 대답을 하는 함수 + url + 버튼, 메시지만 입력시 메시지만 나타남
function displayMessage(message, siteAddress, buttonName) {
  var _class = "yourmsg";
  var _val = message;
  var buttonHtml = '';

  if (siteAddress && buttonName) {
    buttonHtml = '<input type="button" name="b0" value="' + buttonName + '" onclick="window.open(\'' + siteAddress + '\', \'_blank\')">';
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="character_mini.jpg"><div class="box"><p class="msg">'
      +_val
      + '<br>'
      + buttonHtml
      + '</p><span class="time">'
      + currentTime()
      + '</span></div></div>');

  var lastItem = $(".chat_wrap .inner")
    .find(".item:last");
  setTimeout(function() {
    lastItem. addClass("on");
  }, 10);

  var position = lastItem.position().top
    + $(".chat_wrap .inner").scrollTop();
  console. log(position);

  $(".chat_wrap .inner").stop().animate({
    scrollTop: position
  }, 500);
}

// 시간
var currentTime = function() {
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var apm = hh >= 12 ? "오후" : "오전";
  hh = hh % 12;
  hh = hh ? hh : 12;
  mm = mm < 10 ? "0" + mm : mm;
  var ct = apm + " " + hh + ":" + mm + " ";
  return ct;
}

// html에 직접 시간을 주기 위한 함수
	$(function() {
	  var timeElements = $(".time");
	  var time = currentTime();
	  timeElements.text(time);
	});

