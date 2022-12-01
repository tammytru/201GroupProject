

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;


/**
 * Servlet implementation class RegisterUser
 */
@WebServlet("/RegisterUser")
public class RegisterUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int userID = Integer.parseInt(request.getParameter("userID"));
		
		try {
			User user = JDBCConnector.getUser(userID);
			if(user == null) {
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
			String jsonString = gson.toJson(user);
			out.print(jsonString);
			out.flush();
		}catch (Exception e) {
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
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("userName");
		String password = request.getParameter("password");
		String hint = request.getParameter("hint");
		String profileImage = request.getParameter("profileImage");
		String bio = request.getParameter("bio");
		int rating = Integer.parseInt(request.getParameter("rating"));

		try {
			int userID = JDBCConnector.signUp(username, password, hint, profileImage, bio, rating);
			response.setContentType("application/json");
			response.setStatus(200);
			PrintWriter out = response.getWriter();
			
			Gson gson = new Gson();
			JsonObject obj = new Gson().fromJson("{\'userID\': " + userID + "}", JsonObject.class);
			out.print(gson.toJson(obj));
			out.flush();
			
		}catch (Exception e) {
			response.setContentType("application/json");
			response.setStatus(400);
			PrintWriter out = response.getWriter();
			
			Gson gson = new Gson();
			JsonObject obj = new Gson().fromJson("{\'userID\': " + -1 + "}", JsonObject.class);
			out.print(gson.toJson(obj));
			out.flush();
		}

	}

}
