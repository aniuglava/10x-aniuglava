//1. Pokémon Battle – Function Basics
/*function compareAttack(pokemon1,attack1,pokemon2,attack2){
    if(attack1>attack2){
        console.log(pokemon1+" is stronger!");
    }else{
        console.log(pokemon2+" is stronger!");
    }
}
compareAttack("Pikachu",55,"Charizard",84);
*/

//2. Hogwarts Spell Casting – Function Parameters
/*function castSpell(spell,wizard){
    console.log(wizard+" casts "+spell+"!");
}
castSpell("Expelliarmus","Hermione"); */

//3. One Piece Bounty Calculator – Return Values
/*function calculateBounty(currentBounty,increase){
    return currentBounty+increase;
}
let x=calculateBounty(1500000000, 500000000);
console.log(x); */

//4. Jedi Training – Default Parameters
/*function trainJedi(name,stregth=50){
    return name+" has "+stregth+" Power";
}
console.log(trainJedi("Luke",100));
console.log(trainJedi("Rey"));
*/

//5. Gollum’s Precious – String Manipulation
/*function gollumSays(phrase){
    return phrase+"..."+phrase+"..."+phrase+"...";
}
console.log(gollumSays("My Precious"));
*/

//6. Super Mario Power-Up – Function Expressions
/*function powerUp(jumpHeight){
    return jumpHeight*2;
}
console.log(powerUp(5));
*/

//7. Naruto’s Shadow Clone Jutsu – Arrow Functions
/*
const shaddowClone=(count)=>count*5;
console.log(shaddowClone(10)+" clones were created!");
*/

//8. Sorting the Sorting Hat – Callback Functions
/* const randomHouse=()=>{
    let x=Math.floor(Math.random() * 4);
    let houseName;
    if(x==1){
        houseName="Gryffindor";
    }else if(x==2){
        houseName="Slytherin";
    }else if(x==3){
        houseName="Ravenclaw";
    }else{
        houseName="Hufflepuff";
    }
    return houseName;
}
    

function sortStudent(name,callback){
    const house=callback();
    console.log("Sorting "+name+" into "+house);

}
sortStudent("Harry",randomHouse);
sortStudent("Harry", () => "Gryffindor");
*/

//9. Infinity Gauntlet – Function Scope
/*
function snapFingers(){
    let stones=6;
    function checkStones(){
        if(stones==6){
        console.log("Thanos has 6 stones. The universe trembles!");
        }
    }
    checkStones();
}
snapFingers();
*/

//10. Time-Turner – Function Hoisting
/*
turnBackTime();
function turnBackTime(){
    console.log("Going back in time!");
}
 */

//11. Batman’s Secret Identity – Function Closures
/*function batman(){
    let identity="I am Batman";
  function secret(){
    return identity;
  }
  return secret; 
}
const heroName=batman();
console.log(heroName());
*/

//12. The Enchanted Mirror – Higher-Order Functions
/*
function magicMirror(message,transformFunction){
    return transformFunction(message); 
}
function transformFunction(message){
    return "Mirror says "+message.toUpperCase();
}
console.log(magicMirror("Will I be rich?", transformFunction));
console.log(magicMirror("Will I be rich?", str => str.toUpperCase()));
*/
