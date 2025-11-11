import type { DadJoke } from "./interfaces/dadJoke";


export const fetchJoke = async () : Promise<DadJoke> => {
    const urlJokeAPI : string = 'https://icanhazdadjoke.com/'
    const response = await fetch(urlJokeAPI, {
        headers: {
            'Accept': 'application/json' 
        }
    })

    if (!response.ok) {
        throw new Error(`Error : ${response.status} ${response.statusText}`);
    }

    const data : DadJoke = await response.json()
    
    return data
}