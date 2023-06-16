// First, we create a function to fetch weather data for a given city
function fetchWeatherData(city) {
  var url = 'https://wttr.in/' + city + '?format=j1';

  // Here we make an HTTP request to fetch weather data
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var currentCondition = data.current_condition[0];

      // Required weather data properties
      var pressure = currentCondition.pressure;
      var temperature = currentCondition.temp_C;
      var feelsLikeC = currentCondition.FeelsLikeC;
      var weatherDescription = currentCondition.weatherDesc[0].value; // Change weatherDescription to weatherDesc
      var precipMM = currentCondition.precipMM;

      // Here we add the weather data to HTML elements to display 
      document.getElementById('pressure').innerHTML = '<strong>Pressure:</strong> ' + pressure + ' hPa';
      document.getElementById('temp').innerHTML = '<strong>Temperature:</strong> ' + temperature + ' °C';
      document.getElementById('feels-like').innerHTML = '<strong>Feels Like:</strong> ' + feelsLikeC + ' °C';
      document.getElementById('weather-desc').innerHTML = '<strong>Weather:</strong> ' + weatherDescription;
      document.getElementById('precipitation').innerHTML = '<strong>Precipitation:</strong> ' + precipMM + ' mm';
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('search-button');
  var input = document.getElementById('search-input');

  button.addEventListener('click', function () {
    var city = input.value;
    fetchWeatherData(city);
  });

  // Use one of the cities in your country as the default city to show the weather info
  fetchWeatherData('Tashkent');
});
