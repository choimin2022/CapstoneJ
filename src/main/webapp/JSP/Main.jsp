<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.nio.charset.StandardCharsets" %>

<%@ page import="java.sql.*"%>
<%@ page import="java.io.*"%>
<%@ page import="DBConnect.webDAO"%>
<!-- mysql 연동 -->
<%@ page import="web_con.web_conDTO"%>
<!-- web_con 필드 -->
<%@ page import="web_name.web_nameDTO"%>
<!-- web_name 필드 -->




<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="img/Logo2.png">
<meta charset="UTF-8">
<title>컴퓨터정보계열 챗봇</title>

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"
	integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="
	crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="../CSS/style.css">
<link rel="stylesheet" type="text/css" href="../CSS/chatForm.css">
<link rel="stylesheet" type="text/css" href="../CSS/ChatList.css">
<link rel="stylesheet" type="text/css" href="../CSS/NewBoard.css">

<script src="../JavaScript/ChatJ.js"></script>
<script src= "../JavaScript/chatpost.js"></script>
<script src="../JavaScript/gpt.js"></script>
<script src="../JavaScript/ChatList.js"></script>
<script src="../JavaScript/ChatMenu.js"></script>

<!--  <script>
    function addButton(count) {}   
  </script>  -->
<script>
</script>
<!-- -------------------------------------------------------------------- -->




</head>
<body>

	<%
	BufferedReader rd = null;
	String filePath;
	request.setCharacterEncoding("UTF-8");

	//---------------------------------------------------------------웹주소
	String web_code = request.getParameter("web_code");
	String web_name = request.getParameter("web_name");
	;
	String web_url = request.getParameter("web_url");
	;
	//----------------------------------------채팅
	String con_link = request.getParameter("con_link");
	

	//------------------------------------------
	//getParameter은 String방식으로 들고오기 때문에 int형으로 변형해줘야 된다.	
	/*	if(request.getParameter("j_code") !=null){
			j_code=Integer.parseInt(request.getParameter("j_code"));	
		}*/

	Connection conn = webDAO.MySQLDBConnection();
	//웹링크 내용을 모두 불러온다.
	String web_con = "select * from web_con";
	PreparedStatement pstmt = conn.prepareStatement(web_con);
	ResultSet rs = pstmt.executeQuery();
	if (rs.next()) {
		web_code = rs.getString("web_code");
		con_link = rs.getString("con_link");
	}
	//-----------------------------------------------------------
	%>


	<!--상단 드롭메뉴-->

	<div id="root">
		<div id="top">
			<!--상단바-->
			<img class="tiger" alt="image" src="img/character_top2.png">
			<h1>와이거(Wyiger for comjeong)</h1>
		</div>



		<div class="chat_wrap">
		  <div class="inner">
		    <div class="item yourmsg on">
		      <img class="tiger_chat" alt="image" src="img/character_main5.png">
		      <div class="box">
		        <div class="msg" id="menu">		      
		        	<div class="inmsg"> 
		        	 <img class="tiger_menu" alt="image" src="img/character_top2.png">
		        	 	<div>
		        		&nbsp;&nbsp;안녕하세요 영진전문대학교 컴퓨터정보계열 챗봇 와이거에요!<br>
		        		&nbsp;&nbsp;학사안내, 학생지원, IT/기술지원 등 학교생활에서 궁금한 점을 질문해주시면 <br>&nbsp;&nbsp;안내해드릴게요!
		        		</div>
		        	</div>	        
		        <p class="menu">
		          <% Connection conn2 = webDAO.MySQLDBConnection(); 
		          String webList = "select * from web_name"; 
		        PreparedStatement pstmt2 = conn2.prepareStatement(webList);
		        ResultSet rs2 = pstmt2.executeQuery(); 
		        int count = 1;
		        %>        
		            <% while (rs2.next()) {
		            web_code = rs2.getString("web_code"); web_name = rs2.getString("web_name"); web_url = rs2.getString("web_url"); 
		            if(count <= 9) { %>		            
		            <button type="button" class="sendButton" id="sendButton<%=count%>" value="<%=web_code%>">
		              <img class="imgsize" src="img/<%=web_name%>.gif"><%=web_name%>
		            </button>
		            <% } else { %>
		            <button type="button" class="sendButton hidden" id="sendButton<%=count%>" value="<%=web_code%>">
		              <img class="imgsize" src="img/<%=web_name%>.gif"><%=web_name%>
		            </button>
		            <% } count++; } %>          
		             </p>  
		             <div class="undermenu">
		               <button type="button" id="More" class="image-button">다음 메뉴 </button>
		               <button class="board">컴정 New</button>	
		               <button class="board">로그인</button>	
		               <button class="board">회원가입</button>	  
		             </div>         
		         </div>		  		              		 
		        <span class="time">currentTime()</span>			     	       			
		      </div>
		    </div>
		  </div>
		</div>







		<div class="chat-container">
		 <button class="board">TOP</button>	  
         <input type="text" class="mymsg" placeholder="궁금한 것을 알려주세요">
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

	<%
	//----------------------------
	webDAO.close(rs2);
	webDAO.close(pstmt2);
	webDAO.close(conn2);
	%>

 <script> //시간 나타내는 함수
      var time = currentTime();
      console.log(time);
      document.querySelector('.time').textContent = time;
    </script>
</body>
</html>