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
<title>컴퓨터정보계열 회원가입</title>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<script src="https://code.jquery.com/jquery-1.8.3.min.js"
	integrity="sha256-YcbK69I5IXQftf/mYD8WY0/KmEDCv1asggHpJk1trM8="
	crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="/CapStonWeb/CSS/signup.css">
</head>
<body>
		<div class="signupmenu">
		  <div class="signupBody">
		    <form>
		    <div class="signupTop">회원가입</div>
		    <div class="signupClose">X</div>
		      <div class="form-group">
		        <label for="email" class="label L2">이메일</label>
		        <input type="email" id="email" name="email" class="signupInput" required>
		      </div>
		      <div class="form-group">
		        <label for="password" class="label L2">비밀번호</label>
		        <input type="password" id="password" name="password" class="signupInput" required>
		      </div>
		      <div class="form-group">
		        <label for="confirm-password" class="label L2">비밀번호 확인</label>
		        <input type="password" id="confirm-password" name="confirm-password" class="signupInput" required>
		      </div>
		      <div class="form-group">
		        <label for="fullname" class="label L2">이름</label>
		        <input type="text" id="fullname" name="fullname" class="signupInput" required>
		      </div>
		      <div class="form-group">
		        <label for="phone" class="label L2">휴대폰번호</label>
		        <input type="tel" id="phone" name="phone" placeholder="-빼고 입력해주세요"  class="signupInput" required>
		      </div>
		      <div class="form-group">
		        <button type="submit" class="label">회원가입</button>
		      </div>
		    </form>
		  </div>
		</div>

		                      
<script src="/CapStonWeb/JavaScript/signup.js"></script>
</body>
</html>