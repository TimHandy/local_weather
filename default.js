// Show the Local Weather. FreeCodeCamp Assignment.

// User Story: I can see the weather in my current location.
// User Story: I can push a button to toggle between Fahrenheit and Celsius.
// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
// re weather api... Free account has limitation of capacity and data availability. If you do not get respond from server do not try to repeat your request immediately, but only after 10 min. Also we recommend to store your previous request data.
// This is a good working example: http://codepen.io/l-emi/pen/OXBwxL check it out for ideas.


var weatherAPIKey = '&APPID=a66f4e53741f129977e971853722ab80';

//Example API string: http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80&lat=51.5276880&lon=-2.5410160&units=metric
function getWeatherQueryString(lat, lon){
	return "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?" + weatherAPIKey + "&lat=" + lat + "&lon=" + lon + "&units=metric"; // the full API string with lat and lon, and metric units. crossorigin is to combat the http limitation of openweathermap. The page on codepen must load with https for the geolocation function to work, but openweather only allows http, hence the need for the crossorigin hack.
}

function handleWeatherResponseAndUpdatePage(json) {  // take the data from the json call and output to webpage
	var weatherData = json;		// need to specify var so that it's local to the function.
	console.log(weatherData);

	var location = weatherData.name
	var weatherDescripton = weatherData.weather[0].description
	var celcius = weatherData.main.temp;
	var fahrenheit = celcius * 1.8 + 32;
	var windSpeed = weatherData.wind.speed
	var humidity = weatherData.main.humidity;
	var pressure = weatherData.main.pressure;
	var weatherIconUrl = "<img src=https://crossorigin.me/http://openweathermap.org/img/w/";
	var weatherIconPng = ".png>";
	var weatherIcon = weatherData.weather[0].icon;
	var sunrise = new Date( weatherData.sys.sunrise *1000).toLocaleString().split(' ')[1].slice(0, -3);
	// split the date/time and select the time, discarding the first element (date), then slice off and discard the seconds (:00), leaving just '23:59'
	// toLocaleString converts to locale time taking into account summertime +1
	// OpenWeatherData provides sunrise/sunset as epoch times, eg. 1477464872 so have to convert to human readable time:
	// http://www.epochconverter.com/programming/#javascript
	var sunset = new Date( weatherData.sys.sunset *1000).toLocaleString().split(' ')[1].slice(0, -3);

	$("h1").text("Your Local Weather for " + location);
	$("#weather-desc").text(weatherDescripton);
	$("#tempC").text(Math.floor(celcius) + "°C ");
	$("#tempF").text(Math.floor(fahrenheit) + "°F ");
	$("#wind-speed").text('Windspeed: ' + windSpeed + " mph");
	$("#weather-icon").html(weatherIconUrl + weatherIcon + weatherIconPng);
	$("#humidity").text('Humidity: ' + humidity + " %");
	$("#pressure").text('Pressure: ' + Math.floor(pressure) + " hPa");
	$("#sunrise").text('Sunrise: ' + sunrise);
	$("#sunset").text('Sunset: ' + sunset);
}

// Get latitude and longitude, build weather query string, send weather query request
function sendRequest() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){

			var weatherQueryString = getWeatherQueryString(position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2)); // extracted the query string creation to getWeatherQueryString function.
			console.log(weatherQueryString);

			$.getJSON(weatherQueryString, handleWeatherResponseAndUpdatePage); // data response is passed to handleWeatherResponse
		});
	} else {
		console.log("Geolocation not enabled in browser!")
		$(".geolocation-message").removeClass('hidden');
	}
}


$(document).ready(function() {
	sendRequest();  // call in body so that it runs at page load to display the weather straight away
});

$("#update-weather").on("click", sendRequest );  // read up on difference between passing the reference to the function and passing the result of the function. Notice differnce between with and without parens at end of function!

$("#toggle-c-f").on("click", function() {
   $(".toggle").toggle();
});
