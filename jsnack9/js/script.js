// INPUT
// declaration variable
userNumber = parseInt(prompt("da che numero vuoi che inizi a fare la somma per i successivi 10?"));
let sum = 0;
let flag = false;

// LOGIC
// lazy evaluation condition
if(userNumber == null || isNaN(userNumber) || userNumber == ""){
    alert("dati inseriti non corretti");
} else{
    for(let i = userNumber; i < userNumber+10; i++){
        sum += i;
        console.log(sum);
    }
// OUTPUT
    alert(`la somma totale dal numero da cui siamo partiti "${userNumber}" ai successivi 10 numeri è di: ${sum}`);
}
