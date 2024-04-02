// INPUT
// declaration empty array and variable
const arrayCube = [];
let userNumber = parseInt(prompt("inserisci quanti numeri vuoi vedere al cubo"));

// flag
let flag = false;

// LOGIC
// if user number isNaN  "lazy evaluation condition"
if(isNaN(userNumber)){
    flag = true;
}

for(let i = 1; i < userNumber+1 && flag == false; i++){
    arrayCube.push(Math.pow(i,3));
    console.log(arrayCube);
}

// OUTPUT
alert(`i tuoi ${userNumber} numeri al cubo sono i seguenti: ${arrayCube}`);