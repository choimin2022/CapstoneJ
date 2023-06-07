 
//loadjsp 함수를 호출시 자바스크립트가 나중에 로드되기 위해 function applyMenuJavaScript() {}를 포함 시켜주면됨
function applyMenuJavaScript() {
  // 하단 동그라미 색 나오게하기, 첫 번째 li 요소에 checked 클래스 추가
  const firstLi = document.querySelector('.buttonP li:first-child');
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
  
// 페이지별로 보여줄 버튼들을 관리하는 함수
function showButtonsByPage(pageNumber) {
  var buttons = document.getElementsByClassName('sendButton');
  
  // 모든 버튼을 숨김 처리
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('hidden');
  }
  
  // 현재 페이지에 해당하는 버튼들만 보이도록 함
  var startIndex = (pageNumber - 1) * 9;
  var endIndex = startIndex + 9;
  
  for (var j = startIndex; j < endIndex; j++) {
    if (buttons[j]) {
      buttons[j].classList.remove('hidden');
    }
  }
}

// 페이지 번호를 클릭했을 때 해당 페이지의 버튼들을 보여주도록 처리
function handlePageClick(pageNumber) {
  // 페이지 번호 요소에 활성화 클래스 추가
  var pageElements = document.querySelectorAll('.buttonP li');
  for (var i = 0; i < pageElements.length; i++) {
    pageElements[i].classList.remove('active');
  }
  document.getElementById('page' + pageNumber).classList.add('active');
  
  // 해당 페이지의 버튼들을 보여주도록 처리
  showButtonsByPage(pageNumber);
  
  // 페이지 이동을 위한 스크롤 처리
  var menuElement = document.getElementById('pmenu');
  var viewportPosition = menuElement.offsetTop;
  
  window.scrollTo({
    top: viewportPosition,
    behavior: 'smooth'
  });
}

// 초기 페이지 설정 (첫 번째 페이지)
handlePageClick(1);

// 페이지 번호를 클릭했을 때 이벤트 처리
var pages = document.querySelectorAll('.buttonP li');
for (var i = 0; i < pages.length; i++) {
  var pageNumber = i + 1;
  pages[i].addEventListener('click', function(pageNum) {
    return function() {
      handlePageClick(pageNum);
    }
  }(pageNumber));
}
}