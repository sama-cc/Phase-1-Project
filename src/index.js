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

function compareNormal(type) {
  switch (type) {
    default : return "are Effective";
    case "rock" : return "are Not Very Effective";
    case "ghost" : return "has No Effect";
  }
}

function compareFighting(type) {
  switch (type) {
    default: return "are Effective";
    case "normal", "rock", "ice": return "are Super Effective";
    case "flying", "poison", "bug", "psychic": return "are Not Very Effective";
    case "ghost": return "has No Effect";
  }
}

function compareFlying(type) {
  switch (type) {
    default : return "are Effective";
    case "grass", "fighting", "bug": return "are Super Effective";
    case "electric", "rock": return "are Not Very Effective";
  }
}

function comparePoison(type) {
  switch (type) {
    default : return "are Effective";
    case "grass", "bug": return "are Super Effective";
    case "poison", "ground", "rock", "ghost": return "are Not Very Effective";
  }
}

function compareGround(type) {
  switch (type) {
    default : return "are Effective";
    case "fire", "electric", "poison", "rock": return "are Super Effective";
    case "grass", "bug": return "are Not Very Effective";
    case "flying": return "has No Effect";
  }
}

function compareRock(type) {
  switch (type) {
    default : return "are Effective";
    case "fire", "ice", "flying", "bug": return "are Super Effective";
    case "fighting", "ground": return "are Not Very Effective";
  }
}

function compareBug(type) {
  switch (type) {
    default : return "are Effective";
    case "grass", "poison", "psychic": return "are Super Effective";
    case "fire", "fighting", "flying", "ghost": return "are Not Very Effective";
  }
}

function compareGhost(type) {
  switch (type) {
    default : return "are Effective";
    case : return "are Super Effective";
    case : return "are Not Very Effective";
    case : return "has No Effect";
  }
}

function compareFire(type) {
  switch (type) {
    default : return "are Effective";
    case : return "are Super Effective";
    case : return "are Not Very Effective";
    case : return "has No Effect";
  }
}

function compareWater(type) {
  switch (type) {
    default : return "are Effective";
    case : return "are Super Effective";
    case : return "are Not Very Effective";
    case : return "has No Effect";
  }
}

function compareGrass(type) {
  switch (type) {
    default : return "are Effective";
    case : return "are Super Effective";
    case : return "are Not Very Effective";
    case : return "has No Effect";
  }
}

function compareElectric(type) {
  switch (type) {
    default : return "are Effective";
    case : return "are Super Effective";
    case : return "are Not Very Effective";
    case : return "has No Effect";
  }
}

function comparePsychic(type) {
  switch (type) {
    default : return "are Effective";
    case : return "are Super Effective";
    case : return "are Not Very Effective";
    case : return "has No Effect";
  }
}

function compareIce(type) {
  switch (type) {
    default : return "are Effective";
    case : return "are Super Effective";
    case : return "are Not Very Effective";
    case : return "has No Effect";
  }
}

function compareDragon(type) {
  switch (type) {
    default : return "are Effective";
    case : return "are Super Effective";
    case : return "are Not Very Effective";
    case : return "has No Effect";
  }
}

const pokemonList = {
      Bulbasaur:1,
      Ivysaur:2,
      Venusaur:3,
      Charmander:4,
      Charmeleon:5,
      Charizard:6,
      Squirtle:7,
      Wartortle:8,
      Blastoise:9,
      Caterpie:10,
      Metapod:11,
      Butterfree:12,
      Weedle:13,
      Kakuna:14,
      Beedrill:14,
      Pidgey:15,
      Pidgeotto:16,
      Pidgeot:17,
      Rattata:18,
      Raticate:19,
      Spearow:20,
      Fearow:21,
      Ekans:22,
      Arbok:23,
      Pikachu:24,
      Raichu:25,
      Sandshrew:26,
      Sandslash:27,
      "Nidoran-M":28,
      Nidorina:29,
      Nidoqueen:30,
      "Nidoran-F":31,
      Nidorino:32,
      Nidoking:33,
      Clefairy:34,
      Clefable:35,
      Vulpix:36,
      Ninetales:37,
      Jigglypuff:38,
      Wigglytuff:39,
      Zubat:40,
      Golbat:41,
      Oddish:42,
      Gloom:43,
      Vileplume:44,
      Paras:45,
      Parasect:46,
      Venonat:47,
      Venomoth:48,
Diglett:49,
Dugtrio:50,
Meowth:51,
Persian:52,
Psyduck:53,
Golduck:54,
Mankey:55,
Primeape:56,
Growlithe:57,
Arcanine:58,
Poliwag:59,
Poliwhirl:60,
Poliwrath:61,
Abra:62,
Kadabra:63,
Alakazam:64,
Machop:65,
Machoke:66,
Machamp:67,
Bellsprout:68,
Weepinbell:70,
Victreebel:71,
Tentacool:72,
Tentacruel:73,
Geodude:74,
Graveler:75,
Golem:76,
Ponyta:77,
Rapidash:78,
Slowpoke:79,
Slowbro:80,
Magnemite:81,
Magneton:82,
"Farfetch\'d":83,
Doduo:84,
Dodrio:85,
Seel:86,
Dewgong:87,
Grimer:88,
Muk:89,
Shellder:90,
Cloyster:91,
Gastly:92,
Haunter:93,
Gengar:94,
Onix:95,
Drowzee:96,
Hypno:97,
Krabby:98,
Kingler:99,
Voltorb:100,
Electrode:101,
Exeggcute:102,
Exeggutor:103,
Cubone:104,
Marowak:105,
Hitmonlee:106,
Hitmonchan:107,
Lickitung:108,
Koffing:109,
Weezing:110,
Rhyhorn:111,
Rhydon:112,
Chansey:113,
Tangela:114,
Kangaskhan:115,
Horsea:116,
Seadra:117,
Goldeen:118,
Seaking:119,
Staryu:120,
Starmie:121,
"Mr. Mime":122,
Scyther:123,
Jynx:124,
Electabuzz:125,
Magmar:126,
Pinsir:127,
Tauros:128,
Magikarp:129,
Gyarados:130,
Lapras:131,
Ditto:132,
Eevee:133,
Vaporeon:134,
Jolteon:135,
Flareon:136,
Porygon:137,
Omanyte:138,
Omastar:139,
Kabuto:140,
Kabutops:141,
Aerodactyl:142,
Snorlax:143,
Articuno:144,
Zapdos:145,
Moltres:146,
Dratini:147,
Dragonair:148,
Dragonite:149,
Mewtwo:150,
Mew:151}

