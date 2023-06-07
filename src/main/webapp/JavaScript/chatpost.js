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

function displayMessage2(message, message2 , siteAddresses, buttonNames, imageAddresses) {
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
      buttonHtml += '<li class="buttonP" onclick="changeContent2(' + j + ')">' + /*(j + 1) +*/ ' </li>';
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
  const buttonPLis = document.querySelectorAll('.disBtn li');
  buttonPLis.forEach(li => {
    li.addEventListener('click', () => {
      buttonPLis.forEach(li => {
        li.classList.remove('checked');
      });
      li.classList.toggle('checked');
    });
  });
}

function changeContent2(index) {
  $(".message-image").removeClass("active");
  $(".message-image").eq(index).addClass("active");
  $(".val2-style").html('<img class="message-image active" src="' + imageAddresses[index] + '" alt="image">' + messages[index]);
}

function displayMessage7() {
  var _class = "yourmsg";

  var academicCalendarHTML = '<select id="monthComboBox">';
  academicCalendarHTML += '<option value="1">1월</option>';
  academicCalendarHTML += '<option value="2">2월</option>';
  academicCalendarHTML += '<option value="3">3월</option>';
  academicCalendarHTML += '<option value="4">4월</option>';
  academicCalendarHTML += '<option value="5">5월</option>';
  academicCalendarHTML += '<option value="6">6월</option>';
  academicCalendarHTML += '<option value="7">7월</option>';
  academicCalendarHTML += '<option value="8">8월</option>';
  academicCalendarHTML += '<option value="9">9월</option>';
  academicCalendarHTML += '<option value="10">10월</option>';
  academicCalendarHTML += '<option value="11">11월</option>';
  academicCalendarHTML += '<option value="12">12월</option>';
  academicCalendarHTML += '<option value="13">1월</option>';
  academicCalendarHTML += '<option value="14">2월</option>';
  academicCalendarHTML += '</select>';

  var _tar = $(".chat_wrap .inner")
    .append('<div class="item ' + _class + '"><img class="tiger_chat" alt="image" src="img/img_Main/character_main5.png"><div class="box"><p class="msg">'
      + '<span class="val2-style">영진전문대학교 2023학년도 학사 일정을 확인하셨습니다!</span>'
      + '<br>'
      + academicCalendarHTML
      + '</p></div></div>');

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

  // 콤보 박스의 값 변경 이벤트에 학사 일정 업데이트 함수를 연결합니다.
  $("#monthComboBox").on("change", updateAcademicCalendar);

  // 학사 일정을 초기에 업데이트합니다.
  updateAcademicCalendar();
}

// 학사 일정을 업데이트하는 함수
function updateAcademicCalendar() {
  var selectedMonth = $("#monthComboBox").val(); // 선택된 달을 가져옵니다.
  var academicCalendar = getAcademicCalendar(selectedMonth); // 선택된 달에 해당하는 학사 일정을 가져옵니다.

  // 기존 학사 일정을 초기화합니다.
  $(".chat_wrap .inner .item:last .msg #academicCalendarDiv").remove();

  // 학사 일정을 화면에 업데이트합니다.
  $(".chat_wrap .inner .item:last .msg").append('<span id="academicCalendarDiv">' + academicCalendar + '</span>');

  // 스크롤을 맨 아래로 이동합니다.
  var chatWrapInner = $(".chat_wrap .inner");
  chatWrapInner.scrollTop(chatWrapInner[0].scrollHeight);
}

