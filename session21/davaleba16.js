let ticketPrice=20;
let ticketsSold=500;
let concertCosts=8000;
let totalConcertEarnings=ticketPrice*ticketsSold;
let profit=totalConcertEarnings-concertCosts;
if(profit>0){
    console.log(`Concert Profit: ${profit} Great Success!`);
}else{
    console.log(`Concert did not cover costs.Earnings:${totalConcertEarnings}, costs: ${concertCosts}`);
}
