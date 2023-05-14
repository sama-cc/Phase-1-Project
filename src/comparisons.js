// below areall of the compare functions for each pokemon type

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