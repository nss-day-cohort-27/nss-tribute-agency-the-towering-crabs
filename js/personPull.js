// Create function with card info first, then call array from person.js.
function creatingMomCard (array) {
    const emptyCard = `<div class="card col-3">
    <img class="card-img-top" src="../images/Mom.jpg" alt="Julia Warhola">
    <div class="card-body">
      <h5 class="card-title">Julia Warhola</h5>
      <p class="card-text"> ${array.name}</p>
      <p class="card-text"> ${array.born}</p>
      <p class="card-text"> ${array.died}</p>
      <p class="card-text"> ${array.country}</p>
     
    </div>
  </div>
`
    return emptyCard
}

function creatingDadCard (array) {
    const emptyCard = `<div class="card col-3">
    <img class="card-img-top" src="../images/dad.JPG" alt="Andrej Warhola">
    <div class="card-body">
      <h5 class="card-title">Andrej Warhola</h5>
      <p class="card-text"> ${array.name}</p>
      <p class="card-text"> ${array.born}</p>
      <p class="card-text"> ${array.died}</p>
      <p class="card-text"> ${array.country}</p>
     
    </div>
  </div>
`
    return emptyCard
}

function creatingBroCard (array) {
    const emptyCard = `<div class="card col-3">
    <img class="card-img-top" src="../images/johnW.gif" alt="John Warhola">
    <div class="card-body">
      <h5 class="card-title">John Warhola</h5>
      <p class="card-text"> ${array.name}</p>
      <p class="card-text"> ${array.born}</p>
      <p class="card-text"> ${array.died}</p>
      <p class="card-text"> ${array.country}</p>
     
    </div>
  </div>
`
    return emptyCard
}

function creatingNephewCard (array) {
    const emptyCard = `<div class="card col-3">
    <img class="card-img-top" src="../images/james2.jpg" alt="James Warhola">
    <div class="card-body">
      <h5 class="card-title">James Warhola</h5>
      <p class="card-text"> ${array.name}</p>
      <p class="card-text"> ${array.born}</p>
      <p class="card-text"> ${array.died}</p>
      <p class="card-text"> ${array.country}</p>
     
    </div>
  </div>
`
    return emptyCard
}





console.log(creatingMomCard(familyTreeDatabase.parents[0]));
console.log(creatingDadCard(familyTreeDatabase.parents[1]));
console.log(creatingBroCard(familyTreeDatabase.siblings[0]));
console.log(creatingNephewCard(familyTreeDatabase.offspring[0]));


const getmom = document.querySelector('#mom');
getmom.innerHTML = creatingMomCard(familyTreeDatabase.parents[0]);