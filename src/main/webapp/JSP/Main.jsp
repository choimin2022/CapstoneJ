<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

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
<meta charset="UTF-8">
<title>Insert title here</title>

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"
	integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="
	crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="../CSS/style.css">


<link rel="stylesheet" type="text/css" href="../CSS/chatForm.css">
<script src="ChatJ.js"></script>

<script>
	$(function() {
		$("input[type='text']").keypress(
				function(e) {
					if (e.keyCode == 13 && $(this).val().length) {
						var _val = $(this).val();
						var _class = $(this).attr("class");
						$(this).val('');
						var _tar = $(".chat_wrap .inner")
								.append(
										'<div class="item '+_class+'"><div class="box"><p class="msg">'
												+ _val
												+ '</p><span class="time">'
												+ currentTime()
												+ '</span></div></div>');

						var lastItem = $(".chat_wrap .inner")
								.find(".item:last");
						setTimeout(function() {
							lastItem.addClass("on");
						}, 10);

						var position = lastItem.position().top
								+ $(".chat_wrap .inner").scrollTop();
						console.log(position);

						$(".chat_wrap .inner").stop().animate({
							scrollTop : position
						}, 500);
					}
				});

	});

	var currentTime = function() {
		var date = new Date();
		var hh = date.getHours();
		var mm = date.getMinutes();
		var apm = hh > 12 ? "오후" : "오전";
		var ct = apm + " " + hh + ":" + mm + "";
		return ct;
	}
</script>

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
			<img class="tiger" alt="image" src="character_mini.jpg">
			<h1>컴정챗봇</h1>
		</div>



		<div class="chat_wrap">
			<div class="inner">




				<!-- 채팅창이 들어갈 곳과 버튼이 들어갈 곳-->
				<!-- <div class="item">
        <div class="box">
            <p class="msg">안녕하세요</p>
            <span class="time">오전 10:05</span>
        </div>
    </div>

    <div class="item mymsg">
        <div class="box">
            <p class="msg">안녕하세요</p>
            <span class="time">오전 10:05</span>
        </div>
    </div> -->
				<div class="item yourmsg on">
					<img class="tiger_chat" alt="image" src="character_mini.jpg">
					<div class="box">

						<p class="msg">
							<%
							Connection conn2 = webDAO.MySQLDBConnection();
							String webList = "select * from web_name";

							PreparedStatement pstmt2 = conn2.prepareStatement(webList);
							ResultSet rs2 = pstmt2.executeQuery();
							while (rs2.next()) {
								web_code = rs2.getString("web_code");
								web_name = rs2.getString("web_name");
								web_url = rs2.getString("web_url");
							%>
							<input type="button" name=b0 value="<%=web_name%>"
								onclick="location.href='<%=web_url%>'" />

							<%
							}
							%>
						</p>

					</div>
				</div>
				<div class="item yourmsg on">
					<img class="tiger_chat" alt="image" src="character_mini.jpg">

					<div class="box">
						<p class="msg">
							테스트 입니다.ss 컴퓨터 정보 계열 챗봇에 오신 것을 환영합니다! 컴퓨터 정보 계열은 4개의 과로 이뤄져 있으며,
							매년 80% 이상 최고의 취업률을 보이고 있습니다. 계열 안내 및 계열부장 인사말을 보시려면 아래 메뉴를 클릭해주세요<br>
							<input type="button" name="b0" value="계열안내"
								onclick="location.href='https://com.yju.ac.kr/index.php?mid=page_OXGJ16'">
						</p>
					</div>
				</div>
			</div>




			<input type="text" class="mymsg" placeholder="내용 입력"
				list="searchOptions" />
			<datalist id="searchOptions">
				<option value="계열 소개" />
				<option value="입학 문의" />
				<option value="성적 문의" />
				<option value="휴/복학 문의" />
			</datalist>
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


</body>
</html>