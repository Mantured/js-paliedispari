/*
    A) Chiediamo all'utente di inserire una parola
        -- con un prompt o un imput su html DOM
    B) Creare una funzione per stabnilire se la parola inseritra è palindroma
        --prima bisogna stabilire le caratteristiche delle parole palindrome

            -->creiamo un arrey di possobili parole palindomre?

            -->c'è un modo per stabilire se una parola ANNA è != da GINO

            -->forse se: se le lettere che compongono la parola sono dispari, cambia solo la lettera centrale,
            mentre se sono pari le lettere sono simmetircamente o a specchio uguali. poi vediamo

            -->oppure la prendo la parola la divido con split la rigiro e dopo di che la ricompongo per controllare che sia uguale alla parola (valore) di partenza

*/

// let userWord = prompt(('Inserisci una parola qualsiasi')).toLowerCase().trim();
// creo una condizione, finchè l'utente non inserisce un valore che sia diverso da numeri il prompt continua a chiedere di inserire un numero
/* while (!(isNaN(userWord))) {
    userWord = document.querySelector('#input-word').value.toLowerCase().trim();
}
if (checkPalindrome(userWord)) {
    console.log('is a palindrome');
} else {
    console.log('is not a palindrome');
} */


/**
 *
 * @param {*} word argoument che verrà poi inserito dall'utente
 * @returns ciò che mi "ritorna" è l'argomento solo reverse
 */

function checkPalindrome(word) {
    let palindrome = word.split('').reverse().join('');
    return word === palindrome;
}

document.getElementById('check-pal').addEventListener('click', function () {
    let userWord = document.querySelector('#input-word').value.toLowerCase().trim();
    let msg = document.getElementById('msg');
    if (!(isNaN(userWord))) {
        msg.innerHTML = 'il valore inserito non è valido!!!'
    }
    else if (checkPalindrome(userWord)) {
        msg.innerHTML = 'Complimenti la tua parola e palindroma'
    } else {
        msg.innerHTML = 'Mi spiace la tua parola non è palindroma, se non sai cos\'è <a href="https://it.wikipedia.org/wiki/Palindromo">clicca qui</a>, se invece vuoi una lista di parole che possono tornarti utili <a href="https://www.scuola-e-cultura.it/scuola/lingua-italiana/palindromo.htm">clicca qui</a>'
    }

})



//! PARI O DISPARI

/*
    A) Scegli pari o Dispari
    B) Inserisce un numero da 1 a 5
    C) generiamo un numero random da 1 a 5 per IA ()funzione
    D) sommiamo i due numeri
    E) stabiliamo se la somma è pari o dispari
    F) stabiliamo il vincitore il che implica che se utente sceglie pari pc --> dispari se sceglie dispari pc--> pari
*/


//let oddOrEven = prompt('Pari o Dispari').toLowerCase().trim(); //devo fare un controllo che mi avvisi l'user "non hai inserito un valore corretto"
/* while ((oddOrEven != 'pari') && (oddOrEven != 'dispari')) {
    oddOrEven = prompt('Pari o Dispari').toLowerCase().trim();
}; */

let oddOrEven = document.querySelector('#input-odd-even').value.toLowerCase().trim();
let inputNumber = document.getElementById('input-number').value;
let userNumber = parseInt(inputNumber);
let msgGame = document.querySelector('#odd-or-even');

/* console.log(typeof oddOrEven);
console.log(typeof userNumber); */

function isOddOrEven(number) { // sto dichiarando una funzione con un singolo argomento (che sarà poi la mia somma);
    if (number % 2 === 0) return 'pari'; //se è pari mi ritorna il vaolre booleano vero o falso , in questo caso vero pari
    else return 'dispari';  //sempre grazie a grazziella
}

document.getElementById('submit').addEventListener('click', function () {
    if ((oddOrEven != 'pari') && (oddOrEven != 'dispari')) {
        msgGame.innerHTML = 'devi scegliere o Pari o Dispari, non è difficile!';
    }
    if (isNaN(userNumber) || (userNumber <= 0) || (userNumber > 5)) {
        msgGame.innerHTML = 'devi inserire un numero! e che sia compreso da 1 a 5';
    }

    if ((oddOrEven != 'pari') && (oddOrEven != 'dispari') && (isNaN(userNumber) || (userNumber <= 0) || (userNumber > 5))) {
        msgGame.innerHTML = 'devi scegliere o Pari o Dispari e inserire un numero valido da 1 a 5';
    }

    /* let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5')); */
    // (userNumber > 0) && (userNumber <= 5) finchè non inserisce un numero che sia un numero e che sia 0 < X <= 5 continua a chiedermi il numero && ((userNumber = 0) && (userNumber >= 5))
    /* while ( isNaN(userNumber) || (userNumber <= 0) || (userNumber > 5)  ){
        userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
    }; */
    //numero randomico da 1 a 5

    let randomInt = (Math.floor(Math.random() * 5) + 1);
    console.log(randomInt);

    if (isOddOrEven(randomInt + userNumber) === oddOrEven) {    //richiamo la funzione --> che mi restituisce un valore preciso che vado a verificarlo con quello inserito dall'utente
        msgGame.innerHTML = 'complimenti hai vinto il gioco più random di sempre';
    } else { // grazie a grazziella
        msgGame.innerHTML = 'mi spiace, pure il caso ti ha voltato le spalle';
    }
})


/*

let sum = (randomInt + userNumber);
console.log(sum);
let result = "";

if (sum % 2 === 0) { //se la somma è pari
    result = 'pari'; //allora il valore di result è 'pari'
    if (oddOrEven === result) { // if interno , se la scelta dell'utente è uguale a result allora win altrimenti loss
        console.log('win');
    } else {
        console.log('loss');
    }
} else { // se non è pari è dispari "grazia a grazziella"
    result = 'dispari'; // allora il valore di result è 'dispari'
    if (oddOrEven === result) { // quindi se il valore di result è uguale alla scelta dell'utente ha vinto
        console.log('win');
    } else {
        console.log('loss'); // altrimenti ha perso
    }
} */









