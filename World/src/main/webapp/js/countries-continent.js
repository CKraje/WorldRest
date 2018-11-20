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
	var div = document.createElement('div');
	div.setAttribute('class','list-group');
	div.setAttribute("style","padding-left:350px; padding-right:350px")
	var divRow = document.createElement('div');
	divRow.setAttribute("class", "row");
	var divIntoRow = document.createElement('div');
	divIntoRow.setAttribute("class", "col-md-4 offset-md-4");
	var title = document.createElement('p');
	var text = document.createTextNode("Countries");
	var bold = document.createElement('b');
	bold.appendChild(text);
	title.appendChild(bold);
	var divRowSpazio = document.createElement('div');
	divRowSpazio.setAttribute("class", "row");
	var spazio =  document.createElement('p');
	divRowSpazio.innerHTML=spazio;
	divIntoRow.appendChild(title);
	divRow.appendChild(divIntoRow);	
	div.appendChild(divRow);
	var i;
	for(i = 0; i < countries.length; i++) {
		var button = document.createElement("BUTTON");
		button.setAttribute('class','list-group-item list-group-item-action');
		button.innerHTML=countries[i].name;
		button.setAttribute('onclick', "getCities('"+countries[i].code+"','"+continent+"')");
		div.appendChild(button);
	}
	setVisibility(false,true,false,true);	
	var content = document.getElementById("main-content");
	content.innerHTML = '';
	content.appendChild(div);
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
	var div = document.createElement('div');
	div.setAttribute('class','list-group');
	div.setAttribute("style","padding-left:350px; padding-right:350px")
	var divRow = document.createElement('div');
	divRow.setAttribute("class", "row");
	var divIntoRow = document.createElement('div');
	divIntoRow.setAttribute("class", "col-md-4 offset-md-4");
	var title = document.createElement('p');
	var text = document.createTextNode("Continents");
	var bold = document.createElement('b');
	bold.appendChild(text);
	title.appendChild(bold);
	var divRowSpazio = document.createElement('div');
	divRowSpazio.setAttribute("class", "row");
	var spazio =  document.createElement('p');
	divRowSpazio.innerHTML=spazio;
	divIntoRow.appendChild(title);
	divRow.appendChild(divIntoRow);
	div.appendChild(divRow);
	var i;
	for(i = 0; i < continents.length; i++) {
		var button = document.createElement("BUTTON");
		button.setAttribute('class','list-group-item list-group-item-action');
		button.innerHTML=continents[i];
		button.setAttribute('onclick', "getCountries('"+continents[i]+"')");
		div.appendChild(button);		
	}
	setVisibility(true,true, true,true)
	var content = document.getElementById("main-content");
	content.innerHTML = '';
	content.appendChild(div);
}

function clearCountriesOptionsSelect(){
	var selectCountries= document.getElementById('countriesList');
	var i;
	for(i=0;i<selectCountries.length;i++){
		var option = selectCountries[i];
		selectCountries.remove(option);
	}
}
