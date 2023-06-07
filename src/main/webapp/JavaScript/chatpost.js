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
    console.log(fileContents)
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
      + '<span class="val2-style">' + imageHtml + _val + '</span>'
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

function displayMessage2(message,message2 , siteAddresses, buttonNames, imageAddresses) {
  var _class = "yourmsg";
  var _val = message;
  var _val2 = message2;
  var buttonHtml = '';
  var imageHtml = '';

  if (siteAddresses && buttonNames && siteAddresses.length === buttonNames.length) {
    for (var i = 0; i < siteAddresses.length; i++) {
      buttonHtml += '<input type="button" class="bmsg" name="b' + i + '" value="' + buttonNames[i] + '" onclick="window.open(\'' + siteAddresses[i] + '\', \'_blank\')">';
    }
  }

  if (imageAddresses) {
    for (var j = 0; j < imageAddresses.length; j++) {
      imageHtml += '<img class="message-image2" src="' + imageAddresses[j] + '" alt="image">';
    }
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/img_Main/character_main5.png"><div class="box"><p class="msg">'
      +	'<span class="val-style">' + _val + '</span>'
	  +	'<span class="val2-style">' + imageHtml + _val2 + '</span>'
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

function displayMessage3(message, siteAddresses, buttonNames) {
  var _class = "yourmsg";
  var _val = message;
  var buttonHtml = '';

  if (siteAddresses && buttonNames && siteAddresses.length === buttonNames.length) {
    for (var i = 0; i < siteAddresses.length; i++) {
      buttonHtml += '<input type="button" class="bmsg" name="b' + i + '" value="' + buttonNames[i] + '" onclick="displayMessage(\'' + _val + '\', [\'' + siteAddresses[i] + '\'], [\'' + buttonNames[i] + '\'])">';
    }
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/img_Main/character_main5.png"><div class="box"><p class="msg">'
      + '<span class="val2-style">' + _val + '</span>'
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


var messages = [];
var imageAddresses = [];

function displayMessage4(msgs, imgAddrs) {
  messages = msgs;
  imageAddresses = imgAddrs;

  var _class = "yourmsg";
  var currentMessageIndex = 0;
  var _val = messages[currentMessageIndex];
  var buttonHtml = '';
  var imageHtml = '';

  if (imageAddresses) {
    for (var j = 0; j < imageAddresses.length; j++) {
      buttonHtml += '<li class="buttonP" onclick="changeContent(' + j + ')">' + /*(j + 1) +*/ ' </li>';
    }
    imageHtml += '<img class="message-image ' + (imageAddresses.length > 0 ? 'active' : '') + '" src="' + imageAddresses[0] + '" alt="image">';
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/img_Main/character_main5.png"><div class="box"><div class="msg">'
      + '<span class="val2-style">' + imageHtml + _val + '</span>'
      + '<br>'
      + '<div class="buttonP disBtn"><ul>' + buttonHtml + '</ul></div>'
      + '</div>'
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

  // 하단 동그라미 색 나오도록 설정, 첫 번째 li 요소에 checked 클래스 추가
  const firstLi = document.querySelector('.disBtn li:first-child');
  firstLi.classList.add('checked');

  // 나머지 li 요소 클릭 시 checked 클래스 토글링
  const buttonPLis = document.querySelectorAll('.buttonP li');
  buttonPLis.forEach(li => {
    li.addEventListener('click', () => {
      buttonPLis.forEach(li => {
        li.classList.remove('checked');
      });
      li.classList.toggle('checked');
    });
  });
}

function changeContent(index) {
  $(".message-image").removeClass("active");
  $(".message-image").eq(index).addClass("active");
  $(".val2-style").html('<img class="message-image active" src="' + imageAddresses[index] + '" alt="image">' + messages[index]);
}


var messages = [];
var imageAddresses = [];

function displayMessage5(msgs, imgAddrs, buttonNames, siteAddresses) {
  messages = msgs;
  imageAddresses = imgAddrs;

  var _class = "yourmsg";
  var currentMessageIndex = 0;
  var _val = messages[currentMessageIndex];
  var buttonHtml = '';
  var sBtn = '';
  var imageHtml = '';

  if (siteAddresses && buttonNames && siteAddresses.length === buttonNames.length) {
    for (var i = 0; i < siteAddresses.length; i++) {
      sBtn += '<button class="bmsg" onclick="window.open(\'' + siteAddresses[i] + '\', \'_blank\')">' + buttonNames[i] + '</button>';
    }
  }

  if (imageAddresses) {
    for (var j = 0; j < imageAddresses.length; j++) {
      buttonHtml += '<li class="buttonP" onclick="changeContent(' + j + ')">' + /*(j + 1) +*/ ' </li>';
    }
    imageHtml += '<img class="message-image ' + (imageAddresses.length > 0 ? 'active' : '') + '" src="' + imageAddresses[0] + '" alt="image">';
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/img_Main/character_main5.png"><div class="box"><div class="msg">'
      + '<span class="val2-style">' + imageHtml + _val + '</span>'
      + '<br>'
      + sBtn
      + '<div class="buttonP disBtn"><ul>' + buttonHtml + '</ul></div>'
      + '</div>'
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

  // 하단 동그라미 색 나오도록 설정, 첫 번째 li 요소에 checked 클래스 추가
  const firstLi = document.querySelector('.disBtn li:first-child');
  firstLi.classList.add('checked');

  // 나머지 li 요소 클릭 시 checked 클래스 토글링
  const buttonPLis = document.querySelectorAll('.buttonP li');
  buttonPLis.forEach(li => {
    li.addEventListener('click', () => {
      buttonPLis.forEach(li => {
        li.classList.remove('checked');
      });
      li.classList.toggle('checked');
    });
  });
}

function changeContent(index) {
  $(".message-image").removeClass("active");
  $(".message-image").eq(index).addClass("active");
  $(".val2-style").html('<img class="message-image active" src="' + imageAddresses[index] + '" alt="image">' + messages[index]);
}

var messages = [];
var imageAddresses = [];

function displayMessage6(pages) {
  messages = pages.map(page => page[0]);
  imageAddresses = pages.map(page => page[1]);

  var _class = "yourmsg";
  var currentMessageIndex = 0;
  var _val = messages[currentMessageIndex];
  var buttonHtml = '';
  var sBtn = '';
  var imageHtml = '';

  for (var pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    var buttonNames = pages[pageIndex][2];
    var siteAddresses = pages[pageIndex][3];

    if (siteAddresses && buttonNames && siteAddresses.length === buttonNames.length) {
      for (var i = 0; i < siteAddresses.length; i++) {
        sBtn += '<button class="bmsg" onclick="window.open(\'' + siteAddresses[i] + '\', \'_blank\')">' + buttonNames[i] + '</button>';
      }
    }
  }

  if (imageAddresses) {
    for (var j = 0; j < imageAddresses.length; j++) {
      buttonHtml += '<li class="buttonP" onclick="changeContent(' + j + ')">' + /*(j + 1) +*/ ' </li>';
    }
    imageHtml += '<img class="message-image ' + (imageAddresses.length > 0 ? 'active' : '') + '" src="' + imageAddresses[0] + '" alt="image">';
  }

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/img_Main/character_main5.png"><div class="box"><div class="msg">'
      + '<span class="val2-style">' + imageHtml + _val + '</span>'
      + '<br>'
      + sBtn
      + '<div class="buttonP disBtn"><ul>' + buttonHtml + '</ul></div>'
      + '</div>'
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

  // 하단 동그라미 색 나오도록 설정, 첫 번째 li 요소에 checked 클래스 추가
  const firstLi = document.querySelector('.disBtn li:first-child');
  firstLi.classList.add('checked');

  // 나머지 li 요소 클릭 시 checked 클래스 토글링
  const buttonPLis = document.querySelectorAll('.buttonP li');
  buttonPLis.forEach(li => {
    li.addEventListener('click', () => {
      buttonPLis.forEach(li => {
        li.classList.remove('checked');
      });
      li.classList.toggle('checked');
    });
  });
}

function changeContent(index) {
  $(".message-image").removeClass("active");
  $(".message-image").eq(index).addClass("active");
  $(".val2-style").html('<img class="message-image active" src="' + imageAddresses[index] + '" alt="image">' + messages[index]);
}

