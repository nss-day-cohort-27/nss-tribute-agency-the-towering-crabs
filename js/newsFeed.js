/////Getting the local storage

function loadDataBase(nameTag) {
    const dataBaseString = localStorage.getItem(nameTag);
    return JSON.parse(dataBaseString);
}

loadDataBase("af-newsFeedInventory");

//////// Populating the page with Data

const bananaScript = `<img src="../images/banana.svg.png" alt="warhol bananas" class="bananas">`;
let randomNumber = Math.floor((Math.random() * 9) + 1);
console.log(randomNumber);

function getRandomBanana (number) {
    let emptyString = "";
    for (let i = 0; i < number; i++) {
        emptyString += `${bananaScript}`;
    }
    return emptyString;
}

console.log(getRandomBanana(randomNumber));






///creating the cards 

function creatingLocationCard(array) {
    const emptyCard = `<div class="card">
                        <img class="card-img-top img-thumbnail" src="${array.url}" alt="${array.location}">
                        <div class="card-body">
                            <h5 class="card-title">${array.location}</h5>
                            <p class="card-text">${array.date}</p>
                        </div></div>`
    return emptyCard
}

function creatingEventTypeCard(array) {
    const emptyCard = `<div class="card"><img src="${array.eventTypeURL}" alt="${array.type}"
    class="img-thumbnail eventType"><div class="card-body"><h5>${array.type}</h5></div></div>`
    return emptyCard
}

function creatingCollabCard (array) {
    const emptyCard = `<div class="card">
                        <img class="card-img-top img-thumbnail" src="${array.url}" alt="${array.name}"><div class="card-body"><h5 class="card-title">${array.name}</h5></div></div>`
    return emptyCard
}

function makingMainCard (function1, function2, function3, array, number) {
    let emptyMainCard = `
                        <div class="card-header d-flex"><h4 class="col-6">${array.event}</h4>
                        <div class="col-6">${getRandomBanana(number)}
                        </div></div>
                        <div class="card-body main-card-body1 ${array.className}">
                            <div class="card-deck">
                            ${function1}${function2}${function3}</div></div>`;
    return emptyMainCard
}


/////////


// console.log(creatingLocationCard(newsFeedInventory.event[1]));



// console.log(creatingEventTypeCard(newsFeedInventory.event[1]));
// console.log(creatingCollabCard(newsFeedInventory.collaborators[1]));
// console.log(makingMainCard(creatingLocationCard(newsFeedInventory.event[1]), creatingEventTypeCard(newsFeedInventory.event[1]), creatingCollabCard(newsFeedInventory.event[1]), newsFeedInventory.event[1]));

const selectCard2 = document.querySelector("#card2");
const selectCard3 = document.querySelector("#card3");
const selectCard4 = document.querySelector("#card4");

selectCard2.innerHTML = (makingMainCard(creatingLocationCard(newsFeedInventory.event[1]), creatingEventTypeCard(newsFeedInventory.event[1]), creatingCollabCard(newsFeedInventory.collaborators[1]), newsFeedInventory.event[1], randomNumber));

randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

selectCard3.innerHTML = (makingMainCard(creatingLocationCard(newsFeedInventory.event[2]), creatingEventTypeCard(newsFeedInventory.event[2]), creatingCollabCard(newsFeedInventory.collaborators[2]), newsFeedInventory.event[2], randomNumber));

randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

selectCard4.innerHTML = (makingMainCard(creatingLocationCard(newsFeedInventory.event[3]), creatingEventTypeCard(newsFeedInventory.event[3]), creatingCollabCard(newsFeedInventory.collaborators[3]), newsFeedInventory.event[3], randomNumber));


