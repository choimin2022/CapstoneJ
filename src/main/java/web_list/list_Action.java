package web_list;

import java.util.ArrayList;

import web_link.webDTO;
import java.sql.*;

public class list_Action {
	
	int j_code;
	String j_name;
	String j_link;
	
	public void SelectAll() {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		ArrayList<webDTO> Web_Link = new ArrayList<>();
		
		try {
			conn = web_ListDAO.getMySQLConnection();
			String sql = "select * from jsplist";
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				j_code = rs.getInt("j_code");
				j_name = rs.getString("j_name");
				j_link = rs.getString("j_link");
			}
		}
		catch(SQLException se) {
			se.printStackTrace();
		}
		try {
			pstmt.close();
			rs.close();
			conn.close();
		}
		catch(SQLException se2) {
			se2.printStackTrace();
		}
		
		

			
			

	}
}
