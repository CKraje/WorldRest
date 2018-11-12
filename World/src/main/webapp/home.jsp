<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
<script src="/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/continentFunctions.js"></script>
</head>
<body>

	<button class="btn btn-outline-primary" onclick="getContinents()" id="continentButton">Continents</button>
	<button class="btn btn-outline-danger">PICCOLO!</button>
	<div  align="center" id ="countries-content">

	</div>
	<div align="center" id="continents-content"> </div>

</body>
</html>