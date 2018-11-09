<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet"
	href="/bootstrap/css/bootstrap.min.css">
<script
	src="/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">

<script>

	function getContinents() {
		var xmlhttp = new XMLHttpRequest();
		var url = "/api/countries/Europe/find-by-continent";
		xmlhttp.onreadystatechange = function() {
			console.log("ARRIVATA RISPOSTA!");
		    if (this.readyState == 4 && this.status == 200) {
		        var countries = JSON.parse(this.responseText);
		        displayContinents(countries);
		    }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		console.log("CHIAMATA INVIATA");
	}
	
	function displayContinents(countries) {
	    var out = "";
	    var i;
	    for(i = 0; i < countries.length; i++) {
	        out += '<a href="' + countries[i].name + '">' + 
	        countries[i].name + '</a><br>';
	    }
	    document.getElementById("main-content").innerHTML = out;
	}
</script>
</head>
<body>

	<button class="btn btn-outline-primary" onclick="getContinents()" >HOME!</button>
	<button class="btn btn-outline-danger">PICCOLO!</button>
	<div id="main-content"></div>

</body>
</html>