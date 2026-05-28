// creates a clickable paragraph tag, with given text
export function createParagraph(text) {
    // create the element in a variable and set its text
    let paragraphElement = document.createElement("p")
    paragraphElement.textContent = text
    // add click event to the paragraphElement (not finished!)
    paragraphElement.addEventListener("click", console.log)

    // attach the element to the container
    // pokemonContainer.append(paragraphElement)

    // return the paragraphElement
    return paragraphElement
}