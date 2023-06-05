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
    eval(fileContents);  //파일에 displayMassage를 직접적으로 적을때 사용
    //displayMessage(fileContents); // fileContents를 displayMassage 함수에 전달합니다
  })
  .catch(function(error) {	    
   // var decodedErrorMessage = decodeURIComponent(error.message);
  //  displayMessage(decodedErrorMessage);
 //eval(displayMessage);
  // gpt(messages)
  });
}

//챗봇 측 대답을 하는 함수 + url + 버튼, 메시지만 입력시 메시지만 나타남
function displayMessage(message, siteAddresses, buttonNames, imageAddresses) {
  var _class = "yourmsg";
  var _val = message;
  var buttonHtml = '';
  var imageHtml = '';

  if (siteAddresses && buttonNames && siteAddresses.length === buttonNames.length) {
    for (var i = 0; i < siteAddresses.length; i++) {
      buttonHtml += '<input type="button" class="bmsg" name="b' + i + '" value="' + buttonNames[i] + '" onclick="window.open(\'' + siteAddresses[i] + '\', \'_blank\')">';
    }
  }

  if (imageAddresses) {
    for (var j = 0; j < imageAddresses.length; j++) {
      imageHtml += '<img class="message-image" src="' + imageAddresses[j] + '" alt="image">';
    }
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/img_Main/character_main5.png"><div class="box"><p class="msg">'
      + _val
      + imageHtml
      + '<br>'
      + buttonHtml
      + '</p>'
      + '<span class="time">'
      + currentTime()
      + '</span></div></div>');

  var lastItem = $(".chat_wrap .inner")
    .find(".item:last");
  setTimeout(function() {
    lastItem.addClass("on");
  }, 10);

  var position = lastItem.position().top
    + $(".chat_wrap .inner").scrollTop();

  $(".chat_wrap .inner").stop().animate({
    scrollTop: position
  }, 500);
}


function jspMessage(message, jspAddress, buttonName) {
  var _class = "yourmsg";
  var _val = message;
  var buttonHtml = '';

  console.log(_val);

  if (jspAddress && buttonName) {
    buttonHtml += '<input type="button" class="bmsg gptai" value="' + buttonName + '" onclick="loadgpt(\'' + jspAddress + '\')">';  
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/img_Main/character_main5.png"><div class="box"><p class="msg">'
      + _val
      + '<br>'
      + buttonHtml
      + '</p><span class="time">'
      + currentTime()
      + '</span></div></div>');

  var lastItem = $(".chat_wrap .inner")
    .find(".item:last");
  setTimeout(function() {
    lastItem.addClass("on");
  }, 10);

  var position = lastItem.position().top
    + $(".chat_wrap .inner").scrollTop();
  console.log(position);

  $(".chat_wrap .inner").stop().animate({
    scrollTop: position
  }, 500);
}



