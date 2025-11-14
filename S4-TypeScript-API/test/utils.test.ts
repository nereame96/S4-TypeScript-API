import { describe, test, expect, vi, beforeEach } from 'vitest'
import { getProccesedWeather } from '../src/utils'
import { fetchWeather } from '../src/fetchWeather'
import { getRandomJoke } from "../src/utils";
import { fetchJoke } from '../src/fetchJoke';
import { fetchChuckJoke } from '../src/fetchChuckJoke';

vi.mock('../src/fetchWeather', () => ({
    fetchWeather: vi.fn()
}))

vi.mock('../src/weatherCodes', () => ({
    weatherCodes: {
        3: "Overcast",
    }
}))

describe('Function getProccesedWeather', () => {
    test('should return temperature and weather description', async () => {
        (fetchWeather as any).mockResolvedValue({
            current: {
                time: "2025-11-09T10:00",
                interval: 900,
                temperature_2m: 19.5,
                weather_code: 3
            }
        })

        const result = await getProccesedWeather()

        expect(result).toEqual(['19.5°C', 'Overcast'])
    })
})




let mockFetchJoke: any;
let mockFetchChuckJoke: any;

vi.mock('../src/fetchJoke', () => ({

    fetchJoke: (...args) => mockFetchJoke(...args),
}));

vi.mock('../src/fetchChuckJoke', () => ({
    fetchChuckJoke: (...args) => mockFetchChuckJoke(...args),
}));

mockFetchJoke = vi.fn(); 
mockFetchChuckJoke = vi.fn(); 

describe('Function getRandomJoke', () => {

    const mockDadJokeData = { joke: "Texto de chiste de Papá." };
    const mockChuckJokeData = { value: "Texto de chiste de Chuck." };


    beforeEach(() => {
       
        vi.restoreAllMocks();

        mockFetchJoke.mockResolvedValue(mockDadJokeData as any);
        mockFetchChuckJoke.mockResolvedValue(mockChuckJokeData as any);
    });

    test('should return DadJoke text when Math.random is less than 0.5', async () => {

        vi.spyOn(Math, 'random').mockReturnValue(0.4); 

        const result = await getRandomJoke();

        expect(mockFetchJoke).toHaveBeenCalledTimes(1);
        expect(mockFetchChuckJoke).not.toHaveBeenCalled();

        expect(result).toBe("Texto de chiste de Papá.");
    });


    test('should return ChuckJoke text when Math.random is 0.5 or greater', async () => {
        
        vi.spyOn(Math, 'random').mockReturnValue(0.6); 

        const result = await getRandomJoke();

        expect(mockFetchChuckJoke).toHaveBeenCalledTimes(1);
        expect(mockFetchJoke).not.toHaveBeenCalled();

        expect(result).toBe("Texto de chiste de Chuck.");
    });
});

