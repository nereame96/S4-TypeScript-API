"use strict"

import type { DadJoke } from "./interfaces/dadJoke";
import { fetchJoke } from "./fetchJoke";


document.addEventListener('DOMContentLoaded', async () => {

    const resultJoke  = document.getElementById('resultJoke') as HTMLDivElement
    const btnShowJoke = document.getElementById('btnShowJoke') as HTMLButtonElement
        
    const getAndDisplayJoke = async () => {
        const jokeObject : DadJoke  = await fetchJoke()
        resultJoke.innerHTML =  jokeObject.joke
    }

    await getAndDisplayJoke()

     btnShowJoke.addEventListener('click', async () =>{
        await getAndDisplayJoke()
    } )
})



