package DBConnect;

import java.sql.Connection; 
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import board.boardDTO;

public class boardDAO {
	private Connection conn = null;
	private PreparedStatement pstmt = null;
	private ResultSet rs = null;

	public boardDAO() {
		conn = webDAO.MySQLDBConnection();
	}

	public List<boardDTO> getBoardList() throws SQLException {
		List<boardDTO> boardList = new ArrayList<>();
		String sql = "SELECT * FROM board";
		try (PreparedStatement statement = conn.prepareStatement(sql);
			ResultSet resultSet = statement.executeQuery()) {
			while (resultSet.next()) {
				boardDTO board = new boardDTO();
				board.setB_num(resultSet.getInt("b_num"));
				board.setU_id(resultSet.getString("u_id"));
				board.setB_title(resultSet.getString("b_title"));
				board.setB_content(resultSet.getString("b_content"));
				board.setB_like(resultSet.getInt("b_like"));
				board.setB_check(resultSet.getBoolean("b_check"));
				board.setB_date(resultSet.getString("b_date"));
				boardList.add(board);
			}
		}
		return boardList;
	}

	public void addBoard(boardDTO board) throws SQLException {
		String sql = "INSERT INTO board (u_id, b_title, b_content, b_like, b_check, date) VALUES (?, ?, ?, ?, ?, ?)";
		try (PreparedStatement statement = conn.prepareStatement(sql)) {
			statement.setString(1, board.getU_id());
			statement.setString(2, board.getB_title());
			statement.setString(3, board.getB_content());
			statement.setInt(4, board.getB_like());
			statement.setBoolean(5, board.isB_check());
			statement.setString(6, board.getB_date());
			statement.executeUpdate();
		}
	}

	public void updateBoard(boardDTO board) throws SQLException {
		String sql = "UPDATE board SET u_id = ?, b_title = ?, b_content = ?, b_like = ?, b_check = ?, date = ? WHERE b_num = ?";
		try (PreparedStatement statement = conn.prepareStatement(sql)) {
			statement.setString(1, board.getU_id());
			statement.setString(2, board.getB_title());
			statement.setString(3, board.getB_content());
			statement.setInt(4, board.getB_like());
			statement.setBoolean(5, board.isB_check());
			statement.setString(6, board.getB_date());
			statement.setInt(7, board.getB_num());
			statement.executeUpdate();
		}
	}

	public void deleteBoard(int b_num) throws SQLException {
		String sql = "DELETE FROM board WHERE b_num = ?";
		try (PreparedStatement statement = conn.prepareStatement(sql)) {
			statement.setInt(1, b_num);
			statement.executeUpdate();
		}
	}

}