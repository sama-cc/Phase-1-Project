//hides comparison form 

let addPoke = false;

//adds event listeners to addBtn and showAllBtn

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

//these two Arrays are used to convert Pokemon names to values 

const pokeKeys = Object.keys(pokemonList);

const pokeValues = Object.values(pokemonList);

// alert called when fetch fails

const sendAlert = () => alert("There was an error. Please try again.");

// handles card generation for the pokemon collection container

const createCard = (pokemon) => {
  let card = document.createElement("div");
  card.className = "card";
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p style="position:relative;top:-3px;left:-20px; font-size:1rem"><span class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span class="${handleDoubleType(handleFairy(handleType2()))}">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></p></div>`;
  document.getElementById("pokemon-collection").appendChild(card);
}

// creates card for Pokemon 1 when a comparison is submitted

const createCard1 = (pokemon) => {
  let card = document.getElementById("poke1-cont");
  const handleType2 = () => pokemon.types.length === 2 ? pokemon.types[1].type.name : "NONE";
  const handleFairy = (type) => type === "fairy" ? "normal" : type;
  const handleDoubleType = (type) => type === handleFairy(pokemon.types[0].type.name) ? "NONE" : type;  
  card.innerHTML = `<h1 id="poke-name1" style="color:white">${pokemon.forms[0].name.toUpperCase()}</h1><h4 class="poke-entry-vs">Pokedex Entry #${pokemon.id}</h4><img src="${pokemon.sprites.front_default}" class="poke-avatar" /><div class="poke-types"><p id="poke1-type1" style="position:relative;top:-3px;left:-20px; font-size:1rem"><span id="poke1-type1-span" class="${handleFairy(pokemon.types[0].type.name)}">Type 1: ${handleFairy(pokemon.types[0].type.name).toUpperCase()}</span><br /><span id="poke1-type2"><span id="poke1-type2-span" class="${handleDoubleType(handleFairy(handleType2()))}">Type 2: ${handleDoubleType(handleFairy(handleType2())).toUpperCase()}</span></span></p></div>`;
}

// creates card for Pokemon 2 when a comparison is submitted

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

  // creates the containers for pokemon data card 1, pokemon data card 2 and the comparison statements

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
  // for pokemon 1 if the submitted string is a number then a number is returned, else a string is converted to a number
  
  function findStringValue(string) {
    const pokeKeysLow = pokeKeys.map(poke=>poke.toLowerCase());
    const stringValue = pokeKeysLow.indexOf(string) + 1;
    if (stringValue == false) {
      return false;
    } else {
      return stringValue;
    }
  }  

  // used in ternary to determine whether a string is a valid string for the form query comparison

  const poke1 = queryValue1();
  const poke2 = queryValue2();

  // used to make sure submitted string represents a pokemon entry # from the first generation

  function isFirstGen(value) {
    if (value < 152) {
      return value;
    } else {
      return false;
    }
  }

  // used in ternary to determine whether a string is a valid string for the form query comparison, 
  // poke1 or poke2 is set to the returned value
    
  function queryValue1() {
    const value = document.getElementById("poke-box1").value;
    return value == parseInt(value) ? isFirstGen(parseInt(value)) : findStringValue(value.toLowerCase())
  }  

  function queryValue2() {
    const value = document.getElementById("poke-box2").value;
    return value == parseInt(value) ? isFirstGen(parseInt(value)) : findStringValue(value.toLowerCase())
  }

  // if the submitted comparison values are found to be valid then the below functions fetch data from the API
  // sends data to functions to create cards for pokemon 1 and pokemon 2
  
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

  // promises used in Promise.all to execute code in order, the ternary operators check for a valid pokemon value
  // and show an error if not valid

  const poke1Promise = Promise.resolve(poke1 === false ? document.getElementById("alert-text-1").style.display = "inline" : poke1True())

  const poke2Promise = Promise.resolve(poke2 === false ? document.getElementById("alert-text-2").style.display = "inline" : poke2True())

  // makes sure the above code resolves first, otherwise the below code will cause an error

  Promise.all([poke1Promise, poke2Promise])
    .then(() => {
      setTimeout(() => {
      const pokeName1 = document.getElementById("poke-name1").innerText;
      const pokeName2 = document.getElementById("poke-name2").innerText;
      const pokeType1 = document.getElementById("poke1-type1-span").innerText.substring(8).toLowerCase();
      const pokeType2 = document.getElementById("poke1-type2-span").innerText.substring(8).toLowerCase();
      const oppType1 = document.getElementById("poke2-type1-span").innerText.substring(8).toLowerCase();
      const oppType2 = document.getElementById("poke2-type2-span").innerText.substring(8).toLowerCase();

      // the two functions below select a function to use to compare pokemon 1's types and pokemon 2's types

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

      // the four functions below highlight text in the populated comparison statements based on type effectiveness

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

      // the first line of code below creates the comparison statement for pokemon 1 type 1 vs pokemon 2 type 1,
      // next three lines use a ternary to determine whether the next statement is required, if true it creates those statements
    
      document.getElementById("comp-data").innerHTML = `${pokeName1}'s <span class="${pokeType1}" style="font-weight: normal">${pokeType1}</span> type <span class="${selectHighlight1()}">${selectCompFunc1(pokeType1)}</span> against ${pokeName2}'s <span class="${oppType1}" style="font-weight: normal">${oppType1}</span> type.`

      oppType2 !== "none" ? document.getElementById("comp-data2").innerHTML = `${pokeName1}'s <span class="${pokeType1}" style="font-weight: normal">${pokeType1}</span> type <span class="${selectHighlight2()}">${selectCompFunc2(pokeType1)}</span> against ${pokeName2}'s <span class="${oppType2}" style="font-weight: normal">${oppType2}</span> type.`: document.getElementById("comp-data2").style.display ="none";

      pokeType2 !== "none" ? document.getElementById("comp-data3").innerHTML = `${pokeName1}'s <span class="${pokeType2}" style="font-weight: normal">${pokeType2}</span> type <span class="${selectHighlight3()}">${selectCompFunc1(pokeType2)}</span> against ${pokeName2}'s <span class="${oppType1}" style="font-weight: normal">${oppType1}</span> type.` : document.getElementById("comp-data3").style.display ="none";

      (oppType2 !== "none" && pokeType2 !== "none") ? document.getElementById("comp-data4").innerHTML = `${pokeName1}'s <span class="${pokeType2}" style="font-weight: normal">${pokeType2}</span> type <span class="${selectHighlight4()}">${selectCompFunc2(pokeType2)}</span> against ${pokeName2}'s <span class="${oppType2}" style="font-weight: normal">${oppType2}</span> type.` : document.getElementById("comp-data4").style.display ="none";
      

    }, 150)
  })

  // changes to the DOM when a comparison is submitted

  document.querySelector("#pokemon-collection").style.height = "auto";  
  document.querySelector("#pokemon-collection").style.overflowY = "hidden";  
  document.getElementById("poke-box1").value = "";
  document.getElementById("poke-box2").value = "";
  document.querySelector("#guide").style.display = "block";
  document.querySelector("#show-all-btn").style.display = "inline";
})

// this function creates the 151 pokemon data cards in the pokemon collection container

async function fetchCardData() {
  for (poke=1; poke<152; poke++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
    .then(resp => resp.json())
    .then(data => createCard(data))
    .catch(sendAlert)
  }
}

fetchCardData()