
// User Story: I can see the weather in my current location.

//Example API call: http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80&lat=51.5276880&lon=-2.5410160


// Store the user lat lon location... or if can't find, give an option to search manually?
function getLatLong(){
  if (navigator.geolocation) {    // TODO: or if can't find, give an error message? give an option to search manually?
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude; // 51.5191334
      var lon = position.coords.longitude; // -2.5400082999999998
      var apiKey = "http://api.openweathermap.org/data/2.5/weather?&APPID=a66f4e53741f129977e971853722ab80";
      var weatherQuery = apiKey + "&lat=" + lat + "&lon=" + lon;   // the full API string for lat and lon
    });
  }
}

function gettingJSON(){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ee6596241130f193adf1ba90e625cc10",function(json){
    var data = JSON.stringify(json);
  });
}

// call the api

$(document).ready(function() {
  $("#get-weather").on("click", function() {
    getLatLong();
    // gettingJSON();
    //alert("hey")
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
