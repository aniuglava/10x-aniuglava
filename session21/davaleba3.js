let healthPotion=15;
let manaPotion=5;
let total=3*healthPotion+2*manaPotion;
if(total>50){
    total=total-0.2*total;
}
console.log(total);