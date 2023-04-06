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

<script src="../JavaScript/ChatJ.js"></script>
<script src= "../JavaScript/chatpost.js"></script>
<script src="../JavaScript/gpt.js"></script>

<!--  <script>
    function addButton(count) {}   
  </script>  -->


<!-- -------------------------------------------------------------------- -->




</head>
<body>

	<%
	BufferedReader rd = null;
	String filePath;
	request.setCharacterEncoding("UTF-8");

	//---------------------------------------------------------------
	String web_code = request.getParameter("web_code");
	String web_name = request.getParameter("web_name");
	;
	String web_url = request.getParameter("web_url");
	;
	//----------------------------------------
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

						<p class="msg">
							               <%
            Connection conn2 = webDAO.MySQLDBConnection();
            String webList = "select * from web_name";

            PreparedStatement pstmt2 = conn2.prepareStatement(webList);
            ResultSet rs2 = pstmt2.executeQuery();
          
            int count = 1;
            while (rs2.next()) {
                web_code = rs2.getString("web_code");
                web_name = rs2.getString("web_name");
                web_url = rs2.getString("web_url");
                
            %><div id="menu">
            		<button type="button" class="sendButton" id="sendButton" value="<%=web_name%>">><img src="img/우수취업자.gif" alt=""><%=web_name%></button>         		
                  <!--   <input type="button" name="<%=web_code%>" class="sendButton" id="sendButton" value="<%=web_name%>">          -->                  
                     <%
                     if(count %3 ==0){
                
        
       
            %>
            <br>
            <%
            
                     }
                     count++;
            }
            
            %></div>

            
						</p><span class="time">currentTime()</span>

					</div>
					
				</div>
								
			</div>

		<div class="chat-container">
			<input type="text" class="mymsg" placeholder="내용 입력"
				list="searchOptions" />
			<datalist id="searchOptions">
				<option value="계열 소개" />
				<option value="입학 문의" />
				<option value="성적 문의" />
				<option value="휴/복학 문의" />
			</datalist>
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