const pokeKeys = Object.keys(pokemonList);

const pokeValues = Object.values(pokemonList)

// alert called when fetch fails

const sendAlert = () => console.log("There was an error. Please try again.")

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
  let card = document.getElementById("poke1-cont");
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry-vs">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p style="position:relative;top:-3px;left:-20px; font-size:1rem"><span class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span class="${handleDoubleType(handleFairy(handleType2()))}" id="type2">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></p></div>`;
}

const createCard2 = (pokemon) => {
  let card = document.getElementById("poke2-cont");
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry-vs">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p style="position:relative;top:-3px;left:-20px; font-size:1rem"><span class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span class="${handleDoubleType(handleFairy(handleType2()))}" id="type2">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></p></div>`;
}

// creates comparison based on submitted form data

document.querySelector(".poke-search-form").addEventListener("submit", (e) => {
  e.preventDefault();  
  const pokeCollection = document.getElementById("pokemon-collection");
  pokeCollection.innerHTML=`
  <table id="compt-table" style="position:relative;width:100%;margin:0 auto">
    <tr>
      <td id="poke1-cont"></td>
      <td style="text-align:center"><p style="font-family:bradley hand;font-size:5rem;font-weight:bold;font-style:italic">VS</p></td>
      <td id="poke2-cont"></td>
    </tr>
  </table>
  `
  function findStringValue1(string) {
    const pokeKeysLow = pokeKeys.map(poke=>poke.toLowerCase());
    const stringValue = pokeKeysLow.indexOf(string) + 1;
    if (stringValue == false) {
      return false;
    } else {
      return stringValue;
    }
  }  

  function findStringValue2(string) {
    const pokeKeysLow = pokeKeys.map(poke=>poke.toLowerCase());
    const stringValue = pokeKeysLow.indexOf(string) + 1;
    if (stringValue == false) {
      return false;
    } else {
      return stringValue;
    }
  }  
  
  const poke1 = queryValue1();
  const poke2 = queryValue2();
  
  function queryValue1() {
    const value = document.getElementById("poke-box1").value;
    return value == parseInt(value) ? parseInt(value) : findStringValue1(value.toLowerCase())
  }  

  function queryValue2() {
    const value = document.getElementById("poke-box2").value;
    return value == parseInt(value) ? parseInt(value) : findStringValue2(value.toLowerCase())
  }
  
  function poke1True() {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke1}/`)
    .then(resp => resp.json())
    .then(data => createCard1(data))
    .catch(sendAlert);
    document.getElementById("alert-text-1").style.display = "none";
  }
  
  function poke2True() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke2}/`)
    .then(resp => resp.json())
    .then(data => createCard2(data))
    .catch(sendAlert);
    document.getElementById("alert-text-2").style.display = "none";
  }

  poke1 === false ? document.getElementById("alert-text-1").style.display = "inline" : poke1True();
  
  poke2 === false ? document.getElementById("alert-text-2").style.display = "inline" : poke2True();

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
  for (poke=1; poke<152; poke++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
    .then(resp => resp.json())
    .then(data => createCard(data))
    .catch(sendAlert)
  }
}

fetchCardData()