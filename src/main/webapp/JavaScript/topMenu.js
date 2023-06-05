//메뉴 동적 변환 2

function loadmid(jspName) {
  console.log("loadJsp 호출됨: "+jspName);
   if (jspName == 'menu/inquiry.jsp'&&checkLoginStatus()==false) {
	   alert('로그인이 필요합니다.')
	   return;
   }        
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("midbox").innerHTML = this.responseText;
      if(jspName=='menu/login.jsp'){
      applyLoginJavaScript();      
      }
      if(jspName=='menu/signup.jsp'){
	  applysignupJavaScript();
      }
      if(jspName=='menu/inquiry.jsp'){
	  applyInquiryJavaScript();
      }
      if(jspName=='menu/board.jsp'){
	  applyBoardJavaScript();
      }
    }
  };
  xmlhttp.open("GET", jspName, true);
  xmlhttp.send(); 
}

//상단 메뉴 클릭
var menuBtn = document.querySelector('.btn_menu');
var buttonArea = document.querySelector('.button_area');
var closeButton = document.querySelector('.ico_close');
var dimmed = document.querySelector('.dimmed');
var midBox = document.querySelector('.midbox');
var loginBtn = document.getElementById("login-button");
var signupBtn = document.getElementById("signup-button");
var inquiry = document.querySelector('.inquiry');
var aiChat = document.querySelector('.aiChat');
var boardBtn = document.querySelector('.boardBtn');

menuBtn.addEventListener('click', function() {
    if (buttonArea.style.display === 'block') {
        buttonArea.style.display = 'none';
        dimmed.style.display = 'none';
    } else {
        buttonArea.style.display = 'block';
        buttonArea.style.zIndex = '999';
        dimmed.style.display = 'block';
        dimmed.style.zIndex = '100';
        
        // 추가 기능은 여기
    }
});

closeButton.addEventListener('click', function() {
    buttonArea.style.display = 'none';
    dimmed.style.display = 'none';
});

dimmed.addEventListener('click', function() {
    if (buttonArea.style.display === 'block') {
        buttonArea.style.display = 'none';
        dimmed.style.display = 'none';
        midBox.style.display = 'none';
    }
});

loginBtn.addEventListener('click', function(){
	midBox.style.display = 'block';
	midBox.style.zIndex = '999';
});

signupBtn.addEventListener('click', function(){
	midBox.style.display = 'block';
	midBox.style.zIndex = '999';
});

inquiry.addEventListener('click', function(){
	if (checkLoginStatus()==false) {
	   return;
 } 
	midBox.style.display = 'block';
	midBox.style.zIndex = '999';
});

boardBtn.addEventListener('click', function(){
	midBox.style.display = 'block';
	midBox.style.zIndex = '999';
});


// 상단 하단 색상 변경
  const colorButton1 = document.querySelector('.colorLi1 button');
  const colorButton2 = document.querySelector('.colorLi2 button');
  const colorButton3 = document.querySelector('.colorLi3 button');

  colorButton1.addEventListener('click', function() {
    document.getElementById('top').style.backgroundColor = '#4c6c73';
    document.querySelector('.chat-container').style.backgroundColor = '#4c6c73';
  });

  colorButton2.addEventListener('click', function() {
    document.getElementById('top').style.backgroundColor = '#2c40e2';
    document.querySelector('.chat-container').style.backgroundColor = '#2c40e2';
  });

  colorButton3.addEventListener('click', function() {
    document.getElementById('top').style.backgroundColor = '#38b94d';
    document.querySelector('.chat-container').style.backgroundColor = '#38b94d';
  });
  
   const colorPicker = document.getElementById("colorPicker");
   colorPicker.addEventListener("change", function() {
    const selectedColor = colorPicker.value;
    document.getElementById('top').style.backgroundColor = selectedColor;
    document.querySelector('.chat-container').style.backgroundColor = selectedColor;
  });
  
  //ai 상담 
  aiChat.addEventListener('click', function(){
	  if (checkLoginStatus()==false) {
	   alert('로그인이 필요합니다.')
	   return;
   } 
	jspMessage("안녕하세요! 고민 상담사 와이거에요! 고민이 있다면 저에게 고민 상담을 해보시겠어요?🤔", "menu/aiChat.jsp","상담 시작하기");  
  });