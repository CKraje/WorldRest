function getCountries(continent) {
	var url = "/api/countries/"+continent+"/find-by-continent";
	$.get(url, function(countries){
		setVisibility(true,true);
		displayCountries(countries,continent);
	});
}

function getCountriesByCode(code){
	var url = "/api/countries/"+code+"/find-by-code";
	$.get(url,function(countries){
		console.log("ALL COUNTRIES WITH SAME CODE'S RESPONSE !");
		setVisibility(true,true, true);
		displayCountries(countries);
	});
}

function getCountriesToForm(code){
	var url = "/api/countries/";
	$.get(url,function(countries){
		if($("#countriesList option").length >0){
			$("#countriesList").empty();
		}
		var i;
		for(i=0;i<countries.length;i++){
			$("#countriesList").append('<option id="option'+i+'"></option>');
			$("#option"+i).val(countries[i].code);
			$("#option"+i).text(countries[i].name);
			if($("#option"+i).val() == code && typeof code != "undefined" ){
				$("#option"+i).attr("selected", true);
			}
		}
	});
}

function displayCountries(countries,continent) {
	$("#main-content").html("").append('<div id="continents-div" class="list-group"'+
	'style="padding-left:350px; padding-right:350px"></div>');
	$("#continents-div").append('<div id="divRow" class="row"></div>');
	$("#divRow").append('<div id="divIntoRow" class="col-md-4 offset-md-4"></div>');

	var bold = $('<b></b>').text("Continents");
	var title= $('<p></p>').attr("id","titolo").append(bold);
	var i;
	for(i = 0; i < countries.length; i++) {
		var button = $('<button></button>').attr({"class": "list-group-item list-group-item-action",
			"onclick": "getCities('"+countries[i].code+"','"+continent+"')"
		}).text(countries[i].name);	
		$("#continents-div").append(button);
	}
	$("#create-city-button").text("New");
	$("#modificaCityButton").text("Save");
	setVisibility(false,true,false,false);		
	$("#close-form").css('display','none');
	$("#create-city-button").css('display','block');
}

function getContinents() {
	var url = "/api/continents";
	$.get(url, function(continents){
		setVisibility(true,true);
		displayContinents(continents);
	});
}

function displayContinents(continents){

	$("#main-content").html("").append('<div id="continents-div" class="list-group"'+ 
	'style="padding-left:350px; padding-right:350px"></div>');
	$("#continents-div").append('<div id="divRow" class="row"></div>');
	$("#divRow").append('<div id="divIntoRow" class="col-md-4 offset-md-4"></div>');

	var bold = $('<b></b>').text("Continents");
	var title= $('<p></p>').attr("id","titolo").append(bold);

	$("#divIntoRow").append(title);
	var i;
	for(i = 0; i < continents.length; i++) {
		var button = $('<button></button>').attr({"class": "list-group-item list-group-item-action",
			"onclick": "getCountries('"+continents[i]+"')",
			"id": continents[i]
		}).text(continents[i]);	
		$("#continents-div").append(button);
	}
	$("#create-city-button").text("New");
	$("#modificaCityButton").text("Save");
	setVisibility(true,true,true,true);	
	$("#close-form").css('display','none');
	$("#create-city-button").css('display','block');
}

function clearCountriesOptionsSelect(){
	$("#countriesList").empty();
}
