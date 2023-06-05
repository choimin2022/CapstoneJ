package jserver;

import java.io.BufferedReader; 
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
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

import org.json.JSONException;
import org.json.JSONObject;

import DBConnect.webDAO;

@WebServlet("/Jserver")
public class ChatbotServer extends HttpServlet {
	int i = 0;
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {  
	  System.out.println(++i + " doPost() 메소드 연결 완료");
	 // 클라이언트 json을 인코딩된 문자열로 받는 코드
	  StringBuilder sb = new StringBuilder();
	    BufferedReader reader = request.getReader();
	    try {
	        String line;
	        while ((line = reader.readLine()) != null) {
	            sb.append(line).append('\n');
	        }
	    } finally {
	        reader.close();
	    }
	    String message = sb.toString();
	    System.out.println(i + " 받은 메시지: " + message);
	   
	    // 디코딩해서 문자열 변환
	    message = java.net.URLDecoder.decode(message, "UTF-8");
	    System.out.println(i + " 디코딩 메시지: " + message);

	    // json 객체에 message 키값 제거 + 단어 사이의 공백 제거 띄어쓰기도 제거해서 읽기 가능
	    JSONObject jsonMessage = new JSONObject(message);
	    String searchWord = jsonMessage.getString("message").trim().replaceAll("\\s+", "");
	    
	    // 파일주소를 데이터베이스에서 검색        
	    webDAO webDAO = new webDAO();
        String conLink = null;
        try {
        	Connection conn = webDAO.MySQLDBConnection();        	       	
        	PreparedStatement statement = conn.prepareStatement("select * from web_name where w_name= ?");
        	statement.setString(1, searchWord);
        	ResultSet resultSet = statement.executeQuery();
        	if (resultSet.next()) {
        	conLink = resultSet.getString("w_url");
        	System.out.println("db접속중(3) 링크 찾음: " + conLink);
        	}
          resultSet.close();
          statement.close();
          conn.close();
          System.out.println("db닫음");
      }
      catch (SQLException | JSONException e) {
    	  System.out.println("에러 발생: " + e.getMessage());
      }
       if (conLink == null) {
    	    // 데이터베이스 테이블이 비었을때 오류처리
    	/*    Map<String, String> responseData = new HashMap<>();
    	      responseData.put("fileContents", "내가 모르는거 묻지마");
    	      JSONObject jsonResponse = new JSONObject(responseData);
    	      System.out.println("오류을 json으로 보낼 준비");
    	      // Send response to client
    	      response.setContentType("application/json");
    	      response.setCharacterEncoding("UTF-8");
    	      System.out.println("인코딩 완료!");
    	      PrintWriter out = null;
    	      try {
    	          out = response.getWriter();
    	          out.print(jsonResponse.toString());
    	          System.out.println("json 안에 담기 완료!");
    	          out.flush();
    	          System.out.println(out);
    	      } catch (IOException e) {
    	          // handle error writing to response
    	          e.printStackTrace();
    	      } finally {
    	          if (out != null) {
    	              out.close();
    	              System.out.println("클라이언트로 오류 전달 완료!");
    	          }
    	      }  */
      }
    	 else {
    	    // Fetch the contents of the div file using con_link
    	    String fileContents = "";
    	    System.out.println("파일을 가져올 준비중1");
			try {
				System.out.println("파일을 가져올 준비중2");
				fileContents = fetchFileContents(conLink);
				System.out.println("파일 내용 저장 완료" + fileContents);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
    	    // 결과 반환
    	    Map<String, String> responseData = new HashMap<>();
  	      responseData.put("fileContents", fileContents);
  	      JSONObject jsonResponse = new JSONObject(responseData);
  	      System.out.println("내용을 json으로 보낼 준비");
  	      // Send response to client
  	      response.setContentType("application/json");
  	      response.setCharacterEncoding("UTF-8");
  	      System.out.println("인코딩 완료!");
  	      PrintWriter out = null;
  	      try {
  	          out = response.getWriter();
  	          out.print(jsonResponse.toString());
  	          System.out.println("json 안에 담기 완료!");
  	          out.flush();
  	          System.out.println(out);
  	      } catch (IOException e) {
  	          // handle error writing to response
  	          e.printStackTrace();
  	      } finally {
  	          if (out != null) {
  	              out.close();
  	              System.out.println("클라이언트로 전달 완료!");
  	          }
  	      }
  	  }      
    }
  private String fetchFileContents(String conLink) throws Exception {
	    System.out.println("파일을 검색중");

	   String path = getServletContext().getRealPath(conLink);
	    File file = new File(path);
	    System.out.println(path);

	    BufferedReader in = new BufferedReader(new FileReader(file));
	    String inputLine;
	    StringBuilder sb = new StringBuilder();
	    while ((inputLine = in.readLine()) != null) {
	        sb.append(inputLine);
	    }
	    in.close();
	    System.out.println("파일 찾기 완료!");
	    return sb.toString();
	}





}
/*== 파일 내용 저장 url 버전
private String fetchFileContents(String conLink) throws Exception {
	    System.out.println("파일검색 함수로 들어옴");
	    URL url = new URL(conLink);
	    System.out.println("파일 읽기 0단계");
	    BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
	    System.out.println("파일 읽기 1단계");
	    String inputLine;
	    System.out.println("파일 읽기 2단계");
	    StringBuilder sb = new StringBuilder();
	    System.out.println("파일 읽기 3단계");
	    while ((inputLine = in.readLine()) != null) {
	        sb.append(inputLine);
	    }
	    System.out.println("파일 다 읽음");
	    in.close();
	    System.out.println("파일 내용 저장 완료");
	    return sb.toString();
	}*/



