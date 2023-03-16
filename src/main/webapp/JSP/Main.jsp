<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ page import="java.sql.*"%>
<%@ page import="java.io.*"%>
<%@ page import="web_list.web_ListDAO"%>
<%@ page import="web_list.web_ListDTO"%>
<!--web_link-->
<%@ page import="web_link.webDTO"%>
<%@ page import="web_link.webDAO"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="crossorigin="anonymous"></script>

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
	int j_code;
	String j_name = request.getParameter("j_name");
	String j_link = request.getParameter("j_link");
	//-------------------------------------------------------------------------
	int web_number;
	String web_code = request.getParameter("web_code");
	String web_name = request.getParameter("web_name");
	String web_contents = request.getParameter("web_contents");
	String web_url = request.getParameter("web_url");
	int total = 0;

	if (request.getParameter("web_number") != null) {
		web_number = Integer.parseInt(request.getParameter("web_number"));
	}

	//getParameter은 String방식으로 들고오기 때문에 int형으로 변형해줘야 된다.	
	/*	if(request.getParameter("j_code") !=null){
			j_code=Integer.parseInt(request.getParameter("j_code"));	
		}*/

	Connection conn = web_ListDAO.getMySQLConnection();
	//웹링크 내용을 모두 불러온다.
	String jspList = "select * from jsplist";

	PreparedStatement pstmt = conn.prepareStatement(jspList);
	ResultSet rs = pstmt.executeQuery();
	if (rs.next()) {
		j_code = rs.getInt("j_code");
		j_name = rs.getString("j_name");
		j_link = rs.getString("j_link");
	}
	//-----------------------------------------------------------
	%>

	<!--상단 드롭메뉴-->

	<div id="root">
		<div id="top">
			<div class="dropdown">
				<span class="dropbtn">drop down</span>
				<div class="dropdown-content">
					<a href="#">link 1</a> <a href="#">link 2</a> <a href="#">link
						3</a>
				</div>
			</div>
			<!--상단바-->
			<h1>영진전문대</h1>
		</div>
		<div id="main">


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
						<div class="box">
		
				<p class="msg" >
												<%
					Connection conn2 = webDAO.getMySQLConnection();
					String webList = "select * from web_link";

					PreparedStatement pstmt2 = conn2.prepareStatement(webList);
					ResultSet rs2 = pstmt2.executeQuery();
					while (rs2.next()) {
						web_number = rs2.getInt("web_number");
						web_code = rs2.getString("web_code");
						web_name = rs2.getString("web_name");
						web_contents = rs2.getString("web_contents");
						web_url = rs2.getString("web_url");
						total++;
					%>
				<input type="button" name=b0 value="<%=web_name%>"
						onclick="location.href='<%=web_url%>'" />
						
								<%
					}
					%>
						</p>
			
						</div>
					</div>
				</div>



				<input type="text" class="mymsg" placeholder="내용 입력"> 
				<!-- <input type="text" class="yourmsg" placeholder="내용 입력"> -->
			</div>

			<!-- CSS문제점 채팅이 나오면 아랫쪽에 새로운 div가 생성되며 화면이 다 보였을 시 overflow로 인해 스크롤바가 생격야 됨 그런데 아래에 생성이 되는게 아닌 중앙정렬이 됨 -->


		</div>

	</div>


	<%
	//DB종료
	web_ListDAO.close(rs);
	web_ListDAO.close(pstmt);
	web_ListDAO.close(conn);
	//----------------------------
	webDAO.close(rs2);
	webDAO.close(pstmt2);
	webDAO.close(conn2);
	%>


</body>
</html>