$(document).ready(function() {
	$("body").css("background","#eee");
	var url = "/api/continents";
	$.get(url, function(continents) {
		displayContinents(continents);
	});
	$("#searchButton").click(function() {
		event.preventDefault();
		searchCities();
	});
	$("#create-city-button").on("click",function() {
		event.preventDefault();
		formToCreate();
		$("#create-city-button").css('display','none');
		$("#close-form").css('display','block');
		$("#formToInsertUpdate").show();
		$("#create-city-button").on( "click",formManagementByNewCityButton);
	});
	$("#close-form").on("click",function(){
		event.preventDefault();
		if ($("#formToInsertUpdate").css('display')==='block') {
			$("#formToInsertUpdate").hide();
			$("#close-form").css('display','none');
			$("#create-city-button").css('display','block');
		}
		else if ($("#formToInsertUpdate").css('display')==='none' || $("#cityId").val()!= 0){
			$("#formToInsertUpdate").show();
			$("#close-form").css('display','block');
			$("#create-city-button").css('display','none');
		}
	})
});


function scrollToForm(){
	$('html, body').stop().animate({
		scrollTop: $("#formToInsertUpdate").offset().top
	}, 500);
}

function closeForm(){
	$("#formToInsertUpdate").css('display','none');
	$("#close-save-button").css('display','none');
	$("#close-form").css('display','none');
	$("#create-city-button").css('display','block');
}