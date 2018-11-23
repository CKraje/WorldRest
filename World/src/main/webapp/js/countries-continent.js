function getCountries(continent) {
	var url = "/api/countries/"+continent+"/find-by-continent";
	$.get(url, function(countries){
		setVisibility(true,true);
		displayCountries(countries,continent);
	});
}

function getCountriesByCode(code){
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/countries/"+code+"/find-by-code";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var countries = JSON.parse(this.responseText);
			setVisibility(true,true, true);
			displayCountries(countries);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");

}

function getCountriesToForm(code){
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/countries/";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var countries = JSON.parse(this.responseText);
			var selectCountries= document.getElementById('countriesList');
			var i;
			for(i=0;i<countries.length;i++){
				var option = document.createElement("option");
				option.value = countries[i].code;
				option.text = countries[i].name;
				selectCountries.add(option);
				if(selectCountries.options[i].value == code){
					selectCountries.options[i].selected=true;
				}
			}
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
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
	setVisibility(false,true,false,false);	
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
	setVisibility(true,true,true,true);
}

function clearCountriesOptionsSelect(){
//	var selectCountries= document.getElementById('countriesList');
	var i;
	for(i=0;i<$("#countriesList").length;i++){
		var option = selectCountries[i];
		selectCountries.remove(option);
	}
}
