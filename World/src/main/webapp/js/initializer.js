$(document).ready(function() {
	var url = "/api/continents";
	$.get(url, function(continents) {
		displayContinents(continents);
	});
	$("#searchButton").click(function() {
		event.preventDefault();
		searchCities();
	});
	$("#create-city-button").click(function() {
		event.preventDefault();
		formToCreate();
		$("#create-city-button").text("close");
		$(this).click( function() {
				if ($("#formToInsertUpdate").css('display')==='block') {
					
						$("#formToInsertUpdate").hide();
						$("#create-city-button").text("New");
				} 
				else {
					$("#formToInsertUpdate").show();
					$("#create-city-button").text("close");
				}		
		});
	});
});