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
<script type="text/javascript" src="/js/countries-continent.js"></script>
<script type="text/javascript" src="/js/city.js"></script>
<script type="text/javascript" src="/js/validator.js"></script>
</head>
<body>

	<div >
		<input type="text" id="cityName" placeholder="name"
			class="form-control" style="float:left;width:250px;"> 
			<input type="button" onclick="searchCities()" class="btn btn-secondary"
			value="Cerca Citta" id="searchCityButton" style="float:left">
	</div>
	<div style="margin-left: 10px;">
		<input type="button" class="btn btn-secondary" value="New City"
			onclick="formToCreate()">
	</div>
	<form id="formToInsertUpdate" style="display: none;">
		<table>
			<tbody>
				<tr>
					<td><input type="text" id="cityNameOfForm"
						class="form-control" style="width: 250px;"
						placeholder="city's name"></td>
					<td><select id="countriesList" class="custom-select"
						style="width: 250px;">
					</select></td>
					<input type="hidden" id="cityId" value="0">
				</tr>
				<tr>
					<td><input type="text" id="cityDistrictOfForm"
						style="width: 250px;" placeholder="city's district"
						class="form-control"></td>
					<td><input type="text" style="width: 250px;"
						id="cityPopulationOfForm" placeholder="city's population"
						class="form-control"></td>
					<td><button id="modificaCityButton" class="btn btn-secondary"
							onclick="saveCity()"></button></td>
					<td>
						<p id="updateMessage" style="display: none">City Saved !</p>
					</td>
				</tr>
			</tbody>
		</table>
	</form>
	<div align="center" id="main-content"></div>
	<div align="center">
		<input type="button" style="display: none" class="btn btn-secondary"
			value="Torna ai continenti" onclick="getContinents()"
			id="buttonContinenti">
	</div>

</body>
<script type="text/javascript">
	getContinents()
</script>
</html>