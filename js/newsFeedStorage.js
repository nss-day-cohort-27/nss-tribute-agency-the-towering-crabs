const newsFeedInventory = {}

//// Defining the Tables


newsFeedInventory.collaborators = [];
newsFeedInventory.typesOfEvent = [];
newsFeedInventory.event = [];

///// Primary Card Data

const basquiat = {
    name: "Jean-Michel Basquiat"
}

const artShow = {
    name: "Art Show"
}

const SanFranArtShow = {
    event: "San Franciso Art Show",
    location: "San Francisco",
    Date: "June 12, 1966"
}

newsFeedInventory.collaborators.push(basquiat);
newsFeedInventory.artShow.push(artShow);
newsFeedInventory.event(SanFranArtShow);