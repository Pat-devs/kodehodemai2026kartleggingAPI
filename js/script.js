// Dom elements
let pokemonContainer = document.getElementById("pokemon-container")
console.log(pokemonContainer)

pokemonContainer.textContent = "It works"

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



