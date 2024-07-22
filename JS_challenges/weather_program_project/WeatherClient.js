const apiKey = require('./apiKey');


class WeatherClient {

constructor() { 
  this.weatherData = null
  this.city = 'London'

}

fetchWeatherData = (city) => {
  this.city = city
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
  return fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    this.weatherData = {
      temp: weatherData.main.temp,
      weather: weatherData.weather[0].main,
    };
    // console.log(`Requesting weather data for ${city}`);
    // console.log(this.weatherData.temp);
    // console.log(this.weatherData.weather);
    return this.weatherData;
  });

}


}

const client = new WeatherClient()
console.log(client.fetchWeatherData("Melbourne"))


module.exports = WeatherClient
