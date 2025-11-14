import type { reportJokes } from "./interfaces/reportJokes";
import {  } from "./interfaces/chuckNorrisJoke";
import { createReportObject } from "./createReportObject";
import { getProccesedWeather } from "./utils";
import { getRandomJoke } from "./utils";


document.addEventListener('DOMContentLoaded', async () => {

    const resultJoke  = document.getElementById('resultJoke') as HTMLDivElement
    const resultWeather  = document.getElementById('resultWeather') as HTMLDivElement
    const btnShowJoke = document.getElementById('btnShowJoke') as HTMLButtonElement
    let currentJoke : string | null = ''
    const reportJokes : reportJokes[] = [] 

    let selectedScore : number | null = null
    const scoreButtons = document.querySelectorAll('.buttonRating')


    let dataWeather = await getProccesedWeather()
    resultWeather.textContent = `${dataWeather[0]} , ${dataWeather[1]}`


    const startScoreListeners = () => {

        scoreButtons.forEach(button => {
            button.addEventListener('click', () => {
                const btn = button as HTMLButtonElement
                const scoreString = btn.dataset.score 
                if (scoreString) {
                    selectedScore = parseInt(scoreString)
                }
                
            } )
        })

    }

    const getAndDisplayJoke = async () => {
        try {
            const randomJoke : string = await getRandomJoke()
        resultJoke.textContent = randomJoke
        currentJoke = randomJoke
        
        } 
        
        catch (error) {
            resultJoke.textContent = 'Error loading joke'
            console.error("Fetch Error:", error)
            currentJoke = null
        }
        
    }


    startScoreListeners()
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



