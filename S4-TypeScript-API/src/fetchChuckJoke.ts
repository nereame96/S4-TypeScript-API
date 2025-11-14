import type { ChuckNorrisJoke } from "./interfaces/chuckNorrisJoke";


export const fetchChuckJoke = async () : Promise<ChuckNorrisJoke> => {
    const urlJokeAPI : string = 'https://api.chucknorris.io/jokes/random'
    const response = await fetch(urlJokeAPI)

    if(!response.ok) {
        throw new Error(`Error : ${response.status} ${response.statusText}`);
        
    }

    const data : ChuckNorrisJoke = await response.json()

    return data
}