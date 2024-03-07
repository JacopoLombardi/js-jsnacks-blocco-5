
// array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const emptyArray = [];

// variabili
const a = 3;
const b = array.length - 1;



// invoco la funzione
between(a, array);



// funzione
function between(a, array){

   // ciclo for in per avere l'indice dell'array
   for(i in array){

      if(i >= a){
         emptyArray.push(array[i]);
      }
   }
}

console.log(emptyArray)

