
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
 * Servlet implementation class GetExplorePagePosts
 */
@WebServlet("/GetExplorePagePosts")
public class GetExplorePagePosts extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GetExplorePagePosts() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ArrayList<Post> posts = new ArrayList<Post>();
		try {
			posts = JDBCConnector.getAllPosts();
			if (posts == null) {
				response.setContentType("application/json");
				response.setStatus(400);
				PrintWriter out = response.getWriter();

				Gson gson = new Gson();
				JsonObject obj = new Gson().fromJson("{\'error\': \"There was an exception\"}", JsonObject.class);
				out.print(gson.toJson(obj));
				out.flush();
			}
			response.setContentType("application/json");
			response.setStatus(200);
			PrintWriter out = response.getWriter();

			Gson gson = new Gson();
			String jsonString = gson.toJson(posts);
			out.print(jsonString);
			out.flush();
		} catch (Exception e) {
			response.setContentType("application/json");
			response.setStatus(400);
			PrintWriter out = response.getWriter();

			Gson gson = new Gson();
			JsonObject obj = new Gson().fromJson("{\'error\': \"There was an exception\"}", JsonObject.class);
			out.print(gson.toJson(obj));
			out.flush();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
