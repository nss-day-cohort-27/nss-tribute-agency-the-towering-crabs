const newsFeedInventory = {}

//// Defining the Tables


newsFeedInventory.collaborators = [];
newsFeedInventory.event = [];

///// Primary Card Data

const basquiat = {
    name: "Jean-Michel Basquiat",
    url: "../images/Basquiat.jpg"
}


const SanFranArtShow = {
    event: "San Franciso Art Show",
    location: "San Francisco",
    date: "June 12, 1966",
    type: "Art Show",
    url: "../images/sanFran.jpg"
}

newsFeedInventory.collaborators.push(basquiat);
newsFeedInventory.event.push(SanFranArtShow);


/////functions for creating objects 

function creatingCollab (name, url) {
    const newObject = {};
    newObject.name = name;
    newObject.url = url;
    newsFeedInventory.collaborators.push(newObject);
}

creatingCollab("Lou Reed", "../images/keithHaring.jpg");
creatingCollab("William S. Burroughs");
creatingCollab("Keith Haring");

function creatingEvent (event, location, date, type, url) {
    const newObject = {};
    newObject.event = event;
    newObject.location = location;
    newObject.date = date;
    newObject.type = type;
    newObject.url = url;
    newsFeedInventory.event.push(newObject);
}

creatingEvent("Velvet Underground Concert", "Greenwich Village", "October 02, 1971", "Concert");
creatingEvent("Dinner at Dorsia", "Upper West Side", "February 19, 1976", "Dinner");
creatingEvent("Opening of Pop Art Studio", "Los Angeles", "May 01, 1981", "Art Show");


console.log(newsFeedInventory)

////Saving to Local Storage

function savingToLocalStorage (dataBaseObject, localStorageKey) {
    const strigifiedDatabase = JSON.stringify(dataBaseObject);
    localStorage.setItem(localStorageKey, strigifiedDatabase);

}

savingToLocalStorage(newsFeedInventory, "af-newsFeedInventory");