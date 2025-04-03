let kitchenHasGhosts=true;
let livingRoomHasGhosts=false;
let isHouseSafe=kitchenHasGhosts&&livingRoomHasGhosts;
if(isHouseSafe==true){
    console.log("The house is safe! No ghosts in the Kitchen or Living Room.");
}
else{
    console.log("Danger! The house is NOT safe. Ghosts detected!");
}