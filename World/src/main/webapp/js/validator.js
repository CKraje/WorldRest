function setVisibility(nascondiContinentsButton,nascondiFormUpdateCity, eliminaTastoBack){
	var buttonContinent=document.getElementById("buttonContinenti");
	var formCity = document.getElementById('formToInsertUpdate');

	if(! nascondiContinentsButton){
		buttonContinent.setAttribute("style","display: block;");
	}
	if(nascondiContinentsButton){
		buttonContinent.setAttribute("style","display: none;");
	}
	if(! nascondiFormUpdateCity){
		formCity.setAttribute("style","display: block;");
	}
	if( nascondiFormUpdateCity){
		formCity.setAttribute("style","display: none;");
	}
	if(eliminaTastoBack && document.getElementById("backToCountries") != null){
		document.getElementById("backToCountries").remove();
	}
}