<%@page import="modle.Appointment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>   
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.5.0.min.js"></script> 
<script src="Components/main.js"></script> 

<meta charset="ISO-8859-1">
<title>Appointment</title>
</head>
<body>
<div class="container w-50 p-3" style="margin-top:50px;">
<div class="page-header">
  <h1 id="p" >Book Your Appointment </h1>
</div>
<br><br>


 <form id="form"  action="Appointment.jsp?" >
 
  <div class="form-group">
    <label for="email">Patient Number :</label>
    <input type="text" class="form-control" id="Number" name="Number">
  </div>
  
  <div class="form-group">
    <label for="pwd">Date :</label>
    <input type="text" class="form-control" name="Date" id="Date">
  </div>
  
  <div class="form-group">
    <label for="pwd">Description :</label>
    <input type="text" class="form-control" name="description"  id="description">
  </div>
  
  <div class="form-group">
  <label for="sel1">Time :</label>
 <input type="text" class="form-control" name="Time"  id="Time">
</div> 
  
  
  <div class="form-group">
    <label for="pwd">Type:</label>
    <input type="text" class="form-control" name="Type"  id="Type">
  </div>
  
  <div class="form-group">
    <label for="pwd">Patient ID:</label>
    <input type="text" class="form-control" name="patientID"  id="patientID">
  </div>
  
  
  <div class="form-group">
    <label for="pwd">Doctor ID:</label>
    <input type="text" class="form-control" name="DID"  id="DID">
  </div>
  

<div class="form-group">
    <label for="uh">Hospital ID:</label>
    <input type="text" class="form-control" name="HospitalID"  id="HospitalID">
  </div>

  
  <button type="button" id="btnSave" class="btn btn-primary">Book Now</button>
  <input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value=""> 
</form> 
<br>
<div id="alertSuccess" class=" alert-success">
<%
out.print(session.getAttribute("statusMsg"));
%>
</div>   
<div id="alertError" class="alert alert-danger"></div>

<div id="divItemsGrid" style="margin-top:10px;">
		<% 
		
		Appointment Aobj2 = new  Appointment();
		out.print(Aobj2.readItems());
		
		%> 
</div> 

</div>
		
</body>
</html>