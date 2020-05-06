$(document).on("click", ".btnUpdate", function(event) { 
	
	$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIdUpdate').val());
	$("#Number").val($(this).closest("tr").find('td:eq(1)').text());
	$("#Date").val($(this).closest("tr").find('td:eq(2)').text());
	$("#description").val($(this).closest("tr").find('td:eq(3)').text());
	$("#Time").val($(this).closest("tr").find('td:eq(4)').text());
	$("#Type").val($(this).closest("tr").find('td:eq(5)').text());
	$("#patientID").val($(this).closest("tr").find('td:eq(6)').text());
	$("#DID").val($(this).closest("tr").find('td:eq(7)').text());
	$("#HospitalID").val($(this).closest("tr").find('td:eq(8)').text());
	
	$("#alertSuccess").text().trim() == "Data Retrived"

});



$(document).ready(function () {
	 document.forms['form'].reset();
	 
});

$(document).ready(function() { 
	
	if($("#alertSuccess").text().trim() == ""){
		$("#alertSuccess").hide();
	}
	
	$("#alertError").hide(); 
	
});

$(document).on("click", "#btnSave", function(event) { 
	
	$("#alertSuccess").text("");  
	$("#alertSuccess").hide();  
	$("#alertError").text(""); 
	$("#alertError").hide(); 
	
	var status = validateItemForm(); 
	
	if (status != true)  {  
		$("#alertError").text(status);  
		$("#alertError").show();  
		return; 	
		} 
	
	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
	
	$.ajax( { 
		url : "AppointmentApi", 
		type : type,  
		data : $("#form").serialize(),  
		dataType : "text",  
		complete : function(response, status) 
		{   
			onItemSaveComplete(response.responseText, status);  
		
		} 
	}); 
	
});

function onItemSaveComplete(response, status) {  
	
	var resultSet = JSON.parse(response); 
	 
	if (resultSet.status.trim() == "success") {  
		
		$("#alertSuccess").text("Successfully saved.");  $("#alertSuccess").show(); 
		 
		 $("#divItemsGrid").html(resultSet.data); 
	
	} else if (resultSet.status.trim() == "error") 
	
	{  
		$("#alertError").text(resultSet.data); 
		$("#alertError").show(); 
		
	}
	else if (status == "error") {
		
		$("#alertError").text("Error while saving.");  
		$("#alertError").show(); 
	}
	 else 
	 {  
		 $("#alertError").text("Unknown error while saving.."); 
		 $("#alertError").show(); 
	 }
	
	$("#hidItemIDSave").val(""); 
	$("#form")[0].reset(); 
}


$(document).on("click", ".btnRemove", function(event) { 
	
	
	$.ajax( { 
		url : "AppointmentApi",   
		type : "DELETE",   
		data : "Appoid=" + $(this).data("appid"),   
		dataType : "text",   
		complete : function(response, status) 
		{   
			onItemDeleteComplete(response.responseText, status);  
		
		} 
	}); 
	
});

function onItemDeleteComplete(response, status) {  
	
	var resultSet = JSON.parse(response); 
	 
	if (resultSet.status.trim() == "success") {  
		
		$("#alertSuccess").text("Successfully deleted."); 
		$("#alertSuccess").show(); 
		 
		 $("#divItemsGrid").html(resultSet.data); 
	
	} else if (resultSet.status.trim() == "error") 
	
	{  
		$("#alertError").text(resultSet.data); 
		$("#alertError").show(); 
		
	}
	else if (status == "error") {
		
		$("#alertError").text("Error while deletingdeleting.");  
		$("#alertError").show(); 
	}
	 else 
	 {  
		 $("#alertError").text("Unknown error while deleting.."); 
		 $("#alertError").show(); 
	 }
	
}



	
	

function validateItemForm() {  
	
	if ($("#Number").val().trim() == "") {  
		
		return "Please Enter Patient Name";
	} 
	
	if ($("#Date").val().trim() == "") {  
		 
		return "Please Enter Nic Id";
	} 
	
	if ($("#description").val().trim() == "") {  

	return "Please Enter Mobile Number";
	} 
	
	if ($("#Time").val().trim() == "...") {  

		return "Please Select Hospital";
	} 
	
	if ($("#Type").val().trim() == "...") {  

		return "Please Select Doctor ";
	}
	
	if ($("#patientID").val().trim() == "") {  

		return "Please Select Preferd Date ";
	}
	
	if ($("#DID").val().trim() == "") {  

		return "Please Enter Preferd Time";
	}

	if ($("#DID").val().trim() == "") {  

		return "Please Enter Preferd Time";
	}
	
	return true; 
	 
	}
