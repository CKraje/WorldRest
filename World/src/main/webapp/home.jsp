<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
<script src="/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/countries-continent.js"></script>
<script type="text/javascript" src="/js/city.js"></script>
<script type="text/javascript" src="/js/layout-util.js"></script>
</head>
<body>

	<div class="container">
		<div class="row mt-2">
			<div class="col-md-4 offset-md-3 mt-1">
				<input type="text" id="cityName" placeholder="city's name"
					class="form-control">
			</div>
			<div class="col-md-2 col-6 mt-1">
				<button onclick="searchCities()" class="btn btn-secondary w-100"
					id="searchCityButton">Search City</button>
			</div>
			<div class="col-md-2 col-6 mt-1">
				<button class="btn btn-secondary w-100" onclick="formToCreate()">New
					City</button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<p></p>
			</div>
		</div>
		
		
		<div id="formToInsertUpdate" style="display: none;">
			<input type="hidden" id="cityId" value="0">
			<div class="row">
				<p></p>
			</div>
			<div class="row">
				<div class="col-md-3 offset-md-3">
					<input type="text" id="cityNameOfForm" class="form-control"
						placeholder="city's name">
				</div>
				<div class="col-md-3">
					<select id="countriesList" class="custom-select"></select>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p></p>
				</div>
				<div class="col-md-3 offset-md-3">
					<input type="text" id="cityDistrictOfForm"
						placeholder="city's district" class="form-control">
				</div>
				<div class="col-md-3">
					<input type="text" id="cityPopulationOfForm"
						placeholder="city's population" class="form-control">
				</div>
				<div class="col-md-1">
					<button id="modificaCityButton" class="btn btn-secondary">Save</button>
				</div>
				<div class="row">
					<div class="col-md-2 offset-md-5">
						<p id="updateMessage" style="display: none">City Saved !</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p></p>
				</div>
			</div>
		</div>


		<div align="center" id="main-content"></div>
		<div align="center" class="mt-1">
			<input type="button" style="display: none" class="btn btn-secondary"
				value="Back to Continents" onclick="getContinents()"
				id="buttonContinenti">
		</div>
	</div>
</body>
<script type="text/javascript">
	getContinents()
</script>
</html>