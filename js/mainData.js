const mainCardData = []


const executiveCard = {
    title: "Andy Warhol",
    residence: "Resided in New York City, NY, U.S.",
    collaborators: "Collaborators:",
    collab1: "The Velvet Underground",
    collab2: "Jean-Michael Basquiat",
    collab3: "Paul Morrissey",
    collab4: "Gerard Malanga"
}

mainCardData.push(executiveCard)




const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(executiveCard,"mainCardData")