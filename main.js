function fetchData(city) {
    var url = 'https://wttr.in/' + city + '?format=j1';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var currentCondition = data.current_condition[0];
        var pressure = currentCondition.pressure;
        var tempC = currentCondition.temp_C;
        var feelsLikeC = currentCondition.FeelsLikeC;
        var weatherDesc = currentCondition.weatherDesc[0].value;
        var precipMM = currentCondition.precipMM;

        
        document.getElementById('pressure').innerText = 'Pressure: ' + pressure + ' hPa';
        document.getElementById('temp').innerText = 'Temperature: ' + tempC + ' °C';
        document.getElementById('feels-like').innerText = 'Feels Like: ' + feelsLikeC + ' °C';
        document.getElementById('weather-desc').innerText = 'Weather: ' + weatherDesc;
        document.getElementById('precipitation').innerText = 'Precipitation: ' + precipMM + ' mm';
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-button');
    var searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function() {
      var city = searchInput.value;
      fetchData(city);
    });

    fetchData('Tashkent');
  });