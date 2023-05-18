function sendMessage(messages) {
  var message = messages.trim();
  if (!message) return;

  // 메시지 인코딩
  message = encodeURIComponent(message);
  fetch('/CapStonWeb/Jserver', {    //서버에 메시지 정보 보냄
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({ message: message })
  })
  .then(function(response) {
    if (response.ok) {
      return response.json(); // Json 구문 분석
    } else {
      throw new Error('Error(서버 연결 에러) ' + response.status + ': ' + response.statusText);
    }
  })
  .then(function(json) {
    const fileContents = json.fileContents; // JSON 개체에서 fileContents 속성을 추출
    Fmessage(fileContents); // fileContents를 Fmessage 함수에 전달합니다
  })
  .catch(function(error) {	    
   // var decodedErrorMessage = decodeURIComponent(error.message);
  //  displayMessage(decodedErrorMessage);
  // gpt(messages)
  });
}


// 받은거 출력
function Fmessage(message) {
    var _val = message;  
    var _tar = $(".chat_wrap .inner").append('<div class="item yourmsg on"><img class="tiger_chat" alt="image" src="img/character_main5.png"><div class="box"><p class="msg">'
      +_val
      + '</p><span class="time">'
      + currentTime()
      + '</span></div></div>');

    var lastItem = $(".chat_wrap .inner").find(".item:last");
    setTimeout(function() {
      lastItem.addClass("on");
    }, 10);

    var position = lastItem.position().top + $(".chat_wrap .inner").scrollTop();
    console.log(position);

    $(".chat_wrap .inner").stop().animate({
      scrollTop: position
    }, 500);
  }



/* 파일을 채팅창에 출력한다 버전1
  function Fmessage(message) {
  var file = message;
  var tar = $(".chat_wrap .inner").append(file);
  var lastItem = $(".chat_wrap .inner").find(".item:last");
  setTimeout(function() {
    lastItem. addClass("on");
  }, 10);

  var position = lastItem.position().top + $(".chat_wrap .inner").scrollTop();
  console. log(position);

  $(".chat_wrap .inner").stop().animate({
    scrollTop: position
  }, 500);
}  */


/* 버전 2 메시지 내용과 버튼만 가져오면 자동 출력
function Fmessage2(message) {
  var _val = message;  
  var _tar = $(".chat_wrap .inner").append('<div class="item yourmsg on"><img class="tiger_chat" alt="image" src="img/character_main5.png"><div class="box"><p class="msg">'
      +_val
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
}*/
