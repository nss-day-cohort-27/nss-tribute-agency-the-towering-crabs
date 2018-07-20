function getLocalStorage(nameTag) {
    const dataBaseString = localStorage.getItem(nameTag);
    return JSON.parse(dataBaseString);
}
// The "parse" means that you are taking the string and returning it as an object rather than a string
// This function is converting it so that you can see it in the console.

// console.log(getLocalStorage("careerInventory")); Showing that you're getting the information in the console
// in the developer tools
getLocalStorage("careerInventory");

// Text for Velvet Underground card
const velvetCard=document.querySelector(".velvet-card")
const velvetCardText=document.createElement("p")
velvetCardText.textContent="Not only is Warhol credited for the album artwork, he also is the only credited producer of the album. The band appeared on the 'Exploding Plastic Inevitable,' a series of multimedia events."

velvetCard.appendChild(velvetCardText)

// Text for Marilyn Monroe card
const monroeCard=document.querySelector(".monroe-card")
const monroeCardText=document.createElement("p")
monroeCardText.textContent="This piece is one of Warhol's most notable. The work was completed weeks after Monroe's death. It was done using the screenprinting technique, a technique popularized by Warhol."

monroeCard.appendChild(monroeCardText)

// Text for Mao card
const maoCard=document.querySelector(".mao-card")
const maoCardText=document.createElement("p")
maoCardText.textContent="Another of Warhol's screen printed works. It was done after reading that Mao was considered the most famous person in the world at the time."

maoCard.appendChild(maoCardText)

// Text for first collab card
const firstCard=document.querySelector(".first-card")
const firstCardText=document.createElement("p")
firstCardText.textContent="The most well-known collaboration was likely between Warhol and young artist Jean-Michel Basquiat, a New York native known for mixing mediums in a new and innovative way."

firstCard.appendChild(firstCardText)

// Text for second collab card
const secondCard=document.querySelector(".second-card")
const secondCardText=document.createElement("p")
secondCardText.textContent="During their first meeting, they were photographed together at lunch. Basquiat left soon after and a mere hour later, Basqiat returned with a large painting of the polaroid."

secondCard.appendChild(secondCardText)

// text for third collab card
const thirdCard=document.querySelector(".third-card")
const thirdCardText=document.createElement("p")
thirdCardText.textContent="The two fed off of eachother's talents. Warhol helped Basquiat emerge in the art world and Basqiat helped Warhol by giving him a rebellious image again."

thirdCard.appendChild(thirdCardText)

// text for Carnegie/NYC

const carnegieCard=document.querySelector(".carnegie-card")
const carnegieCardText=document.createElement("p")
carnegieCardText.textContent="Warhol has traveled the world, but he has mainly called New York City his home. He was born on August 6, 1928 in Pittsburgh, Pennsylvania but moved to New York City after receiving his Bachelor of Fine Arts degree in 1949 from Carnegie Institute of Technology."

carnegieCard.appendChild(carnegieCardText)

// text for ADC Awards

const adcCard=document.querySelector(".ADC-card")
const adcCardText=document.createElement("p")
adcCardText.textContent="In 1951, he won his first ADC Award for a CBS record illustration. The work for I. Miller, Harper’s Bazaar, and Noonday Press won him additional ADC awards. The ADC Awards is the oldest continuously running industry award show in the world."

adcCard.appendChild(adcCardText)

function createBackground() {
    
}