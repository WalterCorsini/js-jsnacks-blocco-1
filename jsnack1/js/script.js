const number1 = parseInt(prompt("Inserisci il primo numero"));
const number2 = parseInt(prompt("Inserisci il secondo numero"));


if(number1 > number2 && !isNaN(number1) && !isNaN(number2)){
    alert("il primo numero inserito(" + number1 + ") è piu grande");
} else if ( number1 < number2 && !isNaN(number1) && !isNaN(number2)){
    alert("il secondo numero inserito(" + number2 + ") è piu grande");
    
} else if (number1 == number2 && !isNaN(number1) && !isNaN(number2)){
    alert("i tuoi numeri sono uguali");
} else {
    alert("dati inseriti non corretti");
}