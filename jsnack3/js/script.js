const listNum = [];
let sum = 0;
let flag = false;
for(let i = 0; i < 10; i++){
    listNum.push(parseInt(prompt("inserisci un numero")));
}
let contatore = 0;
// console.log(listNum);
for(let i = 0; i < 10; i++){
    if(isNaN(listNum[i])){
        flag = true;
        break;
    }
}

if(flag === true){
    alert("dati inseriti non corretti!!");
} else{
    for(let i = 0; i < 10; i++){
        sum += listNum[i];
    }
}


alert("ecco a te la somma: "+ sum);

