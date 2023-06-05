package jserver;

import java.io.BufferedReader; 
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import member.memberDTO;
import DBConnect.UserDAO;

@WebServlet("/signup")
public class signup extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // request에서 json 데이터 추출
    	BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream(), "UTF-8"));
    	StringBuilder sb = new StringBuilder();
    	String line;
    	while ((line = reader.readLine()) != null) {
    	    sb.append(line);
    	}
    	String jsonData = sb.toString();

    	// 파싱 json data
    	JSONObject json = new JSONObject(jsonData);
    	String u_id = json.getString("email");
    	String u_pass = json.getString("password");
    	String u_name = json.getString("fullname");
    	String u_number = json.getString("phone");


    	UserDAO userdao = new UserDAO();
    	boolean existingEmail = userdao.isExistingUser(u_id);
    	if (existingEmail) {
    	    // 이메일이 이미 가입된 경우
    	    response.setContentType("text/plain");
    	    response.setCharacterEncoding("UTF-8");
    	    response.getWriter().write("이메일 " + u_id + " 는 이미 사용중입니다.");
    	} else {
    	    // 새로운 회원 추가
    	    memberDTO user = new memberDTO();
    	    user.setU_id(u_id);
    	    user.setU_pass(u_pass);
    	    user.setU_name(u_name);
    	    user.setU_number(u_number);

    	    boolean isSuccess = userdao.addUser(user);

    	    if (isSuccess) {
    	        //회원가입 성공
    	        response.setContentType("text/plain");
    	        response.setCharacterEncoding("UTF-8");
    	        response.getWriter().write("회원가입에 성공했습니다!");
    	    } else {
    	        // 회원가입 실패
    	        response.setContentType("text/plain");
    	        response.setCharacterEncoding("UTF-8");
    	        response.getWriter().write("회원가입에 실패했습니다.");
    	    }
    	}

    }
}




