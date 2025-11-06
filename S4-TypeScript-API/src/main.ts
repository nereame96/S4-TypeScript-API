"use strict"

import type { DadJoke } from "./interfaces/dadJoke";


export const fetchJoke = async () : Promise<DadJoke> => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json' 
        }
    })

    if (!response.ok) {
        throw new Error(`Error : ${response.status} ${response.statusText}`);
    }

    const data : DadJoke = await response.json()
    console.log(data)
    return data
}



document.addEventListener('DOMContentLoaded', () => {

    const resultJoke  = document.getElementById('resultJoke') as HTMLDivElement
    const btnShowJoke = document.getElementById('btnShowJoke') as HTMLButtonElement


     btnShowJoke.addEventListener('click', async () =>{
        const jokeObject : Promise<DadJoke>  = fetchJoke()
        resultJoke.innerHTML = await jokeObject.joke
    } )
})



