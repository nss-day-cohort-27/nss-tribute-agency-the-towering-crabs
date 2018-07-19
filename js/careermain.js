function getLocalStorage(nameTag) {
    const dataBaseString = localStorage.getItem(nameTag);
    return JSON.parse(dataBaseString);
}
// The "parse" means that you are taking the string and returning it as an object rather than a string
// This function is converting it so that you can see it in the console.

// console.log(getLocalStorage("careerInventory")); Showing that you're getting the information in the console
// in the developer tools
getLocalStorage("careerInventory");

// function loadCollab(array) {
//     const collabCard = `<div class="card">
//     <img class="card-img-top" src="${array.name}" alt="Velvet Underground">
//     <p></p>
//   </div>`
// }

const firstCard=document.querySelector(".first-card")
const firstCardText=document.createElement("p")
firstCardText.textContent="The most well-known collaboration was likely between Warhol and young artist Jean-Michel Basquiat, a New York native known for mixing mediums in a new and innovative way."

firstCard.appendChild(firstCardText)

const secondCard=document.querySelector(".second-card")
const secondCardText=document.createElement("p")
secondCardText.textContent="During their first meeting, they were photographed together at lunch. Basquiat left soon after and a mere hour later, Basqiat returned with a large painting of the polaroid."

secondCard.appendChild(secondCardText)
