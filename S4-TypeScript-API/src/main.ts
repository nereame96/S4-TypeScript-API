"use strict"

import type { DadJoke } from "./interfaces/dadJoke";
import type { reportJokes } from "./interfaces/reportJokes";
import { fetchJoke } from "./fetchJoke";
import { createReportObject } from "./createReportObject";


document.addEventListener('DOMContentLoaded', async () => {

    const resultJoke  = document.getElementById('resultJoke') as HTMLDivElement
    const btnShowJoke = document.getElementById('btnShowJoke') as HTMLButtonElement
 
    type currentJokeType = string | null

    let currentJoke : currentJokeType = ''

    const reportJokes : reportJokes[] = [] 



    const getAndDisplayJoke = async () => {
        const jokeObject : DadJoke  = await fetchJoke()
        resultJoke.textContent =  jokeObject.joke
        currentJoke = jokeObject.joke
    }


    type selectedScoreType = number | null

    let selectedScore : selectedScoreType = null

    const scoreButtons = document.querySelectorAll('.buttonRating')


    scoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const btn = button as HTMLButtonElement
            const scoreString = btn.dataset.score 
            if (scoreString) {
                selectedScore = parseInt(scoreString)
            }
            
        } )
    })





    await getAndDisplayJoke()


   

     btnShowJoke.addEventListener('click', async () =>{
        
        if (selectedScore !== null && currentJoke !== null){
            reportJokes.push(createReportObject(currentJoke, selectedScore))
        }
        await getAndDisplayJoke()

        selectedScore = null

        console.log(reportJokes)
    } )

    
})


//las class buttonRating cuando haga click hará un array y si es 1, 2, 3 y no es null, cuando se click al button next (btnShowJoke) se guardará en el array



