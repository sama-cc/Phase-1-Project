let addPoke = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#poke-comp-btn");
  const showAllBtn = document.querySelector("#show-all-btn");
  const pokeFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    addPoke = !addPoke;
    if (addPoke) {
      pokeFormContainer.style.display = "block";
      document.getElementById("poke-comp-btn").innerText = "Hide";
      document.getElementById("poke-comp-btn").style.border = "1px";
      document.getElementById("poke-comp-btn").style.height = "auto";
    } else {
      pokeFormContainer.style.display = "none";
      document.getElementById("poke-comp-btn").style.height = "3rem";
      document.getElementById("poke-comp-btn").innerText = "Choose Pokemon to Compare"
      document.getElementById("alert-text-1").style.display = "none"
      document.getElementById("alert-text-2").style.display = "none"
    }
  });
  
  showAllBtn.addEventListener("click", () => {
    document.getElementById("pokemon-collection").innerHTML = "";
    fetchCardData();
    document.querySelector("#guide").style.display = "none";
    document.querySelector("#pokemon-collection").style.height = "72vh";  
    document.querySelector("#pokemon-collection").style.overflowY = "auto";  
    showAllBtn.style.display = "none";

  });
});

function compareNormal(type) {
  switch (type) {
    default : return "is Effective";
    case "rock" : return "is Not Very Effective";
    case "ghost" : return "has No Effect";
  }
}

function compareFighting(type) {
  switch (type) {
    default: return "is Effective";
    case "normal":
    case "rock": 
    case "ice": return "is Super Effective";
    case "flying": 
    case "poison": 
    case "bug": 
    case "psychic": return "is Not Very Effective";
    case "ghost": return "has No Effect";
  }
}

function compareFlying(type) {
  switch (type) {
    default : return "is Effective";
    case "grass": 
    case "fighting": 
    case "bug": return "is Super Effective";
    case "electric": 
    case "rock": return "is Not Very Effective";
  }
}

function comparePoison(type) {
  switch (type) {
    default : return "is Effective";
    case "grass":
    case "bug": return "is Super Effective";
    case "poison":
    case "ground": 
    case "rock": 
    case "ghost": return "is Not Very Effective";
  }
}

function compareGround(type) {
  switch (type) {
    default : return "is Effective";
    case "fire":
    case "electric": 
    case "poison": 
    case "rock": return "is Super Effective";
    case "grass":
    case "bug": return "is Not Very Effective";
    case "flying": return "has No Effect";
  }
}

function compareRock(type) {
  switch (type) {
    default : return "is Effective";
    case "fire":
    case "ice": 
    case "flying": 
    case "bug": return "is Super Effective";
    case "fighting":
    case "ground": return "is Not Very Effective";
  }
}

function compareBug(type) {
  switch (type) {
    default : return "is Effective";
    case "grass":
    case "poison": 
    case "psychic": return "is Super Effective";
    case "fire":
    case "fighting": 
    case "flying": 
    case "ghost": return "is Not Very Effective";
  }
}

function compareGhost(type) {
  switch (type) {
    default : return "is Effective";
    case "ghost": return "is Super Effective";
  }
}

function compareFire(type) {
  switch (type) {
    default : return "is Effective";
    case "grass":
    case "ice": 
    case "bug": return "is Super Effective";
    case "fire":
    case "water":
    case "rock": 
    case "dragon": return "is Not Very Effective";
  }
}

function compareWater(type) {
  switch (type) {
    default : return "is Effective";
    case "fire":
    case "ground": 
    case "rock": return "is Super Effective";
    case "water":
    case "grass": 
    case "dragon": return "is Not Very Effective";
  }
}

function compareGrass(type) {
  switch (type) {        
    default : return "is Effective";
    case "water":
    case "ground": 
    case "rock": return "is Super Effective";
    case "fire":
    case "grass": 
    case "poison": 
    case "flying": 
    case "bug": 
    case "dragon": return "is Not Very Effective";

  }
}

function compareElectric(type) {
  switch (type) {
    default : return "is Effective";
    case "water":
    case "flying": return "is Super Effective";
    case "electric":
    case "grass": 
    case "dragon": return "is Not Very Effective";
    case "ground": return "has No Effect";
  }
}

function comparePsychic(type) {
  switch (type) {
    default : return "is Effective";
    case "fighting":
    case "poison": return "is Super Effective";
    case "psychic": return "is Not Very Effective";
  }
}

function compareIce(type) {
  switch (type) {
    default : return "is Effective";
    case "grass":
    case "flying": 
    case "dragon": return "is Super Effective";
    case "water":
    case "ice": return "is Not Very Effective";
  }
}

