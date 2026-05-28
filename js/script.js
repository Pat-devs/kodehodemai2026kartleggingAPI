import { createParagraph } from "./domUtils.js"; 

// Dom elements
let pokemonContainer = document.getElementById("pokemon-container")


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
    pokemonContainer.innerHTML = "" // in this case its safe to use innerHTML because we want to remove everyhing (including any events)

    // show the pokemon list on the page 
    for (let pokemon of data.results) {

        pokemonContainer.append(createParagraph(pokemon.name))
    }

}


let newData = getData() // invoke (kjøre) funksjonen



