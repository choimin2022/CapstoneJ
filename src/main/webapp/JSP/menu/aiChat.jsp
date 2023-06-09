<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.nio.charset.StandardCharsets" %>


<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="/CapStonWeb/JSP/img/Logo2.png">
<meta charset="UTF-8">
<title>컴퓨터정보계열 챗봇</title>

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"
	integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="
	crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/style.css">
<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/aiChat.css">
<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/ChatList.css">

<!-- -------------------------------------------------------------------- -->

</head>
<body>
	<div id="top">
			<!--상단바-->
			<img class="tiger" alt="image" src="/CapStonWeb/JSP/img/img_Main/character_top2.png">
			<span class="topTitle">와이거(Wyiger for comjeong)</span>
			<!--좌측 상단 메뉴-->
			
			<!--가운데 나타나는 박스(로그인, 회원가입)-->

			
		</div>
		    <!-- 아래 코드 우측 상단 메뉴-->
			


		<div class="chat_wrap" id='chat_wrap'>
		  <div class="g_inner">
		    <div class="item yourmsg on">
		      <img class="tiger_chat" alt="image" src="/CapStonWeb/JSP/img/img_Main/character_main5.png">
		      <div class="box">
		        <div class="msg menumsg" id="">	
		        	안녕하세요! 반가워요 상담을 시작하기 전에 알려드릴게 있어요 우선 상담을 종료하고 챗봇으로 돌아가고 싶으면 "상담 종료"를 채팅으로 입력해주세요  	        	          		 		             	   
		      </div>
		      	<span class="time" id='menu_time'>currentTime()</span>		
		    </div>
		  </div>
		</div>

		<button class="top top_icon" id="topButton">TOP</button>
		<div class="chat-container">
        <input type="text" id="cinput" class="mymsg" placeholder="궁금한 것을 알려주세요" autocomplete="off"/>
	 	<button class="dictate">
	            <i class="ic-mike"></i>
	            <svg width="1.25rem" height="1.25rem" viewBox="0 0 100 100">
	                <g stroke="#000" stroke-width="15">
	                    <path d="M20,20 20,80">
	                        <animate attributeName="d" values="M20,40 20,60;M20,20 20,80;M20,40 20,60" dur="1s" repeatCount="indefinite" />
	                    </path>
	                    <path d="M50,10 50,90">
	                        <animate attributeName="d" values="M50,10 50,90;M50,40 50,60;M50,10 50,90" dur="1s" repeatCount="indefinite" />
	                    </path>
	                    <path d="M80,20 80,80">
	                        <animate attributeName="d" values="M80,40 80,60;M80,20 80,80;M80,40 80,60" dur="1s" repeatCount="indefinite" />
	                    </path>
	                </g>
	            </svg>
	        </button>        <div class="icon-container">
		  <i class="iconV"></i>
		  <div class="info-box">음성인식 tip<br><br>1. 왼쪽 마이크를 누르거나 스페이스바로 음성인식 시작/종료<br><br>2. 챗봇 동작 명령어<br>&nbsp;●위로올려줘: 스크롤바가 위로 올라가요!
		  <br>&nbsp;●로그인: 로그인창이 나타나요!<br>&nbsp;●테마변경: 챗봇의 상단과 하단 테마 색을 고를 수 있어요!</div>
		</div>
      </div>     
		</div>



<!--  <script> //시간 나타내는 함수
      var time = currentTime();
      console.log(time);
      document.querySelector('.time').textContent = time;
    </script> -->
<script src="/CapStonWeb/JavaScript/ChatJ.js"></script>
<script src="/CapStonWeb/JavaScript/gpt.js"></script>
<script src="/CapStonWeb/JavaScript/ChatList.js"></script>
</body>
</html>