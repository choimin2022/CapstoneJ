	//메뉴 버튼 1, 2 나누는 기능
		$(document).on("click", "#pageOne", function() {
		  $(".sendButton").removeClass("hidden");
		  $(".sendButton").removeClass("active");
		  $(".sendButton:lt(9)").addClass("active");
		  $(".sendButton:gt(8)").addClass("hidden");
		});
		
		$(document).on("click", "#pageTwo", function() {
		  $(".sendButton").removeClass("hidden");
		  $(".sendButton").removeClass("active");
		  $(".sendButton:gt(8)").addClass("active");
		  $(".sendButton:lt(9)").addClass("hidden");
		});


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
  // 왼쪽 오른쪽 메뉴박스 스와이프 기능
  const menuButtons = document.querySelectorAll('.sendButton');
  const menuEl = document.getElementById('pmenu');
  let mouseDownX, mouseMoveX;

  menuEl.addEventListener('mousedown', handleMouseDown, false);
  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mouseup', handleMouseUp, false);

  function handleMouseDown(event) {
    mouseDownX = event.clientX;
  }

  function handleMouseMove(event) {
    if (typeof mouseDownX !== 'undefined') {
      mouseMoveX = event.clientX;
      const deltaX = mouseMoveX - mouseDownX;

      if (deltaX < 0) { 
        menuEl.style.transform = `translateX(${deltaX}px)`;
      }
    }
  }

 function handleMouseUp(event) {
  if (typeof mouseDownX !== 'undefined') {
    const deltaX = mouseMoveX - mouseDownX;
    mouseDownX = undefined;

    if (deltaX < -500) { 
      menuButtons.forEach(button => {
        if (button.classList.contains("hidden")) {
          button.classList.remove("hidden");
        } else {
          button.classList.add("hidden");
        }
      });
    }
  }
  menuEl.style.transform = 'translateX(0)';
}



document.addEventListener('DOMContentLoaded', function() {
  const menuButtons = document.querySelectorAll('.sendButton');
  const menuEl = document.getElementById('pmenu');
  let mouseDownX, mouseMoveX;

  menuEl.addEventListener('mousedown', handleMouseDown, false);
  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mouseup', handleMouseUp, false);

  function handleMouseDown(event) {
    mouseDownX = event.clientX;
  }

  function handleMouseMove(event) {
    if (typeof mouseDownX !== 'undefined') {
      mouseMoveX = event.clientX;
      const deltaX = mouseMoveX - mouseDownX;

      if (deltaX > 0) { 
        menuEl.style.transform = `translateX(${deltaX}px)`;
      }
    }
  }

  function handleMouseUp(event) {
    if (typeof mouseDownX !== 'undefined') {
      const deltaX = mouseMoveX - mouseDownX;
      mouseDownX = undefined;

      if (deltaX > 500) { 
        menuButtons.forEach(button => {
          if (button.classList.contains("hidden")) {
            button.classList.remove("hidden");
          } else {
            button.classList.add("hidden");
          }
        });
      }
    }
    menuEl.style.transform = 'translateX(0)';
  }
});
}