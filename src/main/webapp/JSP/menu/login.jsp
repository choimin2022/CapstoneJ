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
<title>컴퓨터정보계열 로그인</title>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"
	integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="
	crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/login.css">
</head>
<body>

			 <div class="loginmenu">
			   	<div class="loginTop">로그인</div>
			   	<div class="loginBody">	
				   	  <input  class="id" placeholder="아이디"/><br>
				   	  <input type='password' class="pass" placeholder="비밀번호"/>
				   	  <input type="button" class="Blogin" value="로그인"/>
	        	</div>			         
		     </div>
		                      
<script src="/CapStonWeb/JavaScript/login.js"></script>
</body>
</html>