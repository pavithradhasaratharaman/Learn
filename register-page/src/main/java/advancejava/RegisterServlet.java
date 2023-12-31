package advancejava;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    
    //created a table in data base in name of regiusers//
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		//receive from parameter//
		
		String userId=request.getParameter("userId");
		String userName=request.getParameter("userName");
		String country=request.getParameter("country");
		String email=request.getParameter("email");
		String Password=request.getParameter("password");
		
		//database connections//
		
		try {
			//load driver//
			Class.forName("com.mysql.cj.jdbc.Driver");
			//connection of database//
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/register","root","root");
			
			//prepare the query//
			String query="insert into regiusers values('"+userId+"','"+userName+"','"+country+"','"+email+"','"+Password+"')";
			
			//run the query//
			
			Statement st=conn.createStatement();
			int status=st.executeUpdate(query);
			if(status!=0) {
				
				 out.print("<h1>register successfully</h1>");
			}
			else {
				//record not in db
				out.print("<h1> registion failed</h1>");
			}
			//closing connection//
			st.close();
			conn.close();
		} catch (ClassNotFoundException e) {
			
			out.print("<h1>something went wrong</h1>");
			e.printStackTrace();
		} catch (SQLException e) {
			out.print("<h1>something went wrong</h1>");
			e.printStackTrace();
		}
		
//		//out.print(userId+":"+userName+":"+email+":"+country+":"+Password);//
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
