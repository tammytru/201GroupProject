

import java.io.BufferedReader;
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
 * Servlet implementation class VerifyLogin
 */
@WebServlet("/VerifyLogin")
public class VerifyLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public VerifyLogin() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//given user and password, return userID else return -1 or error

		String username = request.getParameter("userName");
		String password = request.getParameter("password");
		
		try {
			System.out.println(username + " " + password);
			int userID = JDBCConnector.verifyUser(username, password);
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
			
			String jsonString = "{\'userID\': " + -1 + "}";
			out.print(jsonString);
			out.flush();
		}

	}
	
	protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setAccessControlHeaders(response);
		response.setStatus(HttpServletResponse.SC_OK);
	}
	
	private void setAccessControlHeaders(HttpServletResponse resp) {
	      resp.setHeader("Access-Control-Allow-Origin", "");
	      resp.setHeader("Access-Control-Allow-Methods", "POST");
	  }


}
