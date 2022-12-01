import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
//import com.mysql.cj.protocol.Message;

public class JDBCConnector {
	public static int signUp(String username, String password, String hint, String profileImage, String bio,
			int rating) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			String query = "INSERT INTO project.Users (name, password, hint, profileImage, bio, rating) VALUES ('"
					+ username + "', '" + password + "', '" + hint + "', '" + profileImage + "', '" + bio + "', '"
					+ rating + "')";
			// adapted from
			// https://stackoverflow.com/questions/1915166/how-to-get-the-insert-id-in-jdbc
			PreparedStatement pstmt = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
			pstmt.executeUpdate();
			ResultSet keys = pstmt.getGeneratedKeys();
			keys.next();
			int key = keys.getInt(1);
			return key;
		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}

		return -1;
	}

	public static int verifyUser(String username, String password) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		int userID = -1;
		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			ResultSet rs = st.executeQuery(
					"SELECT * FROM project.Users WHERE name = '" + username + "' AND password='" + password + "'");
			if (rs.next() == false) {
				System.out.println("No user");
				return -1;
			} else {
				userID = rs.getInt("userID");
			}

			return userID;
			// st = conn.createStatement();
			// st.execute("INSERT INTO Users (username, email, password) VALUES (" +
			// username + ", '" + email + "'," + password + ")");
		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return -1;
	}

	public static int createPost(String date, String image, String name, int rating, String text, int userID) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			String query = "INSERT INTO project.Recipes (name, userID, image, text, rating, date) VALUES ('" + name
					+ "', '" + userID + "', '" + image + "', '" + text + "', '" + rating + "', '" + date + "')";
			// adapted from
			// https://stackoverflow.com/questions/1915166/how-to-get-the-insert-id-in-jdbc
			PreparedStatement pstmt = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
			pstmt.executeUpdate();
			ResultSet keys = pstmt.getGeneratedKeys();
			keys.next();
			int key = keys.getInt(1);
			return key;
		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}

		return -1;
	}

	public static ArrayList<Post> getAllPosts(int userID) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		ArrayList<Post> post = new ArrayList<Post>();

		Post curr_post;

		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM project.Recipes WHERE userID = " + userID);
			while (rs.next()) {
				curr_post = new Post(rs.getString("date"), rs.getString("image"), rs.getString("name"),
						rs.getInt("rating"), rs.getString("text"), rs.getInt("userID"), rs.getInt("postID"));

				post.add(curr_post);
			}

			return post;

		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return null;
	}

	public static ArrayList<Post> getPostsByKey(String KeyWord) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		ArrayList<Post> post = new ArrayList<Post>();

		Post curr_post;

		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			System.out.println(KeyWord);
			ResultSet rs = st.executeQuery("SELECT * FROM project.Recipes WHERE name LIKE " + "\'%" + KeyWord + "%\'");
			while (rs.next()) {
				curr_post = new Post(rs.getString("date"), rs.getString("image"), rs.getString("name"),
						rs.getInt("rating"), rs.getString("text"), rs.getInt("userID"), rs.getInt("postID"));

				post.add(curr_post);
			}

			return post;

		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return null;
	}

	public static ArrayList<Post> getAllPosts() {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		ArrayList<Post> post = new ArrayList<Post>();

		Post curr_post;

		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM project.Recipes");
			while (rs.next()) {
				curr_post = new Post(rs.getString("date"), rs.getString("image"), rs.getString("name"),
						rs.getInt("rating"), rs.getString("text"), rs.getInt("userID"), rs.getInt("postID"));

				post.add(curr_post);
				curr_post.getPostID();
			}

			return post;

		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return null;
	}

	public static ArrayList<Post> searchPosts(String user) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		ArrayList<Post> post = new ArrayList<Post>();

		Post curr_post;

		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM project.Recipes");
			while (rs.next()) {
				curr_post = new Post(rs.getString("date"), rs.getString("image"), rs.getString("name"),
						rs.getInt("rating"), rs.getString("text"), rs.getInt("userID"), rs.getInt("postID"));

				post.add(curr_post);
			}

			return post;

		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return null;
	}

	public static Post getPost(int postID) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		Post post;
		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM project.Recipes WHERE postID = " + postID);
			if (rs.next() == false) {
				System.out.println("No post");
				return null;
			} else {
				post = new Post(rs.getString("date"), rs.getString("image"), rs.getString("name"), rs.getInt("rating"),
						rs.getString("text"), rs.getInt("userID"), rs.getInt("postID"));
			}

			return post;
			// st = conn.createStatement();
			// st.execute("INSERT INTO Users (username, email, password) VALUES (" +
			// username + ", '" + email + "'," + password + ")");
		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return null;
	}

	public static User getUser(int userID) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		User user;
		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM project.Users WHERE userID = " + userID);
			if (rs.next() == false) {
				System.out.println("No post");
				return null;
			} else {
				user = new User(rs.getString("name"), rs.getString("password"), rs.getString("hint"),
						rs.getString("profileImage"), rs.getString("bio"), rs.getInt("rating"));
			}

			return user;
		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return null;
	}

	public static String deletePost(int postID) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		String message = "";
		Connection conn = null;
		Statement st = null;
		User user;
		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			st.executeUpdate("DELETE FROM Recipes WHERE postID = " + postID);

			message = "success";
		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
			message = "there was an error";
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
				message = "there was an error";
			}
		}
		return message;
	}

	public static int getUserID(String username) {
		// adapted from
		// https://cdn-uploads.piazza.com/paste/kjw2zm0u16o4pa/3a352e6a8e3088dcdfbc30e01dbbeb88acd71b909c0a3c97c7b1b494eeff600b/assignment4_RecommendedStructure.pdf
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		Connection conn = null;
		Statement st = null;
		int userID = -1;
		try {
			Constants constants = new Constants();
			conn = DriverManager.getConnection(constants.sqlUrl);
			st = conn.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM project.Users WHERE name = " + username);
			if (rs.next() == false) {
				System.out.println("No post");
				return userID;
			} else {
				userID = rs.getInt("userID");
			}

			return userID;
		} catch (SQLException sqle) {
			System.out.println("SQLException in insertIntoPortfolio");
			sqle.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return userID;
	}

	public JsonArray allUsers() {
		JsonArray a = new JsonArray();
		Connection conn = null;
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			conn = DriverManager.getConnection("jdbc:mysql://localhost/project?user=root&password=root");
			ps = conn.prepareStatement("SELECT DISTINCT gc.userID FROM project.gc");
			rs = ps.executeQuery();
			while (rs.next()) {
				int uid = rs.getInt("userID");
				String json = "{ \"uid\": " + uid + "}";
				JsonObject j = new Gson().fromJson(json, JsonObject.class);
				a.add(j);
			}
		} catch (SQLException sqle) {
		}
		return a;
	}

	public JsonArray allmessages() {
		JsonArray a = new JsonArray();
		Connection conn = null;
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			conn = DriverManager.getConnection("jdbc:mysql://localhost/project?user=root&password=root");
			ps = conn.prepareStatement(
					"SELECT DISTINCT messages.time, messages.text, messages.userID, messages.name FROM projects.messages"
							+ "ORDER BY messages.id");
			rs = ps.executeQuery();
			while (rs.next()) {
				int time = rs.getInt("time");
				String text = rs.getString("text");
				String name = rs.getString("name");
				Message m = new Message(name, text, time);
				a.add(new Gson().toJson(m));
			}
		} catch (SQLException sqle) {
		}
		return a;
	}
}
