import type { WeatherForecast } from "./interfaces/weatherForecast"


export const fetchWeather = async () : Promise<WeatherForecast> => {

    const urlWeatherAPI = 'https://api.open-meteo.com/v1/forecast?latitude=41.4024&longitude=2.1944&current=temperature_2m,weather_code&forecast_days=1'
    const response = await fetch(urlWeatherAPI, )

    if (!response.ok) {
        throw new Error(`Error : ${response.status} ${response.statusText}`);
    }

    const data : WeatherForecast = await response.json()
    console.log(data)
    return data
}