

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

/**
 * Servlet implementation class Recipe
 */
@WebServlet("/Search")
public class Search extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Search() {
		// TODO Auto-generated constructor stub

		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String username = request.getParameter("username");
		ArrayList<Post> posts = new ArrayList<Post>();
		int userID = -1;
		try {
			userID = JDBCConnector.getUserID(username);
			if (userID == -1) {
				PrintWriter out = response.getWriter();
				Gson gson = new Gson();
				JsonObject obj = new Gson().fromJson("{\'error\': \"No Posts by user " + username + "\"}",
						JsonObject.class);
				out.print(gson.toJson(obj));
				out.flush();
			}
			posts = JDBCConnector.getAllPosts(userID);
			if (posts == null) {
				PrintWriter out = response.getWriter();
				Gson gson = new Gson();
				JsonObject obj = new Gson().fromJson("{\'error\': \"No Posts by user " + username + "\"}",
						JsonObject.class);
				out.print(gson.toJson(obj));
				out.flush();
			}
			PrintWriter out = response.getWriter();
			Gson gson = new Gson();
			String jsonString = gson.toJson(posts);
			out.print(jsonString);
			out.flush();
		} catch (Exception e) {
			response.setContentType("application/json");
			response.setStatus(404);
			PrintWriter out = response.getWriter();
			Gson gson = new Gson();
			JsonObject obj = new Gson().fromJson("{\'error\': \"There was an exception\"}", JsonObject.class);
			out.print(gson.toJson(obj));
			out.flush();
		}
	}
}
