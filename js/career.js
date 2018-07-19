
const careerInventory = {}

careerInventory.publishedWorks = [

    velvetUndergound = {
    band: "The Velvet Underground",
    genre: "Art Rock",
    label: "Verve",
    release: "March 12, 1967"
    },

    marilyn = {
    name: "Marilyn Diptych",
    artist: "Andy Warhol",
    year: "1962",
    location: "National Gallery of Victoria"
    },

    mao = {
    name: "Mao Tse-Tung",
    artist: "Andy Warhol",
    year: "1973",
    location: "The Art Institute of Chicago"

    }

]

careerInventory.living = [

    pennsylvania = {
        years: "1928-1949",

    },

    NYC = {
        years: "1949-1987"
    }

]

careerInventory.collabs = [

    basquiat = {
        name: "Jean-Michel Basquiat",
        life: "1960-1988",
        style: "street art",
        movement: "neo-expressionism"
    },

    velvet = {
        name: "Velvet Underground",
        genre: "Art Rock",
        label: "Verve",
        relased: "March 12, 1967"
    }
]


function saveToLocalStorage (dataBaseObject, localStorageKey) {
    const strigifiedDatabase = JSON.stringify(dataBaseObject);
    localStorage.setItem(localStorageKey, strigifiedDatabase);

}

saveToLocalStorage(careerInventory, "careerInventory")
// to get the localStorage you will need to call it in a function. See careermain.js to see it returned.