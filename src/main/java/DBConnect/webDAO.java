package DBConnect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class webDAO {
	public static Connection MySQLDBConnection() {
		Connection conn = null;
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String url = "jdbc:mysql://database-1.c21qgjfkmmk8.ap-northeast-2.rds.amazonaws.com:3306/capstone?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8";
			String user = "admin";
			String pwd = "ccna1234";
			conn = DriverManager.getConnection(url,user,pwd);
		}
		catch(ClassNotFoundException e) {System.out.println("MySQL 드라이버가 없습니다.<br/>");}
		catch(SQLException e) {System.out.println("사용자 계정 또는 비밀번호가 일치하지 않습니다.<br/>");}
		
		return conn;
	}
	
	
	public static void close(Connection conn) {
		try {
			if(conn != null) {
				conn.close();
			}
		}
		catch(Exception E) {E.printStackTrace();}
	}
	
	public static void close(Statement stmt) {
		try {
			if(stmt != null) {
				stmt.close();
			}
		}
		catch(Exception E) {E.printStackTrace();}
	}
	public static void close(PreparedStatement pstmt) {
		try {
			if(pstmt != null) {
				pstmt.close();
			}
		}
		catch(Exception E) {E.printStackTrace();}
	}
	public static void close(ResultSet rs) {
		try {
			if(rs != null) {
				rs.close();
			}
		}
		catch(Exception E) {E.printStackTrace();}
	}
}
