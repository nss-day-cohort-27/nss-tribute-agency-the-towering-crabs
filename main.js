
const main = document.querySelector(".card")
const cardInfo = document.querySelector(".card-text")
const cardTitle = document.querySelector(".card-title")



const title = document.createElement("h5")
title.classList = "title"
title.textContent = "Andy Warhol"

const collab = document.createElement("ul")
collab.textContent = "Collaborators:"
collab.classList = "collab-list"

const collabListItem1 = document.createElement("li")
collabListItem1.classList = "collab-list-items"
collabListItem1.textContent = "The Velvet Underground"

const collabListItem2 = document.createElement("li")
collabListItem2.classList = "collab-list-items"
collabListItem2.textContent = "Jean-Michael Basquiat"

const collabListItem3 = document.createElement("li")
collabListItem3.classList = "collab-list-items"
collabListItem3.textContent = "Paul Morrissey"

const collabListItem4 = document.createElement("li")
collabListItem4.classList = "collab-list-items"
collabListItem4.textContent = "Gerard Malanga"


const portrait = document.createElement("img")
portrait.src = "./images/warhol.jpeg"
portrait.classList = "front-pic"

const residence = document.createElement("article")
residence.classList = "residence"
residence.textContent = "Resided in New York City, NY, U.S."

cardTitle.appendChild(title)
title.appendChild(residence)


cardTitle.appendChild(portrait)

// ID
// main-article

//Class Names
// title
// collab-list
// collab-list-items
// front-pic
// residence


collab.appendChild(collabListItem1)
collab.appendChild(collabListItem2)
collab.appendChild(collabListItem3)
collab.appendChild(collabListItem4)



cardInfo.appendChild(collab)


main.appendChild(fragment)

