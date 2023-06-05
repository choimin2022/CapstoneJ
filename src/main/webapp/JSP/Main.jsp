<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.nio.charset.StandardCharsets" %>


<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="/CapStonWeb/JSP/img/img_Main/Logo2.png">
<meta charset="UTF-8">
<title>컴퓨터정보계열 챗봇</title>

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"
	integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="
	crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/style.css">
<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/chatForm.css">
<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/ChatList.css">

<!-- -------------------------------------------------------------------- -->

</head>
<body>

	<!--상단 드롭메뉴-->

	<div id="root">
		<div id="top">
			<!--상단바-->
			<img class="tiger" alt="image" src="/CapStonWeb/JSP/img/img_Main/character_top2.png">
			<span class="topTitle">와이거(Wyiger for comjeong)</span>
			<!--좌측 상단 메뉴-->
			<div class="btn_unit">
			<button type="button" class="topBtn boardBtn" id="" onclick="loadmid('menu/board.jsp')">
			<span class="cjnew">컴정 new</span>컴정 new
			</button>
			<button type="button" class="topBtn aiChat">
			<span class="cmc_btn">ai 상담</span>ai 상담
			</button>
			<button type="button" class="menu_btn btn_menu">
			<span class="ico_comm ico_menu">메뉴 보기</span>
			</button>
			</div>
			<!--가운데 나타나는 박스(로그인, 회원가입)-->
			<div class="dimmed" style="z-index: 100;"></div>
			<div class="midbox" id="midbox"></div>
			
		</div>
		    <!-- 아래 코드 우측 상단 메뉴-->
			<div class="button_area">
				<div class="profile_box">
					<h2 class="sub_h_tit">영진 컴정 챗봇</h2>
					<img class="chat_logo_box" alt="image" src="/CapStonWeb/JSP/img/img_Main/Logo2.png">
					<div><span class="loginName">비회원</span>님 환영합니다</div>
				</div>  
				<ul class="undermenu sub_menu_list">
				<!--<li><button class="m" id="menu-button" onclick="loadJsp('menu/menu.jsp')">메뉴</button></li>-->
				  <li class="sub_menu_item"><button class="m" id="login-button" onclick="loadmid('menu/login.jsp')">로그인</button></li>
				  <li class="sub_menu_item"><button class="m" id="signup-button" onclick="loadmid('menu/signup.jsp')">회원가입</button></li>
				<!-- <li class="sub_menu_item"><button class="m" id="board-button" onclick="('menu/board.jsp')">컴정 New</button></li>-->
				</ul>
				
				<div class="colorBack"><span class="colorSpan">챗봇 색상 커스텀</span>
				<ul class="colorUl">
				  <li class="colorLi1"><button class="colorB">1</button></li>
				  <li class="colorLi2"><button class="colorB">2</button></li>
				  <li class="colorLi3"><button class="colorB">3</button></li>
				  <li><input type="color" id="colorPicker"></li>
				</ul>
				</div>
				<button class="inquiry" id="" onclick="loadmid('menu/inquiry.jsp')">문의하기</button>
				<button type="button" class="btn_close">
					<span class="ico_comm ico_close">메뉴 레이어 닫기</span>
				</button>
			</div>
		


		<div class="chat_wrap" id='chat_wrap'>
		  <div class="inner">
		    <div class="item yourmsg on">
		      <img class="tiger_chat" alt="image" src="/CapStonWeb/JSP/img/img_Main/character_main5.png">
		      <div class="box">
		        <div class="msg menumsg" id="">	
		        	<div id="changebox">	  		        	
	      			</div>  	        	          		 		             	   
		      </div>
		      	<span class="time" id='menu_time'>currentTime()</span>		
		    </div>
		  </div>
		</div>

		<button class="top top_icon" id="topButton">TOP</button>
		<div class="chat-container">
        <input type="text" class="mymsg cinput" placeholder="궁금한 것을 알려주세요" autocomplete="off"/>
         <button class="dictate">
            <i class="ic-mike"></i>
            <svg width="1.25rem" height="1.25rem" viewBox="0 0 100 100">
                <g stroke="#fff" stroke-width="15">
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
        </button>
        <div class="icon-container">
		  <i class="iconV"></i>
		  <div class="info-box">음성인식 tip<br><br>1. 왼쪽 마이크를 누르거나 스페이스바로 음성인식 시작/종료<br><br>2. 챗봇 동작 명령어<br>&nbsp;●위로올려줘: 스크롤바가 위로 올라가요!
		  <br>&nbsp;●로그인: 로그인창이 나타나요!<br>&nbsp;●테마변경: 챗봇의 상단과 하단 테마 색을 고를 수 있어요!</div>
		</div>

		    <ul id="searchOptions">
		      <li value="학사공지">학사 공지 궁금해요</li>       
		      <li value="">휴/복학문의 알려주세요</li>      
		      <li value="계열안내">계열소개를 해주세요</li>
		      <li value="">입학 문의 알고 싶어요</li>
		      <li value="">성적 조회를 하고 싶어요</li>
		      <li value="교수진소개">교수님을 알고 싶어요</li>
		     </ul>
      </div>
      
			<!-- <input type="text" class="yourmsg" placeholder="내용 입력"> -->
		</div>

		<!-- CSS문제점 채팅이 나오면 아랫쪽에 새로운 div가 생성되며 화면이 다 보였을 시 overflow로 인해 스크롤바가 생격야 됨 그런데 아래에 생성이 되는게 아닌 중앙정렬이 됨 -->

	</div>

	<!-- test -->

	<!-- dffd -->

<!--  <script> //시간 나타내는 함수
      var time = currentTime();
      console.log(time);
      document.querySelector('.time').textContent = time;
    </script> -->
<script src="/CapStonWeb/JavaScript/ChatJ.js"></script>
<script src= "/CapStonWeb/JavaScript/chatpost.js"></script>
<script src="/CapStonWeb/JavaScript/aiChat.js"></script>
<script src="/CapStonWeb/JavaScript/ChatList.js"></script>
<script src="/CapStonWeb/JavaScript/Menu.js"></script>
<script src="/CapStonWeb/JavaScript/login.js"></script>
<script src="/CapStonWeb/JavaScript/signup.js"></script>
<script src="/CapStonWeb/JavaScript/addMic.js"></script>
<script src="/CapStonWeb/JavaScript/inquiry.js"></script>
<script src="/CapStonWeb/JavaScript/topMenu.js"></script>
<script src="/CapStonWeb/JavaScript/board.js"></script>
</body>
</html>