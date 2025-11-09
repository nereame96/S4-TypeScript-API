import { describe, test, expect, vi, beforeAll, afterAll, beforeEach, afterEach } from "vitest"; 
import { fetchJoke } from "../src/fetchJoke";
import type { DadJoke } from "../src/interfaces/dadJoke";

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
