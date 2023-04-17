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
<link rel="icon" href="/CapStonWeb/JSP/img/Logo2.png">
<title>컴퓨터정보계열 게시판</title>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"
	integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="
	crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/board.css">
<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/menu.css">
</head>
<body>
		<div class="boardmenu">
			<div class="boardTop">컴퓨터정보계열 새소식</div>			
			<div>내용
			
			
			
			
			
			
			</div>	 
				
			<div class="buttonP">
			    <ul>
			  	<li id="pageOne"></li>
			  	<li id="pageTwo"></li>
			    </ul>
		    </div>	            
		 </div>
		                      
<script src="/CapStonWeb/JavaScript/board.js"></script>
<script src="/CapStonWeb/JavaScript/menu.js"></script>
</body>
</html>