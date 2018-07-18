
const fragment = document.createDocumentFragment()
const main = document.querySelector("#main-article")

const title = document.createElement("header")
title.classList = "title"
title.textContent = "Andy Warhol"

const collab = document.createElement("ul")
collab.textContent = "Collaborators:"
collab.classList = "collab-list"

const collabListItem1 = document.createElement("li")
collabListItem1.classList = "collab-list-items"
collabListItem1.textContent = "The Velvet Underground"



collab.appendChild(collabListItem1)

title.appendChild(collab)
fragment.appendChild(title)

main.appendChild(fragment)