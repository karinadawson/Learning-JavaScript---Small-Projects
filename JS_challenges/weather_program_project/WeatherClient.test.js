const WeatherClient = require("./WeatherClient")
const jestFetchMock = require("jest-fetch-mock");
const apiKey = require('./apiKey');

describe('Weather Client', () => {
    beforeAll(() => {
        jestFetchMock.enableMocks();
      });
    
      beforeEach(() => {
        fetch.resetMocks();
      });

    const client = new WeatherClient
    it('Returns weather for given city', async () => {
        const mockWeatherData = {
            main: { temp: 15 },
            weather: [{ main: 'Cloudy' }]
        };
        fetch.mockResponseOnce(JSON.stringify(mockWeatherData));

        const client = new WeatherClient();
        const city = 'Manchester';
        const weatherData = await client.fetchWeatherData(city);

 
        expect(fetch).toHaveBeenCalledWith(
            `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
          );
          expect(weatherData).toEqual({ temp: 15, weather: 'Cloudy' });
          expect(client.city).toBe(city);

        });
});