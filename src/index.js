let addPoke = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#poke-comp-btn");
  const showAllBtn = document.querySelector("#show-all-btn");
  const pokeFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    addPoke = !addPoke;
    if (addPoke) {
      pokeFormContainer.style.display = "block";
    } else {
      pokeFormContainer.style.display = "none";
    }
  });
  
  showAllBtn.addEventListener("click", () => {
    document.getElementById("pokemon-collection").innerHTML = "";
    fetchCardData();
    showAllBtn.style.display = "none";
  });
});

// alert called when fetch fails

const sendAlert = () => console.log("There was an error. Please try again.")

// handles "like" fetch operation

/* const handleLike = (e) => {
  fetch(`http://localhost:3000/toys/${e.target.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      likes: parseInt(e.target.previousSibling.innerText) + 1
    })
  })
  .then(resp => resp.json())
  .then(data => e.target.previousSibling.innerText = `${data.likes} Likes`)
  .catch(sendAlert);
} */

// handles card generation

const createCard = (pokemon) => {
  let card = document.createElement("div");
  card.className = "card";
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p style="position:relative;top:-3px;left:-20px; font-size:1rem"><span class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span class="${handleDoubleType(handleFairy(handleType2()))}" id="type2">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></p></div>`;
  document.getElementById("pokemon-collection").appendChild(card);
}

const createCard1 = (pokemon) => {
  let card = document.createElement("div");
  card.className = "card";
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p style="position:relative;top:-3px;left:-20px; font-size:1rem"><span class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span class="${handleDoubleType(handleFairy(handleType2()))}" id="type2">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></p></div>`;
  document.getElementById("poke1-cont").appendChild(card);
}

const createCard2 = (pokemon) => {
  let card = document.createElement("div");
  card.className = "card";
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p style="position:relative;top:-3px;left:-20px; font-size:1rem"><span class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span class="${handleDoubleType(handleFairy(handleType2()))}" id="type2">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></p></div>`;
  document.getElementById("poke2-cont").appendChild(card);
}

// creates comparison based on submitted form data

document.querySelector(".poke-search-form").addEventListener("submit", (e) => {
  e.preventDefault();  
  const pokeCollection = document.getElementById("pokemon-collection");
  pokeCollection.innerHTML=`
  <table id="compt-table" style="position:relative;width:100%;margin:0 auto">
    <tr>
      <td id="poke1-cont" style="text-align:center;width:40%"></td>
      <td style="text-align:center;width:20%">VS</td>
      <td id="poke2-cont" style="text-align:center;width:40%"></td>
    </tr>
  </table>
  `
  const poke1 = parseInt(document.getElementById("poke-box1").value);
  const poke2 = parseInt(document.getElementById("poke-box2").value);
  const poke1Card = fetch(`https://pokeapi.co/api/v2/pokemon/${poke1}/`)
    .then(resp => resp.json())
    .then(data => createCard1(data))
    .catch(sendAlert);
  const poke2Card = fetch(`https://pokeapi.co/api/v2/pokemon/${poke2}/`)
    .then(resp => resp.json())
    .then(data => createCard2(data))
    .catch(sendAlert);    
  document.querySelector("#show-all-btn").style.display = "inline";
})

// incomplete search code

/*
  const pokeCollection = document.getElementsByID("pokemon-collection");
  const cards = pokeCollection.querySelectorAll(".card")
  for (card of cards)
*/

// generates cards for all pre-existing pokemon in the JSON database

async function fetchCardData() {
  for (pokemon=1; pokemon<152; pokemon++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(resp => resp.json())
    .then(data => createCard(data))
    .catch(sendAlert)
  }
}

fetchCardData()

/* fetch(`https://pokeapi.co/api/v2/pokemon/4/`)
  .then(resp => resp.json())
  .then(data => data.types[1].type.name)
  .catch(sendAlert) */