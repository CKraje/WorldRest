function getCities(countryCode, continent) {
	var url = "/api/cities/" + countryCode + "/find-by-code";
	$.get(url, function (cities){
		displayCities(cities, continent);
	});
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
	$("#main-content").html("").append('<div class="row mt-2"'+
	' style="padding-left:120px ; padding-right:120px;" id="div"></div>');
	var cityCode="";
	var i;
	for(i = 0; i < cities.length; i++) {
		$("#div").append('<div id="card-container'+cities[i].id+'"  class="col-md-3 mb-3"></div>');
		$("#card-container"+cities[i].id).append('<div id="card'+i+'"class="card "></div>');
		$("#card"+i).append('<div id="card-header'+cities[i].id+'" class="card-header pt-0 pb-0 pl-0 pr-0"></div>');
		$("#card-header"+cities[i].id).html("<b>"+cities[i].name+"</b>");
		$("#card"+i).append('<div id="'+cities[i].id+'" class="card-body" style="width: 195px;"></div>');
		$("#"+cities[i].id).html("District :</br>"+cities[i].district+"</br> Population : </br>"+
				cities[i].population);
		$("#card"+i).append('<div id="card-footer'+i+'" class="card-footer"></div>');
		$("#card-footer"+i).html('<button name="modify-button" class="list-group-item "'+'onclick="formCity(' + cities[i].id +
				')"><i>Modify</i></button></br><button name="delete"'+
				' class="list-group-item" onclick="deleteCity('+cities[i].id+')"><i>Delete</i></button>');
		cityCode=cities[i].code;
	}
	if (!(continent == null)) {
		$("#back-to-countries").attr("style","display:block");
		$("#back-to-countries").click(function(){
			getCountries(continent);
		})
		setVisibility(false, true, false);
	}
	else{
		setVisibility(false, true, true);
	}
	getCountriesToForm(cityCode);
}

function fillCityForm(city) {
	$("#cityId").val(city.id);
	$("#cityNameOfForm").val(city.name);
	$("#cityDistrictOfForm").val(city.district);
	$("#cityPopulationOfForm").val(city.population);
}

function formCity(idCity) {
	getCityById(idCity);
	$("#modificaCityButton").text("Save");
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
	city.id=$("#cityId").val()
	city.name =$("#cityNameOfForm").val();
	city.district =$("#cityDistrictOfForm").val();
	city.population =$("#cityPopulationOfForm").val();
	var listCountryCode = document.getElementById("countriesList");
	city.code = listCountryCode.options[listCountryCode.selectedIndex].value;
	console.log(city);
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/cities/insert_modify";
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var cityUploaded = JSON.parse(this.responseText);
			fillCityForm(cityUploaded);
			$("#"+cityUploaded.id).html("District :</br>"+cityUploaded.district+"</br> Population : </br>"+
					cityUploaded.population);
			$("#card-header"+cityUploaded.id).html("<b>"+cityUploaded.name+"</b>");
			$("#alert-message").attr("style","display: block");
		}
	};
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	var data = JSON.stringify(city);
	xmlhttp.send(data);
}

function deleteCity(idCity){
	$.ajax({
		url: "/api/cities/delete/"+idCity,
		type:'delete',
		contentType : "application/x-www-form-urlencoded",
		success : function (status){
			$("#card-container"+idCity).remove();
			console.log(status);
		},
		error: function (xhr, status, error) {  
			console.log('Error in Operation '+ error +"/n"+"Status "+status);  
		}  
	});
}


function formToCreate() {
	if($("#back-to-continents").css("display")==='none'){
		$("#back-to-continents").attr("style","display:none");
	}
	else{
		setVisibility(false, false,false,true);
	}
	clearCountriesOptionsSelect();
	getCountriesToForm("");
	$("#cityId").val(0);
	$("#cityNameOfForm").val("");
	$("#cityDistrictOfForm").val("");
	$("#cityPopulationOfForm").val("");
	$("#modificaCityButton").text("create");
	$("#formToInsertUpdate").attr("style","display:block");
	$("#modificaCityButton").attr("onclick","saveCity()");
}

