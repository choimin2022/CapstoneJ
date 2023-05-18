package jserver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import user.userDTO;
import DBConnect.UserDAO;

@WebServlet("/login")
public class login extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // request에서 json 데이터 추출
        BufferedReader reader = request.getReader();
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

        UserDAO userdao = new UserDAO();

        String u_name = userdao.isValidUser(u_id, u_pass);

        // set response data
        JSONObject resultJson = new JSONObject();
        if (u_name != null) {
            resultJson.put("result", "yeslogin");
            resultJson.put("name", u_name);
        } else {
            resultJson.put("result", "nologin");
        }

        // send response
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        out.print(resultJson.toString());
        out.flush();
    }
}
