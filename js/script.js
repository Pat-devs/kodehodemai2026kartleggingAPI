// import "HVA" from "HVORFRA"



import { greet } from "./test.js"; // important: remember to add ./ or equivalent for the file. and add .js extention

greet()


// Dom elements
let pokemonContainer = document.getElementById("pokemon-container")


// creates a clickable paragraph tag, with given text
function createParagraph(text) {
    // create the element in a variable and set its text
    let paragraphElement = document.createElement("p")
    paragraphElement.textContent = text
    // add click event to the paragraphElement (not finished!)
    paragraphElement.addEventListener("click", console.log)

    // attach the element to the container
    pokemonContainer.append(paragraphElement)
}

// run the function (to see if it works)
createParagraph("Test")


// API - Application Programming Interface

// endpoint: https://pokeapi.co/api/v2/pokemon





async function getData() {
    
    // 1. make a request and store the response
    let response = await fetch("https://pokeapi.co/api/v2/pokemon")
    // console.log(response)

    // 2. get data from the response
    let data = await response.json()
    // console.log(data)

    // now that we have data, we can do something with it :)
    // lets try show the results...
 
    for (let pokemon of data.results) {
        console.log(pokemon)
    }

}


let newData = getData() // invoke (kjøre) funksjonen



