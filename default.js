var weatherAPIKey = '&APPID=a66f4e53741f129977e971853722ab80';

//Example API string: http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80&lat=51.5276880&lon=-2.5410160&units=metric
function getWeatherQueryString(lat, lon){
	return "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?" + weatherAPIKey + "&lat=" + lat + "&lon=" + lon + "&units=metric"; // the full API string with lat and lon, and metric units. crossorigin is to combat the http limitation of openweathermap. The page on codepen must load with https for the geolocation function to work, but openweather only allows http.
}


function handleWeatherResponse(json) {  // take the data from the json call and output to webpage
	var weatherData = json;		// need to specify var so that it's local to the function.
	console.log(weatherData);
	//console.log("Weather Data Grabbed");
	$("h1").text("Your Local Weather for " +weatherData.name);  // by putting this here and calling sendRequest below, on page load it displays the data straight away!
		$("#weather-desc").text(weatherData.weather[0].description);  // pass these directly in, rather than creating variables for them first.
		var celcius = weatherData.main.temp
		var Fahrenheit = celcius * 1.8 + 32;
		$("#tempC").text(Math.floor(celcius) + "°C");
		$("#tempF").text(Math.floor(Fahrenheit) + "°F");
		$("#wind-speed").text(weatherData.wind.speed + " mph");
		var weatherIconUrl = "<img src=https://crossorigin.me/http://openweathermap.org/img/w/";
		var weatherIconPng = ".png>"
		$("#weather-icon").html(weatherIconUrl + weatherData.weather[0].icon + weatherIconPng);
}


// Get latitude and longitude, build weather query string, send weather query request
function sendRequest() {
	if (navigator.geolocation) { // IDEA: if can't find, give an error message? give an option to search for location?
		navigator.geolocation.getCurrentPosition(function(position){

			var weatherQueryString = getWeatherQueryString(position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2)); // extracted the query string creation to getWeatherQueryString function.
			console.log(weatherQueryString);

			$.getJSON(weatherQueryString, handleWeatherResponse); // data response is passed to handleWeatherResponse
		});
	}
}



// function toggleTemp() {
//   var celsius = weatherData.main.temp;    // won't work as haven't got access to weatherData
//   var Fahren = celcius * 1.8 + 32;    // convert C to F
//   if (code on page shows degrees C) {
//      convert to degrees f;
//      replace on page with Fahren;
//    } else {
//      replace on page with celcius;
//    }
// }


// User Story: I can see the weather in my current location.
sendRequest();  // call in body so that it runs at page load to display the weather straight away



// Output raw weather data to test
$(document).ready(function() {
	$("#get-weather").on("click", sendRequest );  // read up on difference between passing the reference to the function and passing the result of the function. Notice differnce between with and without parens at end of function!

// User Story: I can push a button to toggle between Fahrenheit and Celsius.
 $("#toggle-c-f").on("click", function() {
	$(".toggle").toggle();
 });
});



// TODO: User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.



 // TODO: re weather api... Free account has limitation of capacity and data availability. If you do not get respond from server do not try to repeat your request immediately, but only after 10 min. Also we recommend to store your previous request data.


// The getJSON in getLatLon is async, so had to use a callback to wait for the data before console.logging the info. Might need this later if other functions don't return what's expected.


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
 */
