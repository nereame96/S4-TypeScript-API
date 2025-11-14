import { describe, test, expect, vi } from 'vitest'
import { getProccesedWeather } from '../src/utils'
import { fetchWeather } from '../src/fetchWeather'

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