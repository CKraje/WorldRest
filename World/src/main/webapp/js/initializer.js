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
			$(this).on('click', function() {
				if ($("#formToInsertUpdate").is(':visible')) {
					$("#formToInsertUpdate").hide();
				} else {
					$("#formToInsertUpdate").show();
				}
			});
		});
	});