// declaration array bidimensional
const lista = [
                ["Walter", "Paolo", "Roberto"],
                ["Corsini","Rossi", "Caputo"]
]
let i

// flag variable
let result = false;

// INPUT
userName = prompt("inserisci Nome con la prima lettera maiuscola");
userLastName = prompt("inserisci Cognome con la prima lettera maiuscola");

// LOGIC
for(i = 0; i < lista[0].length; i++){
    // control name
    if(userName == lista[0][i]){
        // control lastname
        if (userLastName == lista[1][i]){
            result = true;
            break;
        }
    }
}

// OUTPUT
if (result){
    alert(`benvenuto alla festa ${lista[0][i]} ${lista[1][i]}`);
} else {
    alert("no Martini no Party " + userName + " " + userLastName);
}
