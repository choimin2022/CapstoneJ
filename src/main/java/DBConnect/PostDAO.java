package DBConnect;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import post.PostDTO;

public class PostDAO {
    private Connection connection;

    public PostDAO(Connection connection) {
        this.connection = connection;
    }

    public List<Post> getAllPosts() throws SQLException {
        List<Post> postList = new ArrayList<>();
        String sql = "SELECT * FROM posts";
        try (PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int postId = resultSet.getInt("post_id");
                String title = resultSet.getString("title");
                String content = resultSet.getString("content");

                Post post = new Post(postId, title, content);
                postList.add(post);
            }
        }
        return postList;
    }

    public void addPost(Post post) throws SQLException {
        String sql = "INSERT INTO posts (title, content) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, post.getTitle());
            statement.setString(2, post.getContent());
            statement.executeUpdate();
        }
    }

    public void updatePost(Post post) throws SQLException {
        String sql = "UPDATE posts SET title = ?, content = ? WHERE post_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, post.getTitle());
            statement.setString(2, post.getContent());
            statement.setInt(3, post.getPostId());
            statement.executeUpdate();
        }
    }

    public void deletePost(int postId) throws SQLException {
        String sql = "DELETE FROM posts WHERE post_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, postId);
            statement.executeUpdate();
        }
    }
}
