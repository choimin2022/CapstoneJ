package jserver;

import java.io.IOException;
import java.util.Properties;
import java.util.stream.Collectors;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

@WebServlet("/SendEmailServlet")
public class SendEmailServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	// 요청의 내용을 UTF-8로 디코딩하여 JSON으로 파싱하여 데이터 추출
    	String requestBody = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
    	JSONObject json = new JSONObject(new String(requestBody.getBytes("ISO-8859-1"), "UTF-8"));
    	String title = json.getString("title");
    	String content = json.getString("content");
    	String id = json.getString("id");
    	String name = json.getString("name");
        // 발신자 및 수신자 이메일 설정
        String from = id;
        String to = "woghdfhqhtv@gmail.com";

        // Gmail SMTP 서버 설정
        String host = "smtp.gmail.com";
        int port = 587;
        String username = "woghdfhqhtv@gmail.com";
        String password = "iknhzitozqiuwnef";

        // 이메일 세션 생성
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            // 이메일 생성
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from, name));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject(title);
            message.setContent(content, "text/html; charset=UTF-8");

            // 이메일 전송
            Transport.send(message);
        
            // 전송 완료 후에 수행할 동작을 여기에 추가하세요 (예: 응답 페이지로 이동)
            response.setStatus(HttpServletResponse.SC_OK);
        } catch (MessagingException e) {
            // 전송 실패 처리를 여기에 추가하세요 (예: 에러 응답 보내기)
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
    }
}
