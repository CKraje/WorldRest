<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
<script type="text/javascript" src="/jquery/jquery-3.3.1.min.js"></script>
<script src="/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/countries-continent.js"></script>
<script type="text/javascript" src="/js/city.js"></script>
<script type="text/javascript" src="/js/layout-util.js"></script>
<script type="text/javascript" src="/js/initializer.js"></script>
</head>
<body>

	<div class="container">
		<div class="row mt-2">
			<div class="col-md-4 offset-md-3 mt-1">
				<nav class="navbar navbar-expand-lg navbar-light "
					style="width: 600px;">
					<div class="collapse navbar-collapse">
						<button class=" btn btn-secondary mr-1" onclick="getContinents()"
							style="display: none; border-bottom-width: 0px;"
							id="back-to-continents">Home</button>
						<button class=" btn btn-secondary mr-1" onclick="getContinents()"
							style="display: none; border-bottom-width: 0px;"
							id="back-to-countries">Back</button>
						<form class="form-inline my-2 my-lg-0">
							<div class="form-group">
								<input id="cityName" class="form-control mr-sm-2" type="search"
									placeholder="Search" aria-label="Search">
							</div>
							<div class="form-group ">
								<button class="btn btn-outline-success my-2 my-sm-0 "
									id="searchButton">Search</button>
							</div>
							<div class="form-group m-1">
								<button id="create-city-button" class="btn btn-secondary">New</button>
							</div>

							<div class="form-group m-1">
								<button id="close-form" class="btn btn-secondary"
									style="display: none">Close</button>
							</div>
						</form>
					</div>
				</nav>
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
					<button id="modificaCityButton" class="btn btn-secondary"
						onclick="saveCity()">Save</button>
				</div>

				<div class="col-md-1">
					<button id="close-save-button" class="btn btn-secondary"
						onclick="closeForm()" style="display: none">Close</button>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p></p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3 offset-md-4" style="margin-left: 425px;">
					<div id="alert-message" class="alert alert-primary text-center"
						role="alert">
						<b>City Saved !</b>
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
	</div>
</body>
</html>