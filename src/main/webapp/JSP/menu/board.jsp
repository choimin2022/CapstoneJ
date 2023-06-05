<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.nio.charset.StandardCharsets" %>

<%@ page import="java.sql.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.List"%> <!-- List import 추가 -->
<%@ page import="DBConnect.webDAO"%>
<%@ page import="board.boardDTO"%>
<%@ page import="DBConnect.boardDAO" %>
<!-- mysql 연동 -->

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
        <h2>컴정 New</h2>
        <div class="postClose">X</div>
        <div class="postBox">

            <% 
    // DAO 객체 생성
    boardDAO dao = new boardDAO();
    
    // 데이터베이스에서 게시물 목록 조회
    List<boardDTO> boardList = dao.getBoardList();

    // 게시물 목록을 기반으로 게시물 생성
    for (boardDTO board : boardList) {
    %>
            <div class="post">
                <div class="post-title" onclick="togglePost('<%= board.getB_num() %>')">
                    <span><%= board.getB_title() %></span> <span>⬇</span>
                </div>
                <div class="post-content" id="<%= board.getB_num() %>">
                    <%= board.getB_content() %>
                </div>
            </div>
            <% } %>

        </div>

        <!-- Additional posts can be added -->

    </div>

    <script src="/CapStonWeb/JavaScript/board.js"></script>
</body>
</html>
