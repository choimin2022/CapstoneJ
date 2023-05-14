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
<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/chatForm.css">
<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/ChatList.css">

<!-- -------------------------------------------------------------------- -->

</head>
<body>

	<!--상단 드롭메뉴-->

	<div id="root">
		<div id="top">
			<!--상단바-->
			<img class="tiger" alt="image" src="/CapStonWeb/JSP/img/character_top2.png">
			<h1>와이거(Wyiger for comjeong)</h1>
			<!--좌측 상단 메뉴-->
			<div class="btn_unit">
			<button type="button" class="">
			<span class="">컴정 new</span>
			</button>
			<button type="button" class="">
			<span class="">ai 상담</span>
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
					<img class="chat_logo_box" alt="image" src="/CapStonWeb/JSP/img/Logo2.png">
					<div>비회원님 환영합니다</div>
				</div>  
				<ul class="undermenu sub_menu_list">
				<!--<li><button class="m" id="menu-button" onclick="loadJsp('menu/menu.jsp')">메뉴</button></li>-->
				  <li class="sub_menu_item"><button class="m" id="login-button" onclick="loadmid('menu/login.jsp')">로그인</button></li>
				  <li class="sub_menu_item"><button class="m" id="signup-button" onclick="loadmid('menu/signup.jsp')">회원가입</button></li>
				<!-- <li class="sub_menu_item"><button class="m" id="board-button" onclick="('menu/board.jsp')">컴정 New</button></li>-->
				</ul>
				<button class="inquiry" id="" onclick="('menu/')">문의하기</button>
				<button type="button" class="btn_close">
					<span class="ico_comm ico_close">메뉴 레이어 닫기</span>
				</button>
			</div>
		


		<div class="chat_wrap">
		  <div class="inner">
		    <div class="item yourmsg on">
		      <img class="tiger_chat" alt="image" src="/CapStonWeb/JSP/img/character_main5.png">
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
<script src="/CapStonWeb/JavaScript/gpt.js"></script>
<script src="/CapStonWeb/JavaScript/ChatList.js"></script>
<script src="/CapStonWeb/JavaScript/Menu.js"></script>
<script src="/CapStonWeb/JavaScript/login.js"></script>
<script src="/CapStonWeb/JavaScript/signup.js"></script>
<script src="/CapStonWeb/JavaScript/addMic.js"></script>
</body>
</html>