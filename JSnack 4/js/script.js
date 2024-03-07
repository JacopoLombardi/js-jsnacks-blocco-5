
// array 
const lettereArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l'];

const numeriArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const letterePlusNumeriArray = [];


// invoco la funzione
shakeArray(lettereArray, numeriArray);



// funzione per mischiare i 2 array
function shakeArray(lettere, numeri){
   
   for(let i = 0; i < 10; i++){
      letterePlusNumeriArray.push(lettere[i]);
      letterePlusNumeriArray.push(numeri[i]);
   }
}
   

console.log(letterePlusNumeriArray)
