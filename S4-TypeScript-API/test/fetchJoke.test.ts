import { describe, test, expect, vi, beforeAll, afterAll, beforeEach, afterEach } from "vitest"; 
import { fetchJoke } from "../src/fetchJoke";
import { createReportObject } from "../src/createReportObject";
import { fetchWeather } from "../src/fetchWeather";
import type { DadJoke } from "../src/interfaces/dadJoke";
import type { reportJokes } from "../src/interfaces/reportJokes";
import type { WeatherForecast } from "../src/interfaces/weatherForecast"

describe('Function fetchJoke', () => {
    let message : DadJoke  =  {
        id:     "NJJ6wH6hNCd",
        joke:   "What do you get when you cross a chicken with a skunk? A fowl smell!",
        status:  200,
    }

    const mockResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue(message)
    };

    const responseBody = JSON.stringify(message);

    beforeEach(() => vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(responseBody, { status: 200, headers: { 'Content-Type': 'application/json' } })))

    afterAll(() => vi.spyOn(globalThis, 'fetch').mockRestore())
    
    test('should return an object', async () => {
        
        let result = await fetchJoke()
        expect(result).toEqual(message)
    })
})

describe ('Function createReportObject', () => {
    

    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    test ('should return an object',  () => {

        let message : reportJokes = {
            joke:   "What do you get when you cross a chicken with a skunk? A fowl smell!",
            score: 1,
            date: "2025-11-11T10:20:48.005Z",
        }

        let output : reportJokes = {
            joke:   "What do you get when you cross a chicken with a skunk? A fowl smell!",
            score: 1,
            date: "2025-11-11T10:20:48.005Z",
        }

        vi.setSystemTime(output.date)

        let result =  createReportObject(output.joke, output.score)

        expect(result).toEqual(message)
    })



})

describe ('Function fetchWeather', () => {
    
    let message : WeatherForecast = {
        "time": "2025-11-11T12:15",
        "interval": 900,
        "temperature_2m": 18.5,
        "weather_code": 2
    }


    const mockResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue(message)
    };

    const responseBody = JSON.stringify(message);

    beforeEach(() => vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(responseBody, { status: 200, headers: { 'Content-Type': 'application/json' } })))

    afterAll(() => vi.spyOn(globalThis, 'fetch').mockRestore())

    test ('should return an object', async () => {
        
        let result = await fetchWeather()
        expect(result).toEqual(message)
    })
})
