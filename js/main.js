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
const userWord = prompt(('Inserisci una parola qualsiasi')).toLowerCase().trim();
const palindrome = userWord.split('').reverse().join('');
console.log(palindrome);
console.log(userWord);

if (userWord === palindrome) {
    console.log('is a palindrome');
} else {
    console.log('is not');
}


