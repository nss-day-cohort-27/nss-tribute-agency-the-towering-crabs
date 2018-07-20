const mainCardDataPull = JSON.parse(localStorage.getItem("mainCardData"))



function mainCard(array) {
    const emptyCard = `<div class="card text-center" style="width: 32rem; ">
    <img class="card-img-top" src="./images/warhol.jpeg" alt="Andrej Warhola">
    <div class="card-body">
      <h2 class="card-title">${array.title}</h2>
      <p class="card-text"> ${array.residence}</p>
      <ul class="card-text" style="list-style-type: none;"> ${array.collaborators}
      <li class="card-text"> ${array.collab1}</li>
      <li class="card-text"> ${array.collab2}</li>
      <li class="card-text">${array.collab3}</li>
      <li class="card-text">${array.collab4}</li>
      </ul>
      </div>
      </div>`

    return emptyCard
}


const getandy = document.querySelector('#main-article');
getandy.innerHTML = mainCard(mainCardDataPull);