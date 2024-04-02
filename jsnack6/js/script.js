// INPUT
// declaration empty array and variable
const arrayCube = [];
let userNumber = parseInt(prompt("inserisci quanti numeri vuoi vedere al cubo"));

// flag
let flag = false;

// LOGIC
// if user number isNaN  "lazy evaluation condition"
if(isNaN(userNumber)){3
    flag = true;
}

for(let i = 1; i < userNumber+1 && flag == false; i++){
    arrayCube.push(i*i*i);
}

// OUTPUT
alert(`i tuoi ${userNumber} numeri al cubo sono i seguenti: ${arrayCube}`);