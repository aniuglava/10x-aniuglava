const time=new Date();
let forward=70;
let backward=20;
let newYear=time.getFullYear()-backward+forward;
console.log(`New Year:${newYear}`);