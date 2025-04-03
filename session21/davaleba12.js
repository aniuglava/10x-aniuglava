const speedLimit=50;
let carSpeed=30;
carSpeed+=25;
console.log(`Current speed:${carSpeed}`)
if(carSpeed>speedLimit){
    console.log("Speed Warning: You are going too fast!");
}
else{
    console.log("Speed is okay.");
}