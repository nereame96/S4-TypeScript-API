"use strict"

import type { reportJokes } from "./interfaces/reportJokes";


export const createReportObject =  (joke : string, score : number) : reportJokes => {

  return {
    joke,
    score,
    date: new Date().toISOString()
  }

}
