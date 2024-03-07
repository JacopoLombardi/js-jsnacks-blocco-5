
// variabili
const output  = document.querySelector('._output');
const parola = 'ciao';



// output
output.innerHTML += reverseWord(parola);




// funzione che rigira la parola
function reverseWord(word){

   // divido la parola in lettere e le metto in un array, rigiro le lettere, ricompongo la parola in una stringa
   const reversedWord = word.split('').reverse().join('');
   return reversedWord;
};