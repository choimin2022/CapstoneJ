package jserver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import DBConnect.webDAO;

@WebServlet("/Endpoint")
public class ChatbotServer extends HttpServlet {

  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      webDAO webDAO = new webDAO();

      // 파일주소를 데이터베이스에서 검색
      String message = request.getParameter("message");
      String conLink = null;

      try {
          Connection conn = webDAO.MySQLDBConnection();
          String sql = "SELECT c.con_link FROM web_name n LEFT JOIN web_con c ON n.web_code = c.web_code WHERE n.web_name = ?";
          PreparedStatement statement = conn.prepareStatement(sql);
          statement.setString(1, message);
          ResultSet resultSet = statement.executeQuery();
          if (resultSet.next()) {
              conLink = resultSet.getString("con_link");
          }
          resultSet.close();
          statement.close();
          conn.close();
      }
      catch (SQLException e) {
    	    // handle exception
      }
      if (conLink == null) {
    	    // If no result is found in the database, return an error message
    	    response.setContentType("text/plain");
    	    PrintWriter out = response.getWriter();
    	    out.print("죄송합니다. 채팅과 관련된 정보를 찾을 수 없습니다.");
    	    out.flush();
    	    return;
    	} else {
    	    // Fetch the contents of the div file using con_link
    	    String fileContents = "";
			try {
				fileContents = fetchFileContents(conLink);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
    	    // return the result
    	    Map<String, String> responseData = new HashMap<>();
  	      responseData.put("fileContents", fileContents);
  	      JSONObject jsonResponse = new JSONObject(responseData);

  	      // Send response to client
  	      response.setContentType("application/json");
  	      PrintWriter out = null;
  	      try {
  	          out = response.getWriter();
  	          out.print(jsonResponse.toString());
  	          out.flush();
  	      } catch (IOException e) {
  	          // handle error writing to response
  	          e.printStackTrace();
  	      } finally {
  	          if (out != null) {
  	              out.close();
  	          }
  	      }
  	  }      
    }
  // 파일 내용 저장
  private String fetchFileContents(String conLink) throws Exception {
	    URL url = new URL(conLink);
	    BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
	    String inputLine;
	    StringBuilder sb = new StringBuilder();
	    while ((inputLine = in.readLine()) != null) {
	        sb.append(inputLine);
	    }
	    in.close();
	    return sb.toString();
	}

}
      	    
  
