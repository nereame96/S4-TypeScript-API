
export interface WeatherForecast {
    current:        CurrentForecast;
    
}

export interface CurrentForecast {
    time:           string;
    interval:       number;
    temperature_2m: number;
    weather_code:   number;
}
