let conPrice=4;
let sundaePrice=8;
let conesSoldToday=1;
let sundaesSoldToday=10;
let coneEarnings=conPrice*conesSoldToday;
let sundaeEarnings=sundaePrice*sundaesSoldToday;
let totalEarnings=coneEarnings+sundaeEarnings;
let finalEarnings;
let isDiscount;
if(totalEarnings>=1000){
    isDiscount=true;
    finalEarnings=totalEarnings*95/100;
}
console.log(`Total Earnings:${totalEarnings}`);
if(isDiscount==true){
    console.log(`Volume Discount Applied: Yes.
        The amount of discount applied: ${totalEarnings*5/100}
        Final total daily earnings: ${finalEarnings}`);
}else{
    console.log(`Volume Discount Applied:No`);
    console.log(`The amount of discount applied:0$
    Final total daily earnings: ${totalEarnings}`);
}