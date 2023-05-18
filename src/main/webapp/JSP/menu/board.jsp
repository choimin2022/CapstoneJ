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
</head>
<body>
	   <div class="notice-container">
        <h2>컴정 new</h2>
        <div class="postClose">X</div>
        <div class="postBox">
        <div class="post">
            <div class="post-title" onclick="togglePost('post1')">
                <span>게시물 1 제목</span>
                <span>⬇</span>
            </div>
            <div class="post-content" id="post1">
                게시물 1 내용<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>끝
            </div>
        </div>
        
        <div class="post">
            <div class="post-title" onclick="togglePost('post2')">
                <span>게시물 2 제목</span>
                <span>⬇</span>
            </div>
            <div class="post-content" id="post2">
                게시물 2 내용
            </div>
            </div>
        </div>
        
        <!-- 추가적인 게시물 추가 가능 -->
        
    </div>

		                      
<script src="/CapStonWeb/JavaScript/board.js"></script>
</body>
</html>