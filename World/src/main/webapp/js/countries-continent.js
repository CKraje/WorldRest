function getCountries(continent) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/countries/"+continent+"/find-by-continent";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var countries = JSON.parse(this.responseText);
			displayCountries(countries,continent);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
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
	var table = document.createElement('TABLE');
	table.setAttribute('class','table table-bordered');
	table.setAttribute("style", "width: 400px; margin-top: 100px;");
	th = document.createElement('th');
	var row = table.insertRow();
	row.appendChild(th);
	th.innerHTML = "Countries";
	var i;
	for(i = 0; i < countries.length; i++) {
		row = table.insertRow();
		var td = row.insertCell();
		var buttonContinent = document.createElement("BUTTON");
		buttonContinent.setAttribute('class','btn btn-link');
		buttonContinent.setAttribute('id',"countries"+i);
		buttonContinent.setAttribute('onclick', "getCities('"+countries[i].code+"','"+continent+"')");
		buttonContinent.innerHTML=countries[i].name;
		td.appendChild(buttonContinent);
	}
	setVisibility(false,true,false);	
	var content = document.getElementById("main-content");
	content.innerHTML = '';
	content.appendChild(table);
}

function getContinents() {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/continents";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var continents = JSON.parse(this.responseText);
			setVisibility(true,true);
			displayContinents(continents);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function displayContinents(continents){
	var out = "";
	var table = document.createElement('TABLE');
	table.setAttribute('class','table table-bordered');
	table.setAttribute("style", "width: 400px; margin-top: 100px;");
	th = document.createElement('th');
	var row = table.insertRow();
	row.appendChild(th);
	th.innerHTML = "Continenti";
	var i;
	for(i = 0; i < continents.length; i++) {
		row = table.insertRow();
		var td = row.insertCell();
		var buttonContinent = document.createElement("BUTTON");
		buttonContinent.setAttribute('name','continent');
		buttonContinent.setAttribute('class','btn btn-link');
		buttonContinent.setAttribute('id',"continent"+i);
		buttonContinent.setAttribute('onclick', "getCountries('"+continents[i]+"')");
		buttonContinent.innerHTML=continents[i];
		td.appendChild(buttonContinent);
	}
	var content = document.getElementById("main-content");
	content.innerHTML = '';
	content.appendChild(table);
}