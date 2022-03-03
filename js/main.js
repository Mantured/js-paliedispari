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

/**
 *
 * @param {*} word argoument che verrà poi gestito dalla funzione
 * @returns ciò che mi "ritorna" è l'argomento solo reverse
 */

/*
function checkPalindrome(word) {
    let palindrome = word.split('').reverse().join('');
    return word === palindrome;
}

// creo una condizione, finchè l'utente non inserisce un valore che sia diverso da numeri il prompt continua a chiedere di inserire un numero

while (!(isNaN(userWord))) {
    userWord = prompt(('Inserisci una parola qualsiasi')).toLowerCase().trim();
}

if (checkPalindrome(userWord)) {
    console.log('is a palindrome');
} else {
    console.log('is not a palindrome');
}
*/









/*
    A) Scegli pari o Dispari
    B) Inserisce un numero da 1 a 5
    C) generiamo un numero random da 1 a 5 per IA ()funzione
    D) sommiamo i due numeri
    E) stabiliamo se la somma è pari o dispari
    F) stabiliamo il vincitore il che implica che se utente sceglie pari pc --> dispari se sceglie dispari pc--> pari
*/


/* let oddOrEven = prompt('Pari o Dispari').toLowerCase().trim(); */ //devo fare un controllo chemi avvisi l'user "non hai inserito un valore corretto"
/* const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5')); */

/* while ((oddOrEven != 'pari') && (oddOrEven != 'dispari')) {
    oddOrEven = prompt('Pari o Dispari').toLowerCase().trim();
}

if (oddOrEven === 'pari') {
    console.log('pari');
} else {
    console.log('dispari');
} */


/*
let randomInt = (Math.floor(Math.random() * 5) + 1);
console.log(randomInt);

let sum = (randomInt + userNumber);
console.log(sum);

if (sum % 2 === 0) {
    console.log('pari');
} else {
    console.log('dispari');
}
 */
