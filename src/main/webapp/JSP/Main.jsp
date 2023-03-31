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

<script>
function addButton(num) {
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	            var responseText = this.responseText;
	            var msg = document.querySelector(".item");
	            msg.innerHTML += responseText;
	        }
	    };
	    xmlhttp.open("GET", "ButtonAction.jsp?num=" + num, true);
	    xmlhttp.send();
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
			<img class="tiger" alt="image" src="img/character_top2.png">
			<h1>와이거(Wyiger for comjeong)</h1>
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
					<img class="tiger_chat" alt="image" src="img/character_main5.png">
					<div class="box">

						<p class="msg">
							               <%
            Connection conn2 = webDAO.MySQLDBConnection();
            String webList = "select n.*, c.con_link from web_name n left join web_con c on n.web_code = c.web_code";

            PreparedStatement pstmt2 = conn2.prepareStatement(webList);
            ResultSet rs2 = pstmt2.executeQuery();
          
            int count = 1;
            while (rs2.next()) {
                web_code = rs2.getString("web_code");
                web_name = rs2.getString("web_name");
                web_url = rs2.getString("web_url");
                con_link = rs.getString("con_link");
            %>
                     <input type="button" name="<%=count%>" value="<%=web_name%>"
                        onclick="addButton(<%=count%>)" /><br>
                     <%
                count++;
            }
            %>
            
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
 <script>
 displayMessage("테스트 입니다.ss 컴퓨터 정보 계열 챗봇에 오신 것을 환영합니다! 컴퓨터 정보 계열은 4개의 과로 이뤄져 있으며, 매년 80% 이상 최고의 취업률을 보이고 있습니다. 계열 안내 및 계열부장 인사말을 보시려면 아래 메뉴를 클릭해주세요", "https://com.yju.ac.kr/index.php?mid=page_OXGJ16", "계열안내");
 </script>
<script>
Fmessage('<div class="item yourmsg on"><img class="tiger_chat" alt="image" src="img/character_main5.png"><div class="box"><p class="msg">영진전문대학교 일자리플러스센터에서 운영하는 취업 정보센터에 오신 것을 환영합니다! 저희 취업 정보 센터에서는 채용정보와 심리검사, 지원서 작성방법들과 창업 지원과 경력 개발 시스템을 제공하고 있습니다. 취업 정보 및 센터에서 제공하는 다양한 정보를 얻고 싶으시다면 아래 메뉴를 클릭해주세요.<br><input type="button" name="b0" value="우수취업자인터뷰" onclick="window.open(\'https://ipsi.yju.ac.kr/ipsi/164/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaXBzaSUyRjg5JTJGYXJ0Y2xMaXN0LmRvJTNGaXNWaWV3TWluZSUzRGZhbHNlJTI2YmJzQ2xTZXElM0QlMjZzcmNoV3JkJTNEJTI2YmJzT3BlbldyZFNlcSUzRDExNSUyNnNyY2hDb2x1bW4lM0RhZGRJdGVtMDElMjY%3D\', \'_blank\')"></p><span class="time">currentTime()</span></div></div>')
</script>
<script>
Fmessage2('일본IT과는 일본 IT기업 맞춤형 AI Big DaTa, 클라우드 시스템, 네트워크/보안등의 신기술을 활용할 수 있는 인재, 기획한 IT 서비스를 설계 및 개발을 할 수 있는 인재, 일본 원어민과 비즈니스 업무를 진행할 수 있는 일본어 능력을 갖춘 글로벌 인재를 양성하기 위한 학과로 14년간 총 419명, 8년 연속 100% 취업의 쾌거를 이룩했습니다. 학과의 자세한 정보를 보고 싶으시다면 아래 메뉴를 클릭해주세요.<br><input type="button" name="b0" value="일본IT과" onclick="window.open(\'https://com.yju.ac.kr/index.php?mid=page_vhPi70\', \'_blank\')">')
</script>





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