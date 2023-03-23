 /*  
// 사용자가 답변을 입력하는 입력 필드를 가져옵니다
const answerInput = document.getElementById("answer-input");

// 버튼 가져오기
const submitButton = document.getElementById("submit-button");

// 버튼에 이벤트리스너 추가
submitButton.addEventListener("click", function(event) {
  // 기본 동작 방지
  event.preventDefault();

  // 입력 필드에서 사용자 응답 가져오기
  const userAnswer = answerInput.value;

  // 새 XMLHttpRequest 개체 생성
  const xhr = new XMLHttpRequest();

  // 데이터 수신을 위해 서버의 엔드포인트에 대한 POST 요청 설정
  xhr.open("POST", "/receive-answer");

  // 요청의 내용 유형을 JSON으로 설정합니다
  xhr.setRequestHeader("Content-Type", "application/json");

  // 서버의 응답을 처리하는 콜백 기능 설정
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // 서버에서 JSON 응답 구문 분석
      const response = JSON.parse(xhr.responseText);

      // 채팅 인터페이스에 문장에 대한 정보 표시
      displaySentenceInfo(response.sentenceInfo);
    }
  }

  // 사용자의 응답을 서버에 JSON 개체로 전송
  const data = {
    answer: userAnswer
  };
  xhr.send(JSON.stringify(data));
});

// 채팅 인터페이스에서 문장에 대한 정보를 표시하는 기능
function displaySentenceInfo(sentenceInfo) {
  // 채팅 창 요소를 가져옵니다
  const chatWindow = document.getElementById("chat-window");

  // 새 대화 메시지 요소 만들기
  const message = document.createElement("div");
  message.classList.add("message");

  // 문장 정보를 표시할 새 단락 요소 만들기
  const sentenceInfoText = document.createElement("p");
  sentenceInfoText.innerText = sentenceInfo;
  message.appendChild(sentenceInfoText);

  // 대화 창에 메시지 추가
  chatWindow.appendChild(message);
}


// 챗봇 대답 버전1 
// 정보를 표시하려는 id가 "chat"인 div
const chatDiv = document.getElementById("chat");

// 서버로부터 문장 정보가 포함된 JSON 객체를 받는다.
const sentenceInfo = {
  sentence: "This is the sentence text",
  wordCount: 5,
  // 다른 문장 정보 속성은 여기
};

// 문장 정보로 채팅 div 업데이트
chatDiv.innerHTML += `The sentence "${sentenceInfo.sentence}" has ${sentenceInfo.wordCount} words.`;
*/

// 챗봇 대답 버전2
function sendMessage() {
  var message = document.getElementById('message').value;
  //사용자의 메시지와 함께 서버에 POST 요청 보내기
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/endpoint', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      // 채팅 인터페이스에 서버의 응답 표시
      displayMessage(response.message);
    }
  };
  xhr.send(JSON.stringify({message: message}));
  document.getElementById('message').value = '';
}

function displayMessage(message) {
  var chatBox = document.getElementById('chat-box');
  var newMessage = document.createElement('div');
  newMessage.className = 'message';
  newMessage.innerHTML = message;
  chatBox.appendChild(newMessage);
} // 시간 표시 할 수 있으면 해보기