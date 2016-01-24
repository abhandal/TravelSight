$(document).ready(function() {

	var flight_data_jfk = {};
	var flight_data_lasvegas = {};

	$.getJSON("https://raw.githubusercontent.com/pirasathv/TravelSight/master/data/flight_data_jfk.json").then(function(response) {
		console.log(response);
		flight_data_jfk = response;
	});

	$.getJSON("https://raw.githubusercontent.com/pirasathv/TravelSight/master/data/flight_data_lasvegas.json").then(function(response) {
		console.log(response);
		flight_data_lasvegas = response;
	});

});