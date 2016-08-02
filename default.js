
// User Story: I can see the weather in my current location.

//Example API call: http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80&lat=51.5276880&lon=-2.5410160

var lat = '';
var lon = '';
var weatherAPIKey = '&APPID=a66f4e53741f129977e971853722ab80';
var weatherQueryString = ''
var weatherData = '';
// Get latitude and longitude... and now weather string... and now weather query!
if (navigator.geolocation) { 	// TODO: or if can't find, give an error message? give an option to search
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    var weatherQueryString = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?" + weatherAPIKey + "&lat=" + lat + "&lon=" + lon + "&units=metric"; // the full API string with lat and lon
    console.log(weatherQueryString);

    $.getJSON(weatherQueryString, function(json) {
      //var weatherData = JSON.stringify(json);
			weatherData = json;
      console.log(weatherData);
      console.log("Weather Data Grabbed");
    });
  });
};


// Output raw weather data to test
$(document).ready(function() {
  $("#get-weather").on("click", function() {		// FIXME: can I make this work on page load instead of with a button?
    //getWeatherData();  // want to be able to call the getWeatherData function... haven't got it named since smashing it into the lat and lon funtion! - need to name this function on line 18? not sure how?
	 $("#location").text(weatherData.name);
    $("#weather-desc").text(weatherData.weather[0].description);
	 $("#temp").text(weatherData.main.temp + " degrees C");
	  $("#wind-speed").text(weatherData.wind.speed + " mph");
    // alert("hey");
  });
});





//$("#demo").txt(data);


 // Free account has limitation of capacity and data availability. If you do not get respond from server do not try to repeat your request immediately, but only after 10 min. Also we recommend to store your previous request data.

// store the results
// parse the results to variables
// display the variables on the page







//var temp = '';
//var windspeed = '';

// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

// User Story: I can push a button to toggle between Fahrenheit and Celsius.

// We recommend using the Open Weather API. This will require creating a free API key. Normally you want to avoid exposing API keys on CodePen, but we haven't been able to find a keyless API for weather.










// getLatLon();		// assign to a var here?

// User Story: I can see the weather in my current location.

// call the weather API
//


// The getJSON in getLatLon is async, so had to use a callback to wait for the data before console.logging the info. Might need this later if other functions don't return what's expected.


//$("#demo").txt(data);

// Free account has limitation of capacity and data availability. If you do not get respond from server do not try to repeat your request immediately, but only after 10 min. Also we recommend to store your previous request data.

// store the results
// parse the results to variables
// display the variables on the page

//Example API call:
// http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80&lat=51.5276880&lon=-2.5410160

//var temp = '';
//var windspeed = '';

// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

// User Story: I can push a button to toggle between Fahrenheit and Celsius.

// We recommend using the Open Weather API. This will require creating a free API key. Normally you want to avoid exposing API keys on CodePen, but we haven't been able to find a keyless API for weather.

// $(document).ready(function() {
// 	$("#get-weather").on("click", function() {
// 		//  getLatLon(function(data) {
// 		$("#location").text(lat);
// 		//   });
// 	});
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function getLatLong(callback) { // function definition
  $.getJSON('http://ipinfo.io', function(data) {
    var location = data.loc;
    lat = location.split(",")[0];
    lon = location.split(",")[1];
    callback(lat, lon);   // this is some advanced next-level shit I don't understand
  });



// getLatLon();		// assign to a var here?

// User Story: I can see the weather in my current location.

// call the weather API
//


// The getJSON in getLatLon is async, so had to use a callback to wait for the data before console.logging the info. Might need this later if other functions don't return what's expected.


//$("#demo").txt(data);

// Free account has limitation of capacity and data availability. If you do not get respond from server do not try to repeat your request immediately, but only after 10 min. Also we recommend to store your previous request data.

// store the results
// parse the results to variables
// display the variables on the page

//Example API call:
// http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80&lat=51.5276880&lon=-2.5410160

//var temp = '';
//var windspeed = '';

// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

// User Story: I can push a button to toggle between Fahrenheit and Celsius.

// We recommend using the Open Weather API. This will require creating a free API key. Normally you want to avoid exposing API keys on CodePen, but we haven't been able to find a keyless API for weather.

// $(document).ready(function() {
// 	$("#get-weather").on("click", function() {
// 		//  getLatLon(function(data) {
// 		$("#location").text(lat);
// 		//   });
// 	});
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function getLatLong(callback) { // function definition
  $.getJSON('http://ipinfo.io', function(data) {
    var location = data.loc;
    lat = location.split(",")[0];
    lon = location.split(",")[1];
    callback(lat, lon);   // this is some advanced next-level shit I don't understand
  });
}

$(document).ready(function() {
  $("#get-weather").on("click", function() {  // target the get-weather id and on clicking it, call the next function...
    getLatLong(function(lat, lon) {
      console.log(lat);
      $("#location").text(lat);
    });
  });
});
*/

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     lat = position.coords.latitude; // 51.5191334
//     lon = position.coords.longitude; // -2.5400082999999998
//    apiKey = "http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80";
//     weatherQuery = apiKey + "&lat=" + lat + "&lon=" + lon;   // the full API string for lat and lon
//   });
// }







// function getLatLon() {
// 	 $.getJSON('http://ipinfo.io', function(data) {
// 		var location = data.loc;
// 		lat = location.split(",")[0];
// 		lon = location.split(",")[1];
// 		// getWeatherData();  // this is in the callback of the getJson command? Isn't this doing too much?
// 	});
// 	console.log("Lat: " + lat + "Lon: " + lon)
// }

// }
//
// $(document).ready(function() {
//   $("#get-weather").on("click", function() {  // target the get-weather id and on clicking it, call the next function...
//     getLatLong(function(lat, lon) {
//       console.log(lat);
//       $("#location").text(lat);
//     });
//   });
// });


// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     lat = position.coords.latitude; // 51.5191334
//     lon = position.coords.longitude; // -2.5400082999999998
//    apiKey = "http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80";
//     weatherQuery = apiKey + "&lat=" + lat + "&lon=" + lon;   // the full API string for lat and lon
//   });
// }







// function getLatLon() {
// 	 $.getJSON('http://ipinfo.io', function(data) {
// 		var location = data.loc;
// 		lat = location.split(",")[0];
// 		lon = location.split(",")[1];
// 		// getWeatherData();  // this is in the callback of the getJson command? Isn't this doing too much?
// 	});
// 	console.log("Lat: " + lat + "Lon: " + lon)
// }
