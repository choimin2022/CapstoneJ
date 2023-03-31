function sendMessage(messages) {
  var message = messages.trim(); //messages 값을 앞 뒤의 공백을 없애고 message 변수에 담는다
  if (!message) return; // 메시지가 비었으면 보내지 않는다
  // 사용자 메시지가 포함된 POST 요청을 서버로 전송
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/myEndpoint', true); // 요청을 /endpoint URL 로 보낸다
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        if (response) {
          response = JSON.parse(response);
          // FMessage로 서버의 응답을 채팅창에 표시
          FMessage(response.message);
        }
      } else {
        // 서버의 오류 응답 처리
        var errorMessage = 'Error(서버 연결 오류) ' + xhr.status + ': ' + xhr.statusText;
        displayMessage(errorMessage);
      }
    }
  };
  xhr.send(JSON.stringify({ message: message }));  
}


// 파일을 채팅창에 출력한다
function FMessage(message) {
  message.replace(/(\r\n|\n|\r)/gm, "");
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
}



