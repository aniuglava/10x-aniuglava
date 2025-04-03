let hasTreasureMap=true;
let foundAncientKey=false;
let solvedRiddleScroll=true;
let hasCompass=false;
let isFullMoon=false;
let canFindTreasure=(hasTreasureMap&&foundAncientKey)||(hasTreasureMap&&solvedRiddleScroll&&hasCompass);
if(canFindTreasure==true){
    console.log("Success! Alex can find the legendary treasure!");
}else{
    console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.");
}