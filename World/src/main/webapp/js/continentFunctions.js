function getCountries(continent) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/countries/"+continent+"/find-by-continent";
	xmlhttp.onreadystatechange = function() {
		console.log("ARRIVATA RISPOSTA!");
		if (this.readyState == 4 && this.status == 200) {
			var countries = JSON.parse(this.responseText);
			displayCountries(countries);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function displayCountries(countries) {
	var out = "";
	var i;
	var table = document.createElement('TABLE');
	table.setAttribute('class','table table-bordered');
	table.setAttribute("style", "width: 400px;");
	table.setAttribute("id","table-continets");
	th = document.createElement('th');
	var row = table.insertRow();
	row.appendChild(th);
	th.innerHTML = "Continenti";
	var tableBody = document.createElement('TBODY')
	for(i = 0; i < countries.length; i++) {
		row = table.insertRow();
		var td = row.insertCell();
		out = '<a href="' + countries[i].name + '">' + 
		countries[i].name + '</a>';
		td.innerHTML = out;
	}
	var content = document.getElementById("main-content");
	content.innerHTML = '';
	content.appendChild(table);
}

function getContinents() {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/continents";
	xmlhttp.onreadystatechange = function() {
		console.log("ARRIVATA RISPOSTA!");
		if (this.readyState == 4 && this.status == 200) {
			var continents = JSON.parse(this.responseText);
			displayContinents(continents);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function displayContinents(continents){
	var out = "";
	var i;
	var table = document.createElement('TABLE');
	table.setAttribute('class','table table-bordered');
	table.setAttribute("style", "width: 400px; margin-top: 100px;");
	th = document.createElement('th');
	var row = table.insertRow();
	row.appendChild(th);
	th.innerHTML = "Continenti";
	var tableBody = document.createElement('TBODY')
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
