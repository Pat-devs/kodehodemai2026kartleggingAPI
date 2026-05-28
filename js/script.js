import { createParagraph } from "./domUtils.js"; 

// API - Application Programming Interface
let mainUrl = "https://pokeapi.co/api/v2/pokemon"

// Dom elements
let pokemonContainer = document.getElementById("pokemon-container")
/* 
<button id="nav-back">Back</button>
<button id="nav-next">Next</button>*/
let navButtonBack = document.getElementById("nav-back")
let navButtonNext = document.getElementById("nav-next")

// bad navigation data solution :)
let navNextUrl = "" // so when we run getData, we overwrite this variable with correct data.next url
let navPrevUrl = "https://pokeapi.co/api/v2/pokemon?offset=200&limit=20" 


// navigation events
navButtonNext.addEventListener("click", navNext)
// navNext, to navigate to next page
function navNext() {
    // need url here!
    console.log(navNextUrl)
    getData(navNextUrl)
}

function navBack() {
    // need url here!
    console.log(navNextUrl)
    getData(navPrevUrl)
}
// get data fetches data from given url
async function getData(url) {

    // terminate if url is null
    if (url == null) {
        return // this line will kill the function
    } // in all other cases the remaining code will run...

    // 1. make a request and store the response
    let response = await fetch(url)
    // console.log(response)

    // 2. get data from the response
    let data = await response.json()
    
    // count, items per page (20)
    // 
    console.log(data)
    // Update navigation Urls:
    navNextUrl = data.next
    console.log(navNextUrl)

    // clear the contain from any exising elements
    pokemonContainer.innerHTML = "" 

    // show the pokemon list on the page 
    for (let pokemon of data.results) {

        // console.log(pokemon)
        pokemonContainer.append(createParagraph(pokemon.name))
    }

}


getData(mainUrl) // invoke (kjøre) funksjonen



