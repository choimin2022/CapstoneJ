package jserver;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
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

@WebServlet("/endpoint")
public class ChatbotServer extends HttpServlet {

  private static final String DB_URL = "jdbc:mysql://localhost:3306/capstondsign?useSSL=false";
  private static final String DB_USER = "root";
  private static final String DB_PASSWORD = "0000";

  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    String message = request.getParameter("message");
    String webContents = "";
    String webURL = "";

    // Search for message in database
    try {
      Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
      PreparedStatement statement = connection
          .prepareStatement("SELECT Web_Contents, Web_URL FROM web_link WHERE Web_name=?");
      statement.setString(1, message);
      ResultSet resultSet = statement.executeQuery();
      if (resultSet.next()) {
        webContents = resultSet.getString("Web_Contents");
        webURL = resultSet.getString("Web_URL");
      } else {
        // If no result is found in the database, return an error message
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.print("Sorry, I could not find any information related to your query.");
        out.flush();
        return;
      }
      resultSet.close();
      statement.close();
      connection.close();
    } catch (SQLException e) {
      // Handle database connection errors
      e.printStackTrace();
      response.setContentType("text/plain");
      PrintWriter out = response.getWriter();
      out.print("Sorry, an error occurred while connecting to the database.");
      out.flush();
      return;
    } catch (Exception e) {
      // Handle other errors
      e.printStackTrace();
      response.setContentType("text/plain");
      PrintWriter out = response.getWriter();
      out.print("Sorry, an unexpected error occurred. Please try again later.");
      out.flush();
      return;
    }

    // Create JSON response
    Map<String, String> responseData = new HashMap<>();
    responseData.put("webContents", webContents);
    responseData.put("webURL", webURL);
    JSONObject jsonResponse = new JSONObject(responseData);

    // Send response to client
    response.setContentType("application/json");
    PrintWriter out = response.getWriter();
    out.print(jsonResponse.toString());
    out.flush();
  }
}
