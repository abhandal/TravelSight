$(document).ready(function() {

	var flight_data_jfk = {};
	var flight_data_lax = {};

	$.getJSON("https://raw.githubusercontent.com/pirasathv/TravelSight/master/data/flight_data.json").then(function(response) {
	flight_data_lax = response;
	
    var airport = [];
    for(var i = 0; i<response.length;i++)
        {
            airport[i] = response[i].airport_name + " - " + response[i].airport;
        }
    $.unique(airport);
    $('#form-arrival').autocomplete({
        source:airport
    });
    $('#form-destination').autocomplete({
        source:airport
    });

	var totalAirport = 0;

	var test  = averageDelayAirport(flight_data_lax,'LAS');
    drawChart(test);
	console.log("TEST VALUE: " + test);

	function averageDelayAirport(airport,name){  
		var counter = 0;
		for (key in airport) {
			if(airport[key].airport === name){
				counter++;
				totalAirport += delay(airport[key]);
				console.log(totalAirport);
			}
		}
	return totalAirport/counter;
	}

	});

});

function delay(airportDelay){
	console.log(airportDelay);
	
	//bug with data set that will add null value so implment check to see if one value is null then return 0
	if(airportDelay.arr_cancelled === null){
		return 0;
	}

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

