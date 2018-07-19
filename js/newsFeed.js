/////Getting the local storage

function loadDataBase(nameTag) {
    const dataBaseString = localStorage.getItem(nameTag);
    return JSON.parse(dataBaseString);
}

loadDataBase("af-newsFeedInventory");

//////// Populating the page with Data

///creating the cards 

function creatingLocationCard(array) {
    const emptyCard = `<div class="card">
                        <img class="card-img-top img-thumbnail" src="${array.url}" alt="${array.name}">
                        <div class="card-body">
                            <h5 class="card-title">${array.location}</h5>
                            <p class="card-text">${array.date}</p>
                        </div></div>`
    return emptyCard
}

function creatingEventTypeCard(array) {
    const emptyCard = `<div class="card"><img src="${array.eventTypeURL}" alt="Art Show"
    class="img-thumbnail eventType"><div class="card-body"><h5>${array.type}</h5></div></div>`
    return emptyCard
}

function creatingCollabCard (array) {
    const emptyCard = `<div class="card">
                        <img class="card-img-top img-thumbnail" src="${array.url}" alt="${array.name}"><div class="card-body"><h5 class="card-title">${array.name}</h5></div></div>`
    return emptyCard
}

function makingMainCard (function1, function2, function3, array) {
    let emptyMainCard = `
                        <div class="card-header"><h4>${array.event}</h4></div>
                        <div class="card-body" id="main-card-body1">
                            <div class="card-deck">
                            ${function1}${function2}${function3}</div></div>`;
    return emptyMainCard
}


/////////


console.log(creatingLocationCard(newsFeedInventory.event[1]));



console.log(creatingEventTypeCard(newsFeedInventory.event[1]));
console.log(creatingCollabCard(newsFeedInventory.collaborators[1]));
console.log(makingMainCard(creatingLocationCard(newsFeedInventory.event[1]), creatingEventTypeCard(newsFeedInventory.event[1]), creatingCollabCard(newsFeedInventory.event[1]), newsFeedInventory.event[1]));

const selectCard2 = document.querySelector("#card2");
const selectCard3 = document.querySelector("#card3");
const selectCard4 = document.querySelector("#card4");

selectCard2.innerHTML = (makingMainCard(creatingLocationCard(newsFeedInventory.event[1]), creatingEventTypeCard(newsFeedInventory.event[1]), creatingCollabCard(newsFeedInventory.collaborators[1]), newsFeedInventory.event[1]));

selectCard3.innerHTML = (makingMainCard(creatingLocationCard(newsFeedInventory.event[2]), creatingEventTypeCard(newsFeedInventory.event[2]), creatingCollabCard(newsFeedInventory.collaborators[2]), newsFeedInventory.event[2]));

selectCard4.innerHTML = (makingMainCard(creatingLocationCard(newsFeedInventory.event[3]), creatingEventTypeCard(newsFeedInventory.event[3]), creatingCollabCard(newsFeedInventory.collaborators[3]), newsFeedInventory.event[3]));


