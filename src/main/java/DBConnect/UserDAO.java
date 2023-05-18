package DBConnect;

import DBConnect.webDAO;
import user.userDTO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UserDAO {

	private Connection conn = null;
	private PreparedStatement pstmt = null;
	private ResultSet rs = null;

	public UserDAO() {
		conn = webDAO.MySQLDBConnection();
	}

// 회원가입 정보를 DB에 추가하는 메서드
	public boolean addUser(userDTO user) {
	    Connection conn = null;
	    PreparedStatement pstmt = null;
	    boolean isSuccess = false;
	    
	    try {
	        conn = webDAO.MySQLDBConnection();
	        String query = "INSERT INTO member (u_id, u_pass, u_name, u_number) VALUES (?, ?, ?, ?)";
	        pstmt = conn.prepareStatement(query);
	        pstmt.setString(1, user.getU_id());
	        pstmt.setString(2, user.getU_pass());
	        pstmt.setString(3, user.getU_name());
	        pstmt.setString(4, user.getU_number());
	        int rowsInserted = pstmt.executeUpdate();
	        if (rowsInserted > 0) {
	            isSuccess = true;
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    } finally {
	        webDAO.close(pstmt);
	        webDAO.close(conn);
	    }
	    return isSuccess;
	}


// 기존 회원인지 확인하는 메서드
	public boolean isExistingUser(String u_id) {
		boolean result = false;
		try {
			String sql = "SELECT * FROM member WHERE u_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, u_id);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				result = true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			webDAO.close(rs);
			webDAO.close(pstmt);
			webDAO.close(conn);
		}
		return result;
	}

// 로그인 검증하는 메서드
	public String isValidUser(String u_id, String u_pass) {
		String name = null;
		try {
		String sql = "SELECT u_name FROM member WHERE u_id=? AND u_pass=?";
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, u_id);
		pstmt.setString(2, u_pass);
		rs = pstmt.executeQuery();
		if (rs.next()) {
		name = rs.getString("u_name");
		
		}
		} catch (SQLException e) {
		e.printStackTrace();
		} finally {
		webDAO.close(rs);
		webDAO.close(pstmt);
		webDAO.close(conn);
		}
		return name;
		}
}