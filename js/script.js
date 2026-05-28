import { createParagraph } from "./domUtils.js"; 

// Dom elements
let pokemonContainer = document.getElementById("pokemon-container")
/* 
<button id="nav-back">Back</button>
<button id="nav-next">Next</button>*/
let navButtonBack = document.getElementById("nav-back")
let navButtonNext = document.getElementById("nav-next")

// bad navigation data solution :)
let navNextUrl = "" // so when we run getData, we overwrite this variable with correct data.next url
let navPrevUrl = "" 


// navigation events
navButtonNext.addEventListener("click", navNext)
// navNext, to navigate to next page
function navNext() {
    // need url here!
    console.log("Congrats you are at the next page.")
}

// API - Application Programming Interface
// endpoint: https://pokeapi.co/api/v2/pokemon
async function getData() {
    
    // 1. make a request and store the response
    let response = await fetch("https://pokeapi.co/api/v2/pokemon")
    // console.log(response)

    // 2. get data from the response
    let data = await response.json()
    // console.log(data)

    // clear the contain from any exising elements
    pokemonContainer.innerHTML = "" 

    // show the pokemon list on the page 
    for (let pokemon of data.results) {

        // console.log(pokemon)
        pokemonContainer.append(createParagraph(pokemon.name))
    }

    console.log(data.next)

}


let newData = getData() // invoke (kjøre) funksjonen



