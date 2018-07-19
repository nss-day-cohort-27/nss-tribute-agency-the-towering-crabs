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
                            <h5 class="card-title">${array.event}</h5>
                            <p class="card-text">${array.date}</p>
                        </div></div>`
    return emptyCard
}

function creatingEventTypeCard(array) {
    const emptyCard = `<div class="card"><img src="${array.url}" alt="Art Show"
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



console.log(creatingLocationCard(newsFeedInventory.event[1]));
console.log(creatingEventTypeCard(newsFeedInventory.event[1]));
console.log(creatingCollabCard(newsFeedInventory.collaborators[1]));
console.log(makingMainCard(creatingLocationCard(newsFeedInventory.event[1]), creatingEventTypeCard(newsFeedInventory.event[1]), creatingCollabCard(newsFeedInventory.event[1]), newsFeedInventory.event[1]));

const selectCard2 = document.querySelector("#card2");

selectCard2.innerHTML = (makingMainCard(creatingLocationCard(newsFeedInventory.event[1]), creatingEventTypeCard(newsFeedInventory.event[1]), creatingCollabCard(newsFeedInventory.coll[1]), newsFeedInventory.event[1]));


