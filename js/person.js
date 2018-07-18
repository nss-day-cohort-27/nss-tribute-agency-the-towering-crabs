console.log('yerrrrr');

const familyTreeDatabase = {}

const mother = {
    name: "Judy",
    // born: born,
    // died: died,
    // country: 'europe'
    
}

// const father = {
//     "name": "Judy",
//     "born": born,
//     "died": died,
//     "country":
//         "about":
// }

// const brother = {
//     "name": "Judy",
//     "born": born,
//     "died": died,
//     "country":
//         "about":
// }

// const children = {
//     "name": "Judy",
//     "born": born,
//     "died": died,
//     "country":
//         "about":
// }

// familyTreeDatabase.parents[mother, father]
// familyTreeDatabase.siblings[brother]
// familyTreeDatabase.offspring[children]

// const saveDatabase = function (databaseObject, localStorageKey) {
//     /*
//         Convert the Object into a string.
//     */
//     const stringifiedDatabase = JSON.stringify(databaseObject)

//     /*
//         Create a key in local storage, and store the string
//         version of your inventory database as the value
//     */
//     localStorage.setItem(localStorageKey, stringifiedDatabase)
// }

// saveDatabase(familyTreeDatabase, 'FamilyTree')

// // CALL ME! Calls whats in localStorage...in browser.
// const loadDatabase = function (localStorageKey) {
//     // Get the string version of the database
//     const databaseString = localStorage.getItem(localStorageKey)

//     // Use JSON.parse() to convert the string back into an object
//     return JSON.parse(databaseString)
// }
// // Invoking function and also printing in console.
// console.log(loadDatabase('FamilyTree'))