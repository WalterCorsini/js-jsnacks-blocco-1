// INPUT
// declaration variable
let userNumber = prompt("inserisci un numero di 4 cifre");
// flag variable
let flagIsNan = false;
let flagNumberCorrect = false;
let sum = 0;
let cont = 0;
console.log(userNumber);
// LOGIC
//  lazy evaluation condition
if (userNumber == null || userNumber == "") {
  alert("campo vuoto");
} else {
  if (isNaN(userNumber) && flagIsNan == false) {
    flagIsNan = true;
  }
  if (userNumber.length < 4 && flagIsNan == false) {
    flagNumberCorrect = true;
  }
  //  lazy evaluation condition

  // sum
  for (
    let i = 0;
    i < userNumber.length && flagIsNan == false && flagNumberCorrect == false;
    i++
  ) {
    sum += parseInt(userNumber[i]);
  }

  // OUTPUT
  if (flagIsNan == false && flagNumberCorrect == false) {
    alert(`la somma del tuo numero è di ${sum}`);
  } else if (flagIsNan) {
    alert("non hai inserito i dati correttamente");
  } else if (flagNumberCorrect) {
    alert("il tuo numero non è da 4 cifre");
  }
}
