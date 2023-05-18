
function applysignupJavaScript() {
	console.log('회원가입');
	//닫기 버튼
var signupClose = document.querySelector('.signupClose');
	signupClose.addEventListener('click', function() {
    midbox.style.display = 'none';  
});

//비밀번호 비교
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');

function checkPasswords() {
  if (passwordInput.value !== confirmInput.value) {
    alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
    confirmInput.value = '';
    passwordInput.value = '';
  }
  else{
	    // 회원가입 자바 서버로 보내는 코드
	$(function() {
	    // 입력된 사용자 정보를 가져옵니다.
	    var email = $('#email').val();
	    var password = $('#password').val();
	    var fullname = $('#fullname').val();
	    var phone = $('#phone').val();
	
		signUp(email,password,fullname,phone)
	  });
	
	function signUp(email, password, fullname, phone) {
	  // 요청 바디 데이터 생성
	  console.log(signUp);
	  const bodyData = {
	    email: email,
	    password: password,
	    fullname: fullname,
	    phone: phone
	  }; 
	  // fetch API를 사용하여 회원가입 요청 보내기
	  fetch('/CapStonWeb/signup', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(bodyData)
	  })
	  .then(function(response) {
	    if (response.ok) {
	      // 서버에서 반환 성공시 
	       response.text().then(function(message) {
	        alert(message);
	        console.log(message);
	        if(message=='회원가입에 성공했습니다!'){
			   midbox.style.display = 'none';
			}
	      });
	    } else {
	      // 에러처리
	      throw new Error('Failed to sign up. Error ' + response.status + ': ' + response.statusText);
	    }
	  })
	  .catch(function(error) {
	    // 오류 발생 시 처리할 코드
	    console.error(error);
	  });
	}
	  }
	}
	
	const form = document.querySelector('form');
	form.addEventListener('submit', function(event) {
	  event.preventDefault(); // 기본 동작을 막습니다.
	  checkPasswords(); // 비밀번호가 일치하는지 확인합니다.
	});

}