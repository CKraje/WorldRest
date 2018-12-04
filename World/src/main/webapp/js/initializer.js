$(document).ready(function () {
	$("body").css("background", "#eee");
	var url = "/api/continents";
	$.get(url, function (continents) {
		displayContinents(continents);
	});
	$("#searchButton").click(function (event) {
		ie8SafePreventEvent(event);
		searchCities();
	});
	$("#create-city-button").on("click", function () {
		event.preventDefault();
		formToCreate();
		$("#create-city-button").css('display', 'none');
		$("#close-form").css('display', 'block');
		$("#modificaCityButton").css('display', 'block');
		$("#formToInsertUpdate").show();
	});
	$("#close-form").on("click", function () {
		event.preventDefault();
		if ($("#formToInsertUpdate").css('display') === 'block') {
			$("#formToInsertUpdate").hide();
			$("#close-form").css('display', 'none');
			$("#create-city-button").css('display', 'block');
		}
		else if ($("#formToInsertUpdate").css('display') === 'none' || $("#cityId").val() != 0) {
			$("#formToInsertUpdate").show();
			$("#close-form").css('display', 'block');
			$("#create-city-button").css('display', 'none');
		}
	})
});


function scrollToForm() {
	$('html, body').stop().animate({
		scrollTop: $("#formToInsertUpdate").offset().top
	}, 500);
}

function closeForm() {
	$("#formToInsertUpdate").css('display', 'none');
	$("#close-save-button").css('display', 'none');
	$("#close-form").css('display', 'none');
	$("#create-city-button").css('display', 'block');
	$("#modificaCityButton").css('display', 'block');
}

function ie8SafePreventEvent(e) {
	if (e.preventDefault) { 
		e.preventDefault() 
	} else { 
		e.stop() 
	};
	e.returnValue = false;
	e.stopPropagation();
}
