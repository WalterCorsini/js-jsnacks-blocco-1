const parola1 = prompt("inserisci la prima parola");
const parola2 = prompt("inserisci la seconda parola");
let result;
console.log(parola1);
console.log(parola2);

if(parola1.length > parola2.length){
    result =`la parola piu corta è "${parola2}", mentre la parola piu lunga è "${parola1}"`;
    alert(result);
} else if( parola2.length > parola1.length){
    result =`la parola piu corta è "${parola1}", mentre la parola piu lunga è "${parola2}"`;
    alert(result);
} else {
    alert("le parole inserite hanno la stessa lunghezza")
}