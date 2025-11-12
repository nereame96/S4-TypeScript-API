export type weatherCodeType = {
    [code: number] : string;
}

export const weatherCodes : weatherCodeType = {
    // Clear Sky
    0: "Clear sky",
  
    // Mainly clear, partly cloudy, and overcast
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
  
    // Fog
    45: "Fog",
    48: "Depositing rime fog",
  
    // Drizzle
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
  
    // Freezing Drizzle
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
  
    // Rain
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
  
    // Freezing Rain
    66: "Light freezing rain",
    67: "Heavy freezing rain",
  
    // Snow fall
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
  
    // Snow grains
    77: "Snow grains",
  
    // Rain showers
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
  
    // Snow showers
    85: "Slight snow showers",
    86: "Heavy snow showers",
  
    // Thunderstorm
    95: "Slight or moderate thunderstorm",
  
    // Thunderstorm with hail
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
  };