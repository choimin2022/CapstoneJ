function applyInquiryJavaScript() {
	var Close = document.querySelector('.inquiryClose');
	Close.addEventListener('click', function() {
    midbox.style.display = 'none';
});
	
	   var submitButton = document.querySelector('.inquirySubmit');
    var buttonText = submitButton.textContent;
    var titleInput = document.getElementById('title');
    var contentInput = document.getElementById('content');
    var dots = '';

    // 문의 폼 제출 이벤트 핸들러
    document.getElementById('inquiryForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 동작인 폼 제출 방지

        // 버튼 텍스트 변경
        submitButton.disabled = true;
        animateButtonText();

        // 입력된 데이터 가져오기
        var title = titleInput.value;
        var content = contentInput.value;
        // 서버로 보낼 데이터 객체 생성
        var data = {
            title: title,
            content: content,
            id: uid,
            name: name
        };

        // Fetch API를 사용하여 서블릿에 데이터 전송
        fetch('/CapStonWeb/SendEmailServlet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(response) {
            if (response.ok) {
                // 전송 성공 시 수행할 동작을 여기에 추가하세요
                alert('성공적으로 전송되었습니다.');
                console.log('이메일이 성공적으로 전송되었습니다.');

                // 입력된 데이터 초기화
                titleInput.value = '';
                contentInput.value = '';
            } else {
                // 전송 실패 시 수행할 동작을 여기에 추가하세요
                alert('전송에 실패했습니다.');
                console.log('이메일 전송에 실패하였습니다.');
            }
        })
        .catch(function(error) {
            // 오류 처리를 여기에 추가하세요
            console.log('오류가 발생하였습니다:', error);
        })
        .finally(function() {
            // 버튼 텍스트 원래대로 복원
            clearInterval(animateInterval);
            submitButton.textContent = buttonText;
            submitButton.disabled = false;
        });
    });

    // 버튼 텍스트 애니메이션 함수
    var animateInterval;
    function animateButtonText() {
        animateInterval = setInterval(function() {
            dots += '.';
            if (dots.length > 3) {
                dots = '';
            }
            submitButton.textContent = '문의 전송 중' + dots;
        }, 500);
    }
}
