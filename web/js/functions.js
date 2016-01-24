$(document).ready(function() {

	var flight_data_jfk = {};
	var flight_data_lax = {};

	$.getJSON("https://raw.githubusercontent.com/pirasathv/TravelSight/master/data/flight_data_jfk.json").then(function(response) {
		console.log(response);
		flight_data_jfk = response;
	});

	$.getJSON("https://raw.githubusercontent.com/pirasathv/TravelSight/master/data/flight_data_lax.json").then(function(response) {
		console.log(response);
		flight_data_lax = response;
	
	var totalAirport = 0 ;

	var test  = averageDelayAirport(flight_data_lax);
	console.log(test);

	function averageDelayAirport(airport){  
	var averageDelayForAirport ;
		for (key in airport) {
		totalAirport += delay(airport[key]);
		}
	return totalAirport/airport.length;
	}

	});

});

function delay(airportDelay){
	
	var divisor = airportDelay.arr_flights;
	var arr_del15 = (airportDelay.arr_del15/divisor)*100;
	var carrier_ct = (airportDelay.carrier_ct/divisor)*100;
	var weather_ct = (airportDelay.weather_ct/divisor)*100;
	var nas_ct = (airportDelay.nas_ct/divisor)*100;
	var security_ct = (airportDelay.security_ct/divisor)*100;
	var late_aircraft_ct = (airportDelay.late_aircraft_ct/divisor)*100;
	var arr_cancelled = (airportDelay.arr_cancelled/divisor)*100;
	var arr_diverted = (airportDelay.arr_diverted/divisor)*100;

	var total_delay = arr_del15 + carrier_ct + weather_ct + nas_ct + security_ct + late_aircraft_ct + arr_cancelled + arr_diverted;
	
	return total_delay;
}