// 선택된 달에 따라 학사 일정을 반환하는 함수
function getAcademicCalendar(month) {
  var academicCalendar = ""; // 선택된 달에 해당하는 학사 일정을 담을 변수입니다.

  // 선택된 달에 따라 학사 일정을 설정합니다.
  if (month === "1") {
    academicCalendar = "<br>1월 학사 일정<br><br>";
    academicCalendar += "신정: 01-01일 (일)<br><br>";
    academicCalendar += "설날연휴: 01-21 (토) ~ 01-23 (월)<br><br>";
    academicCalendar += "대체공휴일 (신정): 01-31 (화)<br><br>";
    academicCalendar += "2022학년도 전기졸업 사정회: 01-31 (화)";
  }
   else if (month === "2") {
    academicCalendar = "<br>2월 학사 일정<br><br>";
    academicCalendar += "신입생 등록 기간: 02-08 (수) ~ 02-10 (금)<br><br>";
    academicCalendar += "졸업식: 02-10 (금)<br><br>";
    academicCalendar += "휴학 신청 기간: 02-13 (월) ~ 02-17 (금)<br><br>";
    academicCalendar += "재학생 등록/복학/수강신청: 02-20 (월) ~ 02-28 (화)<br><br>";
    academicCalendar += "2023학년도 입학식 (제47회): 02-28 (화)";
  }
  else if (month === "3") {
  academicCalendar = "<br>3월 학사 일정<br><br>";
  academicCalendar += "삼일절: 03-01 (수)<br><br>";
  academicCalendar += "1학기 개강: 03-02 (목)<br><br>";
  academicCalendar += "수강신청 확인 및 수정 기간: 03-02 (목) ~ 03-08 (수)<br><br>";
  academicCalendar += "4분의 1 수업일: 03-28 (화)";
}

   else if (month === "4") {
  academicCalendar = "<br>4월 학사 일정<br><br>";
  academicCalendar += "1학기 중간고사: 04-20 (목) ~ 04-26 (수)<br><br>";
  academicCalendar += "2/4 수업일: 04-24 (월)";
}

   else if (month === "5") {
  academicCalendar = "<br>5월 학사 일정<br><br>";
  academicCalendar += "근로자의 날: 05-01 (월)<br><br>";
  academicCalendar += "어린이날: 05-05 (금)<br><br>";
  academicCalendar += "백호체육대회: 05-18 (목) ~ 05-19 (금)<br><br>";
  academicCalendar += "3/4 수업일: 05-26 (금)<br><br>";
  academicCalendar += "부처님 오신 날 대체공휴일: 05-29 (월)";
}

    else if (month === "6") {
  academicCalendar = "<br>6월 학사 일정<br><br>";
  academicCalendar += "현충일: 06-06 (화)<br><br>";
  academicCalendar += "1학기 보강기간: 06-08 (목) ~ 06-16 (금)<br><br>";
  academicCalendar += "하계 계절수업 등록 기간: 06-09 (금) ~ 06-15 (목)<br><br>";
  academicCalendar += "1학기 기말시험: 06-17 (토) ~ 06-23 (금)<br><br>";
  academicCalendar += "여름방학: 06-26 (월) ~ 08-25 (금)<br><br>";
  academicCalendar += "하계 계절수업 기간: 06-26 (월) ~ 08-18 (금)<br><br>";
  academicCalendar += "하계 교원 세미나: 06-29 (목)";
}

    else if (month === "7") {
    academicCalendar = "<br>7월 학사 일정<br><br>";
  }
    
	else if (month === "8") {
	academicCalendar = "<br>8월 학사 일정<br><br>";
	academicCalendar += "2022학년도 후기 졸업사정회: 08-01 (화)<br><br>";
	academicCalendar += "2022년 학기 졸업: 08-04 (금)<br><br>";
	academicCalendar += "휴학 신청 기간: 08-07 (월) ~ 08-11 (금)<br><br>";
	academicCalendar += "광복절: 08-15 (화)<br><br>";
	academicCalendar += "재학생 등록/복학 신청/수강신청: 08-18 (금) ~ 08-25 (금)<br><br>";
	academicCalendar += "2학기 개강: 08-28 (월)<br><br>";
	academicCalendar += "수강신청 확인 및 수정 기간: 08-28 (월) ~ 09-01 (금)";
	}
	
	else if (month === "9") {
	academicCalendar = "<br>9월 학사 일정<br><br>";
	academicCalendar += "1/4 학기일: 09-21 (목)<br><br>";
	academicCalendar += "추석 휴일: 09-28 (목) ~ 09-30 (토)";
	}
  
	else if (month === "10") {
	academicCalendar = "<br>10월 학사 일정<br><br>";
	academicCalendar += "개천절: 10-03 (화)<br><br>";
	academicCalendar += "한글날: 10-09 (월)<br><br>";
	academicCalendar += "종합전시회 (13일(금) 정상수업): 10-12 (목) ~ 10-14 (토)<br><br>";
	academicCalendar += "2학기 중간고사: 10-16 (월) ~ 10-21 (토)<br><br>";
	academicCalendar += "2/4 학기일: 10-25 (수)";
	}
  
	   else if (month === "11") {
	academicCalendar = "<br>11월 학사 일정<br><br>";
	academicCalendar += "3/4 학기일: 11-21 (화)";
	}
  
   else if (month === "12") {
  academicCalendar = "<br>12월 학사 일정<br><br>";
  academicCalendar += "2학기 보강 기간: 12-04 (월) ~ 12-08 (금)<br><br>";
  academicCalendar += "겨울 계절학기 수강신청 기간: 12-04 (월) ~ 12-08 (금)<br><br>";
  academicCalendar += "2학기 기말고사: 12-11 (월) ~ 12-16 (토)<br><br>";
  academicCalendar += "겨울방학: 12-18 (월) ~ 02-29 (목)<br><br>";
  academicCalendar += "겨울 계절학기 기간: 12-18 (월) ~ 02-16 (금)<br><br>";
  academicCalendar += "겨울 학부 세미나: 12-21 (목)<br><br>";
  academicCalendar += "크리스마스: 12-25 (월)";
}
    else if (month === "13") {
    academicCalendar = "<br>1월 학사 일정<br><br>";
    academicCalendar += "신정: 01-01 (월)<br><br>";
    academicCalendar += "2023학년도 전기졸업 사정회: 01-30 (화)";
  }
    else if (month === "14") {
    academicCalendar = "<br>2월 학사 일정<br><br>";
     academicCalendar += "신입생 등록기간: 02-07 (수) ~ 02-13 (화)<br><br>";
     academicCalendar += "설날연휴: 02-09 (금) ~ 02-11 (일)<br><br>";
     academicCalendar += "대체휴일(설날): 02-12 (월)<br><br>";
     academicCalendar += "휴학신청 기간: 02-13 (화) ~ 02-19 (월)<br><br>";
     academicCalendar += "학위수여식: 02-16 (금)<br><br>";
     academicCalendar += "재학생 등록/복학신청/수강신청: 02-21 (수) ~ 02-29 (목)<br><br>";
     academicCalendar += "2024학년도 입학식: 02-29 (목)<br><br>";
  }
  
  return academicCalendar;
}
