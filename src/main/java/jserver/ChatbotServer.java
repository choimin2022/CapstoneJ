package jserver;

import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

@Path("/receive-answer")
public class ChatbotServer {
  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public String receiveAnswer(AnswerData data) {
    // 데이터 개체에서 사용자의 답변 추출
    String userAnswer = data.getAnswer();

    // 사용자 답변에서 문장 추출(첫 번째 문장이라고 가정)
    String sentence = userAnswer.split("\\.")[0];

    // 데이터베이스에서 문장에 대한 정보 검색
    SentenceInfo sentenceInfo = retrieveSentenceInfo(sentence);

    // SentenceInfo 개체를 JSON 문자열로 변환
    String sentenceInfoJson = convertToJson(sentenceInfo);

    // JSON 문자열을 클라이언트에 반환
    return sentenceInfoJson;
  }

  // 데이터베이스에서 문장에 대한 정보를 검색하는 기능
  private SentenceInfo retrieveSentenceInfo(String sentence) {
    Connection conn = null;
    PreparedStatement stmt = null;
    ResultSet rs = null;
    SentenceInfo sentenceInfo = null;

    try {
      // 데이터베이스에 연결
      conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/capstone", "root", "0000");

      // 문장에 대한 정보를 검색하기 위해 SQL 쿼리를 준비합니다.
      stmt = conn.prepareStatement("SELECT * FROM web_con WHERE  = ?");

      // SQL 쿼리에 대한 매개변수 설정
      stmt.setString(1, sentence);

      // SQL 쿼리 실행 및 결과 검색
      rs = stmt.executeQuery();

      // 행이 반환된 경우 정보를 사용하여 새 SentenceInfo 개체를 만듭니다.
      if (rs.next()) {
        int id = rs.getInt("id");
        String text = rs.getString("text");
        sentenceInfo = new SentenceInfo(id, text);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    } finally {
      // 데이터베이스 연결 및 리소스 닫기
      try {
        if (rs != null) {
          rs.close();
        }
        if (stmt != null) {
          stmt.close();
        }
        if (conn != null) {
          conn.close();
        }
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }

    return sentenceInfo;
  }

  // SentenceInfo 객체를 JSON 문자열로 변환하는 함수
  private String convertToJson(SentenceInfo sentenceInfo) {
    Gson gson = new Gson();
    return gson.toJson(new SentenceInfoWrapper(sentenceInfo));
  }
}

// 클라이언트의 POST 요청에서 받은 데이터를 나타내는 클래스
class AnswerData {
  private String answer;

  public String getAnswer() {
    return answer;
  }

  public void setAnswer(String answer) {
    this.answer = answer;
  }
}

// JSON 직렬화를 위해 SentenceInfo 개체를 래핑하는 클래스
class SentenceInfoWrapper {
  private int id;
  private String text;

  public SentenceInfoWrapper(SentenceInfo sentenceInfo) {
    if (sentenceInfo != null) {
      this.id = sentenceInfo.getId();
      this.text = sentenceInfo.getText();
    }
  }

  public int getId() {
    return id;
  }

  public String getText() {
    return text;
  }
}

// 문장에 대한 정보를 나타내는 클래스
class SentenceInfo {
  private int id;
  private String text;

  public SentenceInfo(int id, String text) {
    this.id = id;
    this.text = text;
  }

  public int getId() {
    return id;
  }

  public String getText() {
    return text;
  }
}