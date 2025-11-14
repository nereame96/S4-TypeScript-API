import type { WeatherForecast } from "./interfaces/weatherForecast";
import type { DadJoke } from "./interfaces/dadJoke";
import type { ChuckNorrisJoke } from "./interfaces/chuckNorrisJoke";
import { fetchWeather } from "./fetchWeather";
import { weatherCodes } from "./weatherCodes";
import { fetchJoke } from "./fetchJoke";
import { fetchChuckJoke } from "./fetchChuckJoke";


export   const getProccesedWeather = async () : Promise <[string, string]> =>  {
       
            const weatherObject : WeatherForecast = await fetchWeather()
            const weatherCode = weatherObject.current.weather_code
            const description : string = weatherCodes[weatherCode] || 'Unknown condition'
            const temperature : string = `${weatherObject.current.temperature_2m}°C`

            return  [temperature, description]

    }
    

export const getRandomJoke = async  () : Promise<string> => {

    if(Math.random() < 0.5){
        const data : DadJoke = await fetchJoke()
        return data.joke
    } else {
        const data : ChuckNorrisJoke = await fetchChuckJoke()
        return data.value
    }
}