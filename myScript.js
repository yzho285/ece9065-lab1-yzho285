
class pokemon {
    constructor(number,name,typeCombo,baseATK,baseDEF){
        this.number = number;
        this.name = name;
        this.typeCombo = typeCombo;
        this.baseATK = baseATK;
        this.baseDEF = baseDEF;
    }
}//define a class for pokemon

let Bulbasaur = new pokemon("1","Bulbasaur","Grass / Poison","118","118");
let Ivysaur = new pokemon("2","Ivysaur","Grass / Poison","151","151");
let Venusaur = new pokemon("3","Venusaur","Grass / Poison","198","198");
let Charmander = new pokemon("4","Charmander","Fire","116","96");
let Charmeleon = new pokemon("5","Charmeleon","Fire","158","129");
let Charizard = new pokemon("6","Charizard","Fire / Flying","223","176");
let Squirtle = new pokemon("7","Squirtle","Water","94","122");
let Wartortle = new pokemon("8","Wartortle","Water","126","155");
let Blastoise = new pokemon("9","Blastoise","Water","171","210");
let Caterpie = new pokemon("10","Caterpie","Bug","55","62");
let Metapod = new pokemon("11","Metapod","Bug","45","94")
let Butterfree = new pokemon("12","Butterfree","Bug / Flying","167","151")
let Weedle = new pokemon("13","Weedle","Bug / Poison","63","55")
let Kakuna = new pokemon("14","Kakuna","Bug / Poison","46","86")
let Beedrill = new pokemon("15","Beedrill","Bug / Poison","169","150")
let Pidgey = new pokemon("16","Pidgey","Normal / Flying","85","76")
let Pidgeotto = new pokemon("17","Pidgeotto","Normal / Flying","117","108")
let Pidgeot = new pokemon("18","Pidgeot","Normal / Flying","166","157")
let Rattata = new pokemon("19","Rattata","Normal","103","70")
let Raticate = new pokemon("20","Raticate","Normal","161","144")
const pokemonArray = [Bulbasaur,Ivysaur,Venusaur,Charmander,Charmeleon,Charizard,Squirtle,Wartortle,Blastoise,Caterpie,
    Metapod,Butterfree,Weedle,Kakuna,Beedrill,Pidgey,Pidgeotto,Pidgeot,Rattata,Raticate]//create an array containing pokemon details


function myFunction() {
    const numberArray = ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020"]
    var inputNum = document.getElementById("myInputNum").value;
    isnumber = isNaN(inputNum);
    if (isnumber||inputNum<1||inputNum>20) {
      alert("Input is not a number between 1 and 20");
    } else {
      var numberArrayStr;
      var j = 0;
      var pokemonDescription = "search result:\n";
      for(i=0;i<20;i++){ 
        numberArrayStr = pokemonArray[i].number;
        if(numberArrayStr.indexOf(inputNum)!=-1&&j<5){
            pokemonDescription = pokemonDescription + "number:" + pokemonArray[i].number + ",name:" + pokemonArray[i].name 
            + ",typeCombo:" + pokemonArray[i].typeCombo + ",baseATK:" + pokemonArray[i].baseATK + ",baseDEF:" + pokemonArray[i].baseDEF
            + "\n";
            j = j+1;
        }else if (j>=5){
            break;
        }
        
        
      }
      alert(pokemonDescription);
    }
  }//judge if the input is number between 1-20 and alert the aim pokemon details
  
  function myFunctionChar(){
    var inputChar = document.getElementById("myInputChar").value;
    var isletter = /^[a-zA-Z]+$/.test(inputChar);
    inputLength = inputChar.length;
    if (!isletter||inputLength>20) {
      alert("Input is not a character or character length is more than 20");
    } else {
      var numberArrayStrChar;
      var j = 0;
      var pokemonDescriptionChar = "search result:\n";
      for(i=0;i<20;i++){ 
        numberArrayStrChar = pokemonArray[i].name;
        if(numberArrayStrChar.toLowerCase().includes(inputChar.toLowerCase())&&j<5){
            pokemonDescriptionChar = pokemonDescriptionChar + "number:" + pokemonArray[i].number + ",name:" + pokemonArray[i].name 
            + ",typeCombo:" + pokemonArray[i].typeCombo + ",baseATK:" + pokemonArray[i].baseATK + ",baseDEF:" + pokemonArray[i].baseDEF
            + "\n";
            j = j+1;
        }else if (j>=5){
            break;
        }
        
        
      }
      alert(pokemonDescriptionChar);
    }
  }//judge if the input is character whose length is lower than 20 and alert the aim pokemon details