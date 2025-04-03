let heroStrength=95;
let villainStrength=90;
if(heroStrength>villainStrength){
     if(heroStrength-villainStrength>10){
        console.log(`Valiant triumphs decisively! Malakor is utterly outmatched!`);
     }else{
        console.log("Valiant barely edges out! A close call victory against Malakor!");
     }
}else if(heroStrength<villainStrength){
       if(villainStrength-heroStrength>10){
        console.log(`"Malakor's power is overwhelming! Valiant is soundly defeated`);
       }else{
        console.log("Malakor narrowly prevails! A hard-fought win over Valiant!");
       }
    }
else{
    console.log("It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.");
    }
