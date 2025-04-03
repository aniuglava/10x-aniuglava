let fuelCapacity=100;
let currentFuel=70;
let percentage=currentFuel/fuelCapacity*100;
if(percentage>80){
    console.log(`Spaceship is ready for launch, Fuel:${percentage}%`);
}else{
    console.log(`Spaceship is not ready for launch, Fuel:${percentage}%`);
}