function setVisibility(nascondiContinentsButton,nascondiFormUpdateCity, eliminaTastoBack,nascondiUpdateMessage){

	if(! nascondiContinentsButton){
		$("#back-to-continents").attr("style","display: block");
	}
	
	if(nascondiContinentsButton ){
		$("#back-to-continents").attr("style","display: none");
	}
	
	if( nascondiFormUpdateCity == false){
		$("#formToInsertUpdate").attr("style","display: block");
	}
	
	if( nascondiFormUpdateCity ){
		$("#formToInsertUpdate").attr("style","display: none");
	}
	
	if(eliminaTastoBack){
		$("#back-to-countries").attr("style","display: none");
	}
	
	if(nascondiUpdateMessage){
		$("#alert-message").attr("style","display: none");
	}
	
	if( nascondiUpdateMessage ==false){
		$("#alert-message").attr("style","display: block");
	}
}