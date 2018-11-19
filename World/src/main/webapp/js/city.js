function getCities(countryCode, continent) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/cities/" + countryCode + "/find-by-code";
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var cities = JSON.parse(this.responseText);
			console.log("ARRIVATA RISPOSTA!");
			displayCities(cities, continent);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function getCityById(id) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/cities/" + id + "/find-by-id";
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var city = JSON.parse(this.responseText);
			console.log("ARRIVATA RISPOSTA!");
			fillCityForm(city);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function displayCities(cities, continent) {
	var table = document.createElement('TABLE');
	table.setAttribute('class', 'table table-bordered');
	table.setAttribute("style", "width: 400px; margin-top: 25px;");
	var rowThead = table.insertRow();
	var thCityName = document.createElement('th');
	thCityName.innerHTML = "Name";
	var thCityDistrict = document.createElement('th');
	thCityDistrict.innerHTML = "District";
	var thCityPopulation = document.createElement('th');
	thCityPopulation.innerHTML = "Population";
	var thModificaCity = document.createElement('th');
	thModificaCity.innerHTML = "Modifica";
	rowThead.appendChild(thCityName);
	rowThead.appendChild(thCityDistrict);
	rowThead.appendChild(thCityPopulation);
	rowThead.appendChild(thModificaCity);
	buttonModificaCity
	var cityCode = "";
	var i;
	for (i = 0; i < cities.length; i++) {
		row = table.insertRow();
		var buttonCityName = document.createElement("BUTTON");
		var buttonCityDistrict = document.createElement("BUTTON");
		var buttonCityPopulation = document.createElement("BUTTON");
		var buttonModificaCity = document.createElement("BUTTON");
		buttonModificaCity.setAttribute('class', 'btn btn-link')
		buttonCityName.setAttribute('class', 'btn btn-link');
		buttonCityDistrict.setAttribute('class', 'btn btn-link');
		buttonCityPopulation.setAttribute('class', 'btn btn-link');
		buttonCityName.innerHTML = cities[i].name;
		var tdCityName = row.insertCell();
		tdCityName.appendChild(buttonCityName);
		var tdCityDistrict = row.insertCell();
		buttonCityDistrict.innerHTML = cities[i].district;
		tdCityDistrict.appendChild(buttonCityDistrict);
		var tdCityPopulation = row.insertCell();
		buttonCityPopulation.innerHTML = cities[i].population;
		tdCityPopulation.appendChild(buttonCityPopulation);
		var tdModificaCity = row.insertCell();
		buttonModificaCity.innerHTML = "Modifica";
		buttonModificaCity.setAttribute("onclick", "formCity(" + cities[i].id + ")");
		tdModificaCity.appendChild(buttonModificaCity);
		cityCode = cities[i].code;
	}
	var content = document.getElementById("main-content");
	content.innerHTML = '';
	content.appendChild(table);
	if (!(continent == null)) {
		var buttonBack = document.createElement('BUTTON');
		buttonBack.setAttribute("onclick", "getCountries('" + continent + "')");
		buttonBack.innerHTML = 'Back';
		buttonBack.setAttribute("id", "backToCountries");
		buttonBack.setAttribute("class", "btn btn-secondary");
		buttonBack.setAttribute("id", "backToCountries");
		setVisibility(true, true, false);
		content.appendChild(buttonBack);
	}
	else {
		setVisibility(false, true, true);
	}
	getCountriesToForm(cityCode);
}

function fillCityForm(city) {
	document.getElementById("cityId").value = city.id;
	document.getElementById("cityNameOfForm").value = city.name;
	document.getElementById("cityDistrictOfForm").value = city.district;
	document.getElementById("cityPopulationOfForm").value = city.population;
}

function formCity(idCity) {
	setVisibility(true, false, false);
	getCityById(idCity, true, false);
	document.getElementById("modificaCityButton").addEventListener("click", function(event) {
		event.preventDefault();
		saveCity();
	});
}


function searchCities() {
	var citynameTextBox = document.getElementById("cityName");
	var cityName = citynameTextBox.value;
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/cities/search";
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var citiesByName = JSON.parse(this.responseText);
			displayCities(citiesByName, null);
			console.log("ARRIVATA RISPOSTA!");
			setVisibility(false, true, false);
		}
	};
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send("param=" + cityName);
	console.log("CHIAMATA INVIATA");
}

function saveCity() {
	var city = {};
	city.id = document.getElementById("cityId").value;
	city.name = document.getElementById("cityNameOfForm").value;
	city.district = document.getElementById("cityDistrictOfForm").value;
	city.population = document.getElementById("cityPopulationOfForm").value;
	var listCountryCode = document.getElementById("countriesList");
	city.code = listCountryCode.options[listCountryCode.selectedIndex].value;
	console.log(city);
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/cities/insert_modify";
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var cityUploaded = JSON.parse(this.responseText);
			if (city.id != 0) {
				document.getElementById("updateMessage").innerHTML = "Modifica Avvenuta con Successo !"
			}
			document.getElementById("updateMessage").setAttribute("style", "display: block;");
			fillCityForm(cityUploaded);
		}
	};
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	var data = JSON.stringify(city);
	xmlhttp.send(data);
}

function formToCreate() {
	setVisibility(true, false, false);
	clearCountriesOptionsSelect();
	getCountriesToForm("");
	document.getElementById("cityId").value = 0;
	document.getElementById("cityNameOfForm").value = "";
	document.getElementById("cityDistrictOfForm").value = "";
	document.getElementById("cityPopulationOfForm").value = "";
	document.getElementById("modificaCityButton").innerHTML = "crea";
	document.getElementById("updateMessage").innerHTML = "Creazione avvenuta!"
	document.getElementById("updateMessage").setAttribute("style", "display: none;");
}

