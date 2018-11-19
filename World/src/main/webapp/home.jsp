<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
<script src="/bootstrap/js/bootstrap.min.js"></script>
<!--  <script src="/bootstrap/js/bootstrap.min.js"></script>-->
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/countries-continent.js"></script>
<script type="text/javascript" src="/js/city.js"></script>
<script type="text/javascript" src="/js/validator.js"></script>
</head>
<body>

	<div class="container">

		<div class="row">
			<div class="col-md-4 offset-md-4 mt-1">
				<input type="text" id="cityName"
					placeholder="Inserisci nome della città" class="form-control">
			</div>
			<div class="col-md-2 col-6 mt-1">
				<button onclick="searchCities()" class="btn btn-secondary w-100"
					id="searchCityButton">Cerca Citta</button>
			</div>
			<div class="col-md-2 col-6 mt-1">
				<button class="btn btn-secondary w-100" onclick="formToCreate()">Crea
					Citta</button>
			</div>


		</div>



		<form id="formToInsertUpdate" style="display: none;">
			<input type="hidden" id="cityId" value="0">
			<table>
				<tbody>
					<tr>
						<td><input type="text" id="cityNameOfForm"
							class="form-control" style="width: 250px;"
							placeholder="inserci nome City"></td>
						<td><select id="countriesList" class="custom-select"
							style="width: 250px;">
						</select></td>
					</tr>
					<tr>
						<td><input type="text" id="cityDistrictOfForm"
							style="width: 250px;" placeholder="distretto citta"
							class="form-control"></td>
						<td><input type="text" style="width: 250px;"
							id="cityPopulationOfForm" placeholder="popolazione citta"
							class="form-control"></td>
						<td><button id="modificaCityButton" class="btn btn-secondary">Salva</button></td>
						<td>
							<p id="updateMessage" style="display: none">Modifica Avvenuta
								con Successo !</p>
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
	</div>
</body>
<script type="text/javascript">
	getContinents()
</script>
</html>