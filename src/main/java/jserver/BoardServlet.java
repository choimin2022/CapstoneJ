package jserver;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import board.boardDTO;
import DBConnect.boardDAO;

@WebServlet("/BoardServlet")
public class BoardServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            // DAO 객체 생성
            boardDAO dao = new boardDAO();

            // 게시물 목록 조회
            List<boardDTO> boardList = dao.getBoardList();

            // 조회된 게시물을 request에 저장
            request.setAttribute("boardList", boardList);

            // JSP로 포워드
            request.getRequestDispatcher("board.jsp").forward(request, response);
        } catch (SQLException e) {
            e.printStackTrace();
            // 오류 처리
            response.getWriter().println("데이터베이스 오류 발생");
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // 게시물 작성 로직
        String title = request.getParameter("title");
        String content = request.getParameter("content");

        try {
            // DAO 객체 생성
            boardDAO dao = new boardDAO();

            // 게시물 추가
            boardDTO board = new boardDTO();
            board.setB_title(title);
            board.setB_content(content);
            dao.addBoard(board);

            // 게시물 목록 조회
            List<boardDTO> boardList = dao.getBoardList();

            // 조회된 게시물을 request에 저장
            request.setAttribute("boardList", boardList);

            // JSP로 포워드
            request.getRequestDispatcher("board.jsp").forward(request, response);
        } catch (SQLException e) {
            e.printStackTrace();
            // 오류 처리
            response.getWriter().println("데이터베이스 오류 발생");
        }
    }
}
