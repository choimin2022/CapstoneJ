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
      });

      var position = lastItem.position().top + $(".chat_wrap .inner").scrollTop();
      console.log(position);
      $(".chat_wrap .inner").stop().animate({
        scrollTop: position
      }, 500);  
      sendMessage(_val)          
    }
  });
});


// 버튼 클릭시 채팅바에 버튼 정보가 올라가고 자동으로 엔터가 쳐져서 정보 호출
     
$(function() {  
  $(".chat_wrap .inner").on("click", ".sendButton", function() {
    console.log('클릭');    
    var _var = $(this).text(); // 버튼 사이에 있는 텍스트를 저장함
    sendMessage(_var); 
    var _tar = $(".chat_wrap .inner").append('<div class="item mymsg"><div class="box"><p class="msg">' + _var + '</p><span class="time">' + currentTime() + '</span></div></div>');
    var lastItem = $(".chat_wrap .inner").find(".item:last");
    setTimeout(function() {
      lastItem.addClass("on");
    });

    var position = lastItem.position().top + $(".chat_wrap .inner").scrollTop();
    console.log(position);
    $(".chat_wrap .inner").stop().animate({
      scrollTop: position
    }, 500);
  });
});

function getValue() {
  var buttonValue = event.target.innerHTML;
  console.log(buttonValue);
}








//챗봇 측 대답을 하는 함수 + url + 버튼, 메시지만 입력시 메시지만 나타남
  function displayMessage(message, siteAddress, buttonName) {
  var _class = "yourmsg";
  var _val = message;
  var buttonHtml = '';

  if (siteAddress && buttonName) {
    buttonHtml = '<input type="button" name="b0" value="' + buttonName + '" onclick="window.open(\'' + siteAddress + '\', \'_blank\')">';
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/character_main5.png"><div class="box"><p class="msg">'
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
	
	//상단 스크롤 기능

document.addEventListener('DOMContentLoaded', () => {

$("#topButton").hide();

$(".chat_wrap .inner").scroll(function() {
  if ($(this).scrollTop() == 0) {
    $("#topButton").hide();
  } else {
    $("#topButton").show();
  }
});

$("#topButton").click(function() {
  $(".chat_wrap .inner").scrollTop(0);
  $("#topButton").hide();
});

});

//

// 메뉴 동적 변환
function loadJsp(jspName) {
  console.log("loadJsp 호출됨"); 
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("changebox").innerHTML = this.responseText;
      if(jspName=='menu/menu.jsp'){
      applyMenuJavaScript(); // JSP가 로드되면 자바스크립트 함수 적용
      }
      if(jspName=='menu/login.jsp'){
      applyLoginJavaScript();
      }
    }
  };
  xmlhttp.open("GET", jspName, true);
  xmlhttp.send();
 
  $(".chat_wrap .inner").scrollTop(0); // 클릭시 맨 위로 올라감
  $("#topButton").hide();
}

window.onload = function() {
  loadJsp("menu/menu.jsp");
}