function compareDragon(type) {
  switch (type) {
    default : return "is Effective";
    case "dragon": return "is Super Effective";
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

const pokeValues = Object.values(pokemonList);

// alert called when fetch fails

const sendAlert = () => alert("There was an error. Please try again.");

// handles card generation

const createCard = (pokemon) => {
  let card = document.createElement("div");
  card.className = "card";
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p style="position:relative;top:-3px;left:-20px; font-size:1rem"><span class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span class="${handleDoubleType(handleFairy(handleType2()))}">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></p></div>`;
  document.getElementById("pokemon-collection").appendChild(card);
}

const createCard1 = (pokemon) => {
  let card = document.getElementById("poke1-cont");
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 id="poke-name1" style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry-vs">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p id="poke1-type1" style="position:relative;top:-3px;left:-20px; font-size:1rem"><span id="poke1-type1-span" class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span id="poke1-type2"><span id="poke1-type2-span" class="${handleDoubleType(handleFairy(handleType2()))}">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></span></p></div>`;
}

const createCard2 = (pokemon) => {
  let card = document.getElementById("poke2-cont");
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 id="poke-name2" style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry-vs">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p id="poke2-type1" style="position:relative;top:-3px;left:-20px; font-size:1rem"><span id="poke2-type1-span" class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span id="poke2-type2"><span id="poke2-type2-span" class="${handleDoubleType(handleFairy(handleType2()))}">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></span></p></div>`;
}

// creates comparison data based on submitted form data

document.querySelector(".poke-search-form").addEventListener("submit", (e) => {
  e.preventDefault();  
  const pokeCollection = document.getElementById("pokemon-collection");
  pokeCollection.innerHTML=`
   <table id="comp-data-table" style="width:100%;height:200px;">
    <tbody style="text-align:center">
      <tr>
        <td id="comp-data" style="padding:0px"></td>
      </tr>
      <tr>
        <td id="comp-data2" style="padding:0px"></td>
      </tr>
      <tr>
        <td id="comp-data3" style="padding:0px"></td>
       </tr>
       <tr> 
        <td id="comp-data4" style="padding:0px"></td>
      </tr>
    </tbody>
  </table>

  <table id="comp-table" style="position:relative;width:100%;margin:0 auto">
    <tbody style="text-align:center">
      <tr>
        <td id="poke1-cont"></td>
        <td style="text-align:center"><p style="font-family:bradley hand;font-size:5rem;font-weight:bold;font-style:italic">VS</p></td>
        <td id="poke2-cont"></td>    
      </tr>
    </tbody>  
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

  function isFirstGen(value) {
    if (value < 152) {
      return value;
    } else {
      return false;
    }
  }
    
  function queryValue1() {
    const value = document.getElementById("poke-box1").value;
    return value == parseInt(value) ? isFirstGen(parseInt(value)) : findStringValue1(value.toLowerCase())
  }  

  function queryValue2() {
    const value = document.getElementById("poke-box2").value;
    return value == parseInt(value) ? isFirstGen(parseInt(value)) : findStringValue2(value.toLowerCase())
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

const poke1Promise = Promise.resolve(poke1 === false ? document.getElementById("alert-text-1").style.display = "inline" : poke1True())

const poke2Promise = Promise.resolve(poke2 === false ? document.getElementById("alert-text-2").style.display = "inline" : poke2True())

Promise.all([poke1Promise, poke2Promise])
  .then(() => {
    setTimeout(() => {
      const pokeName1 = document.getElementById("poke-name1").innerText;
      const pokeName2 = document.getElementById("poke-name2").innerText;
      const pokeType1 = document.getElementById("poke1-type1-span").innerText.substring(8).toLowerCase();
      const pokeType2 = document.getElementById("poke1-type2-span").innerText.substring(8).toLowerCase();
      const oppType1 = document.getElementById("poke2-type1-span").innerText.substring(8).toLowerCase();
      const oppType2 = document.getElementById("poke2-type2-span").innerText.substring(8).toLowerCase();

      function selectCompFunc1(type) {
        switch (type) {
          case "normal": return compareNormal(oppType1);
          case "fire": return compareFire(oppType1);
          case "water": return compareWater(oppType1);
          case "electric": return compareElectric(oppType1);
          case "grass": return compareGrass(oppType1);
          case "ice": return compareIce(oppType1);
          case "fighting": return compareFighting(oppType1);
          case "poison": return comparePoison(oppType1);
          case "ground": return compareGround(oppType1);
          case "flying": return compareFlying(oppType1);
          case "psychic": return comparePsychic(oppType1);
          case "bug": return compareBug(oppType1);
          case "rock": return compareRock(oppType1);
          case "ghost": return compareGhost(oppType1);
          case "dragon": return compareDragon(oppType1);
        }
      }

      function selectCompFunc2(type) {
        switch (type) {
          case "normal": return compareNormal(oppType2);
          case "fire": return compareFire(oppType2);
          case "water": return compareWater(oppType2);
          case "electric": return compareElectric(oppType2);
          case "grass": return compareGrass(oppType2);
          case "ice": return compareIce(oppType2);
          case "fighting": return compareFighting(oppType2);
          case "poison": return comparePoison(oppType2);
          case "ground": return compareGround(oppType2);
          case "flying": return compareFlying(oppType2);
          case "psychic": return comparePsychic(oppType2);
          case "bug": return compareBug(oppType2);
          case "rock": return compareRock(oppType2);
          case "ghost": return compareGhost(oppType2);
          case "dragon": return compareDragon(oppType2);
        }
      }      

      function selectHighlight1() {
        const effect = selectCompFunc1(pokeType1);
        switch (effect) {
          case "is Effective": return "";
          case "is Super Effective": return "super-effective";
          case "is Not Very Effective": return "nv-effective";
          case "has No Effect": return "no-effect";
        }
      }

      function selectHighlight2() {
        const effect = selectCompFunc2(pokeType1);
        switch (effect) {
          case "is Effective": return "";
          case "is Super Effective": return "super-effective";
          case "is Not Very Effective": return "nv-effective";
          case "has No Effect": return "no-effect";
        }
      }

      function selectHighlight3() {
        const effect = selectCompFunc1(pokeType2);
        switch (effect) {
          case "is Effective": return "";
          case "is Super Effective": return "super-effective";
          case "is Not Very Effective": return "nv-effective";
          case "has No Effect": return "no-effect";
        }
      }

      function selectHighlight4() {
        const effect = selectCompFunc2(pokeType2);
        switch (effect) {
          case "is Effective": return "";
          case "is Super Effective": return "super-effective";
          case "is Not Very Effective": return "nv-effective";
          case "has No Effect": return "no-effect";
        }
      }
    
      document.getElementById("comp-data").innerHTML = `${pokeName1}'s <span class="${pokeType1}" style="font-weight: normal">${pokeType1}</span> type <span class="${selectHighlight1()}">${selectCompFunc1(pokeType1)}</span> against ${pokeName2}'s <span class="${oppType1}" style="font-weight: normal">${oppType1}</span> type.`

      oppType2 !== "none" ? document.getElementById("comp-data2").innerHTML = `${pokeName1}'s <span class="${pokeType1}" style="font-weight: normal">${pokeType1}</span> type <span class="${selectHighlight2()}">${selectCompFunc2(pokeType1)}</span> against ${pokeName2}'s <span class="${oppType2}" style="font-weight: normal">${oppType2}</span> type.`: document.getElementById("comp-data2").style.display ="none";

      pokeType2 !== "none" ? document.getElementById("comp-data3").innerHTML = `${pokeName1}'s <span class="${pokeType2}" style="font-weight: normal">${pokeType2}</span> type <span class="${selectHighlight3()}">${selectCompFunc1(pokeType2)}</span> against ${pokeName2}'s <span class="${oppType1}" style="font-weight: normal">${oppType1}</span> type.` : document.getElementById("comp-data3").style.display ="none";

      (oppType2 !== "none" && pokeType2 !== "none") ? document.getElementById("comp-data4").innerHTML = `${pokeName1}'s <span class="${pokeType2}" style="font-weight: normal">${pokeType2}</span> type <span class="${selectHighlight4()}">${selectCompFunc2(pokeType2)}</span> against ${pokeName2}'s <span class="${oppType2}" style="font-weight: normal">${oppType2}</span> type.` : document.getElementById("comp-data4").style.display ="none";
      

    }, 50)
  })

  document.querySelector("#pokemon-collection").style.height = "auto";  
  document.querySelector("#pokemon-collection").style.overflowY = "hidden";  
  document.getElementById("poke-box1").value = "";
  document.getElementById("poke-box2").value = "";
  document.querySelector("#guide").style.display = "block";
  document.querySelector("#show-all-btn").style.display = "inline";
})

async function fetchCardData() {
  for (poke=1; poke<152; poke++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
    .then(resp => resp.json())
    .then(data => createCard(data))
    .catch(sendAlert)
  }
}

fetchCardData()