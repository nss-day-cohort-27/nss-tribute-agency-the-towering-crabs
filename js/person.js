console.log('yerrrrr');
// Make new database for local storage


const familyTreeDatabase = {};

// create arrays for objects
familyTreeDatabase.parents = [];
familyTreeDatabase.him = [];
familyTreeDatabase.siblings = [];
familyTreeDatabase.offspring = [];

// create objects and values
const mother = {
    name: "Júlia Justína Zavacká",
    born: 'November 20, 1891',
    died: 'November 22, 1972',
    country: 'Miková, Austria-Hungary',
    
}

const father = {
    name: "Andrej Warhola",
    born: '1889',
    died: '1942',
    country:'Slovakia',
}

const andy = {
    name: "Andrew Warhola",
    born: 'August 6, 1928',
    died: 'February 22, 1987',
    country:'United States, Pittsburgh, PA',
}

const brother = {
    name: "John Warhola",
    born: 'May 31, 1925',
    died: 'December 24, 2010',
    country:'United States, Pittsburg, PA',
    
}

const brother2 = {
    name: "Pavol Warhola",
    born: 'June 26, 1922',
    died: 'January 30, 2014',
    country:'Slovakia',
    
}


const nephew = {
    name: 'James Warhola',
    born: 'March 16, 1955',
    died: 'still living',
    country:'United States, Smock, Pennsylvania, PA'
    
}
// Push objects/arrays into database
familyTreeDatabase.parents.push(mother, father)
familyTreeDatabase.him.push(andy)
familyTreeDatabase.siblings.push(brother, brother2)
familyTreeDatabase.offspring.push(nephew)
console.log(familyTreeDatabase.parents);


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

saveDatabase(familyTreeDatabase, 'FamilyTree')


const homeStorage = JSON.parse(localStorage.getItem("FamilyTree"))

// // CALL ME! Calls whats in localStorage...in browser.
// const loadDatabase = function (localStorageKey) {
//     // Get the string version of the database
//     const databaseString = localStorage.getItem(localStorageKey)

//     // Use JSON.parse() to convert the string back into an object
//     return JSON.parse(databaseString)
// }
// // Invoking function and also printing in console.
// console.log(loadDatabase('FamilyTree'))

