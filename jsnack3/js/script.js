// INPUT
// declaration variable
const listNum = [];
let sum = 0;
let flag = false;

// input number from user
for(let i = 0; i < 10; i++){
    listNum.push(parseInt(prompt("inserisci un numero")));
}
// LOGIC
// control isNaN
for(let i = 0; i < 10; i++){
    if(isNaN(listNum[i])){
        flag = true;
        break;
    }
}


// if isNan Error else Sum
if(flag === true){
    alert("dati inseriti non corretti!!");
} else{
    for(let i = 0; i < 10; i++){
        sum += listNum[i];
    }
    // OUTPUT
    alert("ecco a te la somma: "+ sum);
}


