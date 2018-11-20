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
	var divRow = document.createElement('div');
	divRow.setAttribute("class","row mt-2");
	var cityCode="";
	var i;
	for(i = 0; i < cities.length; i++) {
		var card = document.createElement("card");
		card.setAttribute("style","border:1px solid rgba(0,0,0,.125)")
		card.setAttribute("class","card col-md-2");
		var cardHeader = document.createElement("div");
		cardHeader.setAttribute("class","card-header")
		cardHeader.innerHTML= cities[i].name;
		card.appendChild(cardHeader);
		var cardBody= document.createElement("div");
		cardBody.setAttribute("class","card-body")
		var p = document.createElement("p");
		text = "District :<br>"+cities[i].district+"</br>"+"Population :</br>"
		+cities[i].population;
		p.innerHTML= text; 
		cardBody.appendChild(p);
		card.appendChild(cardBody);
		var cardFooter = document.createElement("footer");
		var buttonModify = document.createElement("BUTTON");
		buttonModify.setAttribute('class','list-group-item');
		buttonModify.innerHTML="Modify";
		buttonModify.setAttribute("onclick", "formCity(" + cities[i].id + ")");
		cardFooter.appendChild(buttonModify);
		card.appendChild(cardFooter);
		cityCode=cities[i].code;	
		divRow.appendChild(card);
	}	
	var content = document.getElementById("main-content");
	content.innerHTML = '';
	content.appendChild(divRow);
	
	if (!(continent == null)) {
		var divButtonBack= document.createElement('div');
		divButtonBack.setAttribute("id","divBack");
		divButtonBack.setAttribute("class","mt-3");
		var buttonBack = document.createElement('BUTTON');
		buttonBack.setAttribute("onclick", "getCountries('" + continent + "')");
		buttonBack.innerHTML = 'Back';
		buttonBack.setAttribute("id", "backToCountries");
		buttonBack.setAttribute("class", "btn btn-secondary");
		buttonBack.setAttribute("id", "backToCountries");
		divButtonBack.appendChild(buttonBack);
		setVisibility(false, true, false);
		content.appendChild(divButtonBack);
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
	getCityById(idCity);
	document.getElementById("modificaCityButton").innerHTML="Save";
	document.getElementById("modificaCityButton").addEventListener("click", function(event) {
		event.preventDefault();
		saveCity();
	});
	setVisibility(false, false,false,true);
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
			setVisibility(false, true, false,true);
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
	if(document.getElementById("buttonContinenti").style.display === 'none'){
		setVisibility(true, false);
	}
	else{
		setVisibility(false, false);
	}
	clearCountriesOptionsSelect();
	getCountriesToForm("");
	document.getElementById("cityId").value = 0;
	document.getElementById("cityNameOfForm").value = "";
	document.getElementById("cityDistrictOfForm").value = "";
	document.getElementById("cityPopulationOfForm").value = "";
	document.getElementById("modificaCityButton").innerHTML = "create";
	document.getElementById("updateMessage").setAttribute("style", "display: none;");
	document.getElementById("modificaCityButton").setAttribute("onclick","saveCity()");
	
}

