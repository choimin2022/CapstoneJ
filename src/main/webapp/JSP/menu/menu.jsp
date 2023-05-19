<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.nio.charset.StandardCharsets"%>

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
<link rel="icon" href="/CapStonWeb/JSP/img/Logo2.png">
<title>컴퓨터정보계열 메뉴</title>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"
	integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="
	crossorigin="anonymous"></script>


<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/menu.css">
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
	<div class="backmenu">
		<div class="inmsg">
			<img class="tiger_menu" alt="image"
				src="/CapStonWeb/JSP/img/img_Main/character_top2.png">
			<div>
				&nbsp;&nbsp;안녕하세요 영진전문대학교 컴퓨터정보계열 챗봇 와이거에요!<br>
				&nbsp;&nbsp;학사안내, 학생지원, IT/기술지원 등 학교생활에서 궁금한 점을<br>
				&nbsp;&nbsp;질문해주시면 안내해드릴게요!
			</div>
		</div>
		<div class="menu" id="pmenu">
			<%
			Connection conn2 = webDAO.MySQLDBConnection();
			String webList = "select * from web_name";
			PreparedStatement pstmt2 = conn2.prepareStatement(webList);
			ResultSet rs2 = pstmt2.executeQuery();
			int count = 1;
			int buttonsPerPage = 9;
			int pageNumber = 1;

			while (rs2.next()) {
				web_code = rs2.getString("web_code");
				web_name = rs2.getString("web_name");
				web_url = rs2.getString("web_url");

				if (count <= buttonsPerPage) {
			%>
			<button type="button" class="sendButton" id="sendButton<%=count%>"
				value="<%=web_code%>">
				<img class="imgsize" src="/CapStonWeb/JSP/img/img_Main/<%=web_name%>.gif">
				<%=web_name%>
			</button>
			<%
			} else {
			%>
			<button type="button" class="sendButton hidden"
				id="sendButton<%=count%>" value="<%=web_code%>">
				<img class="imgsize" src="/CapStonWeb/JSP/img/img_Main/<%=web_name%>.gif">
				<%=web_name%>
			</button>
			<%
			}

			count++;

			if (count > (pageNumber * buttonsPerPage)) {
			pageNumber++;
			}
			}
			%>
		</div>

		<div class="buttonP">
			<ul>
				<%
				for (int i = 1; i <= pageNumber; i++) {
				%>
				<li id="page<%=i%>"></li>
				<%
				}
				%>
			</ul>
		</div>


	</div>


	<%
	//----------------------------
	webDAO.close(rs2);
	webDAO.close(pstmt2);
	webDAO.close(conn2);
	%>
	<script src="/CapStonWeb/JavaScript/menu.js"></script>
</body>
</html>