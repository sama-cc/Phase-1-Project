let addPoke = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#poke-search-btn");
  const pokeFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // toggles form
    addPoke = !addPoke;
    if (addPoke) {
      pokeFormContainer.style.display = "block";
    } else {
      pokeFormContainer.style.display = "none";
    }
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

// creates new card based on submitted form data

document.querySelector(".poke-search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: `${document.querySelectorAll(".poke-search-form input")[0].value}`,
      image: `${document.querySelectorAll(".poke-search-form input")[1].value}`,
      likes: 0
    })
  })
  .then(resp => resp.json())
  .then(createCard)
  .catch(sendAlert);
})

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