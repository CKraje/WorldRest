function getCities(countryCode, continent) {
	var url = "/api/cities/" + countryCode + "/find-by-code";
	$.get(url, function (cities){
		displayCities(cities, continent);
	});
}

function getCityById(id) {
	var url = "/api/cities/" + id + "/find-by-id";
	$.get(url, function (city){
		console.log("ARRIVATA RISPOSTA!");
		$("#countriesList option[value='"+city.code+"']").attr("selected",true);
		fillCityForm(city);
	});
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
				');scrollToForm()"><i>Modify</i></button></br><button name="delete"'+
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
	$("#close-form").css('display','none');
	$("#create-city-button").css('display','block');
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
	var cityName = $("#cityName").val();
	var url = "/api/cities/search";
	$.post(url, {param: cityName},function(citiesByName){
		displayCities(citiesByName, null);
		console.log("ARRIVATA RISPOSTA!");
		setVisibility(false, true, false,true);
	});
}

function saveCity() {
	var city = {};
	city.id=$("#cityId").val()
	city.name =$("#cityNameOfForm").val();
	city.district =$("#cityDistrictOfForm").val();
	city.population =$("#cityPopulationOfForm").val();
	city.code = $("#countriesList option:selected").val();
	console.log("city uploaded : "+city);
	var url = "/api/cities/insert_modify";
	$.ajax({
		type: 'POST',
		url: url,
		data: JSON.stringify(city),
		contentType: 'application/json',
		dataType: 'json',
		success: function(cityUploaded){
			fillCityForm(cityUploaded);
			$("#"+cityUploaded.id).html("District :</br>"+cityUploaded.district+"</br> Population : </br>"+
					cityUploaded.population);
			$("#card-header"+cityUploaded.id).html("<b>"+cityUploaded.name+"</b>");
			$("#alert-message").attr("style","display: block");
			$("#modificaCityButton").css('display','none');
			$("#close-save-button").css('display','block');
		}
	});
}

function deleteCity(idCity){
	$.ajax({
		url: "/api/cities/delete/"+idCity,
		type:'delete',
		contentType : "application/x-www-form-urlencoded",
		success : function (status){
			$("#card-container"+idCity).remove();
			console.log(status);
		}
	});
}


function formToCreate() {
	if($("#back-to-continents").css("display")==='none'){
		$("#back-to-continents").attr("style","display:none");
	}
	else{
		setVisibility(false, true,false,true);
	}
	getCountriesToForm();
	$("#cityId").val(0);
	$("#cityNameOfForm").val("");
	$("#cityDistrictOfForm").val("");
	$("#cityPopulationOfForm").val("");
	$("#modificaCityButton").text("create");
}