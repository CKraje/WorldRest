function setVisibility(nascondiContinentsButton,nascondiFormUpdateCity, eliminaTastoBack,nascondiUpdateMessage){
	var buttonContinent=document.getElementById("buttonContinenti");
	var updateMessage = document.getElementById("updateMessage");
	var formCity = document.getElementById('formToInsertUpdate');

	if(! nascondiContinentsButton){
		buttonContinent.setAttribute("style","display: block;");
	}
	if(nascondiContinentsButton ){
		buttonContinent.setAttribute("style","display: none;");
	}
	if(! nascondiFormUpdateCity){
		formCity.setAttribute("style","display: block;");
	}
	if( nascondiFormUpdateCity){
		formCity.setAttribute("style","display: none;");
	}
	if(eliminaTastoBack && document.getElementById("backToCountries") != null){
		document.getElementById("divBack").remove();
	}
	if(nascondiUpdateMessage){
		updateMessage.setAttribute("style","display: none;");
	}
	if(! nascondiUpdateMessage){
		updateMessage.setAttribute("style","display: block;");
	}
}