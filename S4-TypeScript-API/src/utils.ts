import type { WeatherForecast } from "./interfaces/weatherForecast";
import { fetchWeather } from "./fetchWeather";
import { weatherCodes } from "./weatherCodes";


export   const getProccesedWeather = async () =>  {
        try {
            const weatherObject : WeatherForecast = await fetchWeather()
            const weatherCode = weatherObject.current.weather_code
            const description : string = weatherCodes[weatherCode] || 'Unknown condition'
            const temperature : string = `${weatherObject.current.temperature_2m}°C`

            return  [temperature, description]

        } catch (error) {

            return ["--°C", "Error"];
        }
    }