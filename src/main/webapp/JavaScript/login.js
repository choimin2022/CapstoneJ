
function applyLoginJavaScript() {
	console.log('login');

var Close = document.querySelector('.loginClose');
	Close.addEventListener('click', function() {
    midbox.style.display = 'none';
});

//로그인
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('.id').value;
  const password = document.querySelector('.pass').value;

  const loginData = {
    email: email,
    password: password
  };

  fetch('/CapStonWeb/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
 .then(response => {
	if (response.ok) {
	return response.json();
	} else {
	throw new Error('Network response was not ok.');
	}
	})
	.then(data => {
	console.log(data); // JSON 데이터 콘솔 출력
    result = data.result;
	const name = data.name;
		
	if(result=='yeslogin'){
		loginSuccess();
		alert('환영합니다!');
		midbox.style.display = 'none';
		displayMessage(name+'님 반가워요! 회원용 기능인 우측 상단에 ai상담, 컴정new의 좋아요, 댓글 그리고 문의하기를 이용하실 수 있습니다😀');
		displayMessage('안녕',['https://www.naver.com/','www.youtube.com'],['네이버','유튜브'])
	// 로그인 버튼을 로그아웃으로 바꿈
		loginBtn.textContent = '로그아웃';
		loginBtn.setAttribute('id', 'logout');
		loginBtn.removeAttribute('onclick');
		
	// 로그아웃 이벤트
		loginBtn.addEventListener('click', function() {
		  // 로그아웃 버튼 누르면 
		  console.log('logout button clicked');
		  midBox.style.display = 'none';
		  location.reload();
		});
		// loginName 클래스의 요소 가져오기
		const loginName = document.querySelector('.loginName');
   		// 텍스트 변경
		loginName.textContent = name;
	}	
	else{alert('아이디와 비밀번호를 다시 확인해주세요.');}
	})
	.catch(error => {
	console.error(error); // 에러 콘솔 출력
	});
});
}

// 로그인 상태를 저장하는 전역 변수
var isLoggedIn = false;

// 로그인이 성공적으로 이루어진 경우 isLoggedIn 값을 변경합니다.
function loginSuccess() {
  isLoggedIn = true;
}

// 로그인 여부를 확인하는 함수
function checkLoginStatus() {
  return isLoggedIn;
}

