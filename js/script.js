// API 
// endpoint: https://pokeapi.co/api/v2/pokemon

let mainUrl = "https://pokeapi.co/api/v2/pokemon"




async function fetchData() {

    let pokemonData = await fetch(mainUrl)

    console.log(pokemonData)

}

fetchData() 