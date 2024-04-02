// INPUT
// declaration array
const finalArray = [];
const inputArray = [];
// flag variable;
let flag = false;

// input 6 number from user and add in array
for(let i = 0; i < 6; i++){
    inputArray.push(parseInt(prompt("inserisci un numero")));

// LOGIC
    // controll in input if isNaN
    if(isNaN(inputArray[i])){
        flag = true;
        break;
    }
}

// controll flag true or not
if(flag){
    alert("dati inseriti non corretti");
// controll odd number or not
} else {
    for(let i = 0; i < 6; i++){
        if(inputArray[i] % 2 !== 0){
            finalArray.push(inputArray[i]);
        }
    }
}

// OUTPUT
if(finalArray.length != 0 && flag === false){
    alert("i numeri dispari che hai inserito sono: " + finalArray);
} else if (flag === false){
    alert("non hai inserito nessun numero dispari");
}