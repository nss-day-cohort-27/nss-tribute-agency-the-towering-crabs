function loadDatabase(nameTag){
  const databaseString = localStorage.getItem(nameTag);
  return JSON.parse(databaseString);
}

loadDatabase('FamilyTree')

// Create function with card info first, then call array from person.js.
function creatingMomCard (array) {
    const emptyCard = `<div class="card col-3">
    <img class="card-img-top" src="../images/Mom.jpg" alt="Julia Warhola">
    <div class="card-body">
      <h5 class="card-title">Andy's Mother</h5>
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
    <img class="card-img-top" src="../images/fakedad.JPG" alt="Andrej Warhola">
    <div class="card-body">
      <h5 class="card-title">Andy's Father</h5>
      <p class="card-text"> ${array.name}</p>
      <p class="card-text"> ${array.born}</p>
      <p class="card-text"> ${array.died}</p>
      <p class="card-text"> ${array.country}</p>
     
    </div>
  </div>
`
    return emptyCard
}


function creatingAndyCard (array) {
  const emptyCard = ` <div class="card col-3">
  <img class="card-img-top" src="../images/lilandy2.jpg" alt="Andy Warhol">
  <div class="card-body">
    <h5 class="card-title">Andy</h5>
    <p class="card-text"> ${array.name}</p>
    <p class="card-text"> ${array.born}</p>
    <p class="card-text"> ${array.died}</p>
    <p class="card-text"> ${array.country}</p>
   
  </div>
</div>
`
  return emptyCard
}



function creatingJohnCard (array) {
    const emptyCard = `<div class="card col-3">
    <img class="card-img-top" src="../images/rsz_man.jpg" alt="John Warhola">
    <div class="card-body">
      <h5 class="card-title">Andy's Other Brother</h5>
      <p class="card-text"> ${array.name}</p>
      <p class="card-text"> ${array.born}</p>
      <p class="card-text"> ${array.died}</p>
      <p class="card-text"> ${array.country}</p>
     
    </div>
  </div>
`
    return emptyCard
}

function creatingPavolCard (array) {
  const emptyCard = `<div class="card col-3">
  <img class="card-img-top" src="../images/rsz_skull2.jpg" alt="John Warhola">
  <div class="card-body">
    <h5 class="card-title">Andy's Brother</h5>
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
    <img class="card-img-top" src="../images/rsz_james2.jpg" alt="James Warhola">
    <div class="card-body">
      <h5 class="card-title">Andy's Nephew</h5>
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
// console.log(creatingBroCard(familyTreeDatabase.siblings[0]));
console.log(creatingNephewCard(familyTreeDatabase.offspring[0]));

// Create new const to match div in HTML
const getmom = document.querySelector('#mom');
// Get mom from HTML and populate with database and array
getmom.innerHTML = creatingMomCard(familyTreeDatabase.parents[0]);

const getdad = document.querySelector('#dad');
getdad.innerHTML = (creatingDadCard(familyTreeDatabase.parents[1]));

const getandy = document.querySelector('#andy');
getandy.innerHTML = creatingAndyCard(familyTreeDatabase.him[0]);

const getjohn = document.querySelector('#john');
getjohn.innerHTML = creatingJohnCard(familyTreeDatabase.siblings[0]);

const getpavol = document.querySelector('#pavol');
getpavol.innerHTML = creatingPavolCard(familyTreeDatabase.siblings[1]);

const getjames = document.querySelector('#james');
getjames.innerHTML = creatingNephewCard(familyTreeDatabase.offspring[0]);