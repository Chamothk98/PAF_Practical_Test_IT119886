package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modle.Appointment;

/**
 * Servlet implementation class AppointmentApi
 */
@WebServlet("/AppointmentApi")
public class AppointmentApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	Appointment Aobj = new Appointment();
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AppointmentApi() {
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
		
		
	String	output = Aobj.insertItem(request.getParameter("Number"), request.getParameter("Date"), request.getParameter("description"), request.getParameter("Time"), request.getParameter("Type"), request.getParameter("patientID"), request.getParameter("DID"), request.getParameter("HospitalID"));
	response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	
	Map paras = getParasMap(request);	
	String	 output = Aobj.updateItem(paras.get("hidItemIDSave").toString(),paras.get("Number").toString(), paras.get("Date").toString(), paras.get("description").toString().replace("+", " ").replace("%2C", ",").replace("%3A", ":"),paras.get("Time").toString(),paras.get("Type").toString().replace("+", " ").replace("%2C", ",").replace("%3A", ":"), paras.get("patientID").toString(), paras.get("DID").toString(),paras.get("HospitalID").toString());
	response.getWriter().write(output);
	
	}


	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	
		Map paras = getParasMap(request);
		String output = Aobj.deleteItem((String) paras.get("Appoid".toString()));
		response.getWriter().write(output);
		
		
	}
	
	private static Map getParasMap(HttpServletRequest request) { 
		
		Map<String, String> map = new HashMap<String, String>(); 
		
		try  {   
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");   
			String queryString = scanner.hasNext() ?          
			scanner.useDelimiter("\\A").next() : "";  
			scanner.close(); 
			
			String[] params = queryString.split("&"); 
			
			for (String param : params) {
				String[] p = param.split("=");    
				map.put(p[0], p[1]); 
			}
		}
		catch (Exception e) {
			
			
		}
		
		return map; 
	}
	

}